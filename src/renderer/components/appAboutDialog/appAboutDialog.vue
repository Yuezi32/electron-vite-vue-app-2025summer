<script setup>
import { ref, computed } from 'vue'
import { ElDialog, ElMessage, ElMessageBox } from 'element-plus'
import imgLogo from '@renderer/common/images/logo.png'
import imgElectron from '@renderer/common/images/electron.svg'
import imgChrome from '@renderer/common/images/chrome.svg'
import imgNodejs from '@renderer/common/images/nodejs.svg'
import pkg from '@renderer/../../package.json'

// 正在检查更新loading
const checkUpdateLoading = ref(false)
// 安装包下载进度
const downloadProgress = ref(-1)
// 安装包下载状态。default=默认，downloading=下载中，ready=下载完成，failed=下载失败
const updateStatus = ref('default')

// 声明组件要接收哪些 props
// 这里接收了 modelValue，用来控制弹窗显示或隐藏
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    }
})

// 声明组件可以向外发送哪些事件
// 这里声明了 update:modelValue，用于更新 v-model
const emit = defineEmits(['update:modelValue'])

// 定义一个计算属性 visible
// 它做了 v-model 的“桥梁”作用：
// get：从 props.modelValue 取值（父传子）
// set：触发 update:modelValue 事件，把新值告诉父组件（子传父）
const visible = computed({
    // getter：从 props.modelValue 读取当前值
    get: () => props.modelValue,
    // setter：当 visible 被修改时，触发事件通知父组件更新 v-model
    set: (val) => emit('update:modelValue', val)
})

// Electron 版本信息
const versions = window.electron ? window.electron.process.versions : null

// 是否有window.api
const hasWindowApi = computed(() => {
    return window.api ? true : false
})

// 检查更新
function checkForUpdate() {
    checkUpdateLoading.value = true
    // 通过preload.js向主进程发送消息
    window.api.appCheckUpdate((event, result) => {
        checkUpdateLoading.value = false
        if (result.hasUpdate) {
            ElMessageBox.confirm(`发现新版本v${result.version}，是否立即下载并安装？`, {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    downloadUpdate()
                })
                .catch(() => {})
        } else if (!result.error) {
            ElMessage({
                message: '当前已是最新版本。',
                type: 'success'
            })
        } else {
            updateStatus.value = 'failed'
            console.error('检查更新失败', result.message)
        }
    })
}

// 下载安装包
function downloadUpdate() {
    // 通过preload.js向主进程发送消息
    updateStatus.value = 'downloading'
    downloadProgress.value = 0
    window.api.appDownloadUpdate((event, result) => {
        if (result.status === 'downloading') {
            downloadProgress.value = Math.round(result.progress)
        } else if (result.status === 'done') {
            updateStatus.value = 'ready'
        } else if (result.status === 'failed') {
            updateStatus.value = 'failed'
            console.error('下载失败', result.message)
        }
    })
}

// 重试更新
function retryUpdate() {
    checkForUpdate()
}

// 关闭应用并安装更新
function quitAndInstall() {
    ElMessageBox.confirm('现在关闭软件并立即更新吗？', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
        // 通过preload.js向主进程发送消息
        window.api.appQuitAndInstall()
    })
}
</script>

<template>
    <el-dialog
        v-model="visible"
        title="关于软件"
        width="600px"
        :close-on-click-modal="false"
        center
        class="M-appAboutModal"
    >
        <div class="about-con">
            <div class="logo-con">
                <img :src="imgLogo" alt="" height="80" />
                <p>图片压缩小工具 v{{ pkg.version }}</p>
                <p style="margin-top: 10px">
                    <el-button
                        v-if="updateStatus === 'default'"
                        type="primary"
                        @click="checkForUpdate"
                        :loading="checkUpdateLoading"
                        :disabled="!hasWindowApi"
                    >
                        {{ hasWindowApi ? '检查更新' : '检查更新（不支持Web）' }}
                    </el-button>

                    <span v-if="updateStatus === 'downloading'">
                        正在下载更新：{{ downloadProgress }}%
                    </span>
                    <span class="error" v-if="updateStatus === 'failed'">
                        更新失败
                        <el-button
                            type="primary"
                            size="small"
                            @click="retryUpdate"
                            style="margin-left: 8px"
                        >
                            重试
                        </el-button>
                    </span>
                    <span class="success" v-if="updateStatus === 'ready'">
                        下载完成
                        <el-button
                            type="primary"
                            size="small"
                            @click="quitAndInstall"
                            style="margin-left: 8px"
                        >
                            立即安装
                        </el-button>
                    </span>
                </p>
            </div>
            <div class="core-con">
                <p>内核版本：</p>
                <p>
                    <img :src="imgElectron" alt="" width="20" />
                    Electron {{ versions ? 'v' + versions.electron : '请在Electron中查看' }}
                </p>
                <p>
                    <img :src="imgChrome" alt="" width="20" />
                    Chromium {{ versions ? 'v' + versions.chrome : '请在Electron中查看' }}
                </p>
                <p>
                    <img :src="imgNodejs" alt="" width="20" />
                    Node.js {{ versions ? 'v' + versions.node : '请在Electron中查看' }}
                </p>
            </div>
        </div>
    </el-dialog>
</template>

<style scoped lang="stylus">
.M-appAboutModal
    .about-con
        display: flex
        padding: 30px
        gap: 80px
    .logo-con
        width: 190px
        text-align: center
        .error
            color: var(--el-color-error)
        .success
            color: var(--el-color-success)
    .core-con
        display: flex
        flex-direction: column
        gap: 16px
        p
            display: flex
        img
            margin-right: 6px
</style>
