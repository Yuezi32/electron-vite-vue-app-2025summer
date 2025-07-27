<script setup>
import { ref, onMounted } from 'vue'
import Header from '@renderer/components/header/header.vue'

// 是否显示更新提示对话框
const updateDialogVisible = ref(false)
// 新版本号
const newVersion = ref('')

// 关闭应用并安装
function handleInstall() {
    window.api && window.api.appQuitAndInstall()
}

onMounted(() => {
    // 启动静默检查更新并下载
    // 这里先判断window.api是否存在是因为兼容非Electron环境（纯Web环境是没有window.api）。
    // 兼容的最终效果就是：非Electron环境（纯Web环境）不检查更新
    window.api &&
        window.api.appSilentCheckAndDownload((event, result) => {
            console.log(result.message)
            updateDialogVisible.value = true
            newVersion.value = result.version
        })
})
</script>

<template>
    <div style="overflow: hidden; height: 100%">
        <Header />
        <router-view />
    </div>
    <el-dialog
        v-model="updateDialogVisible"
        title=""
        width="360"
        class="M-new-version-dialog"
        :close-on-click-modal="false"
        :show-close="false"
    >
        <div class="content-con">
            <img src="@renderer/common/images/balloon.svg" class="img" alt="" />
            <div class="tips-con">
                <div style="font-size: 16px">新版本v{{ newVersion }}已就绪，请安装更新。</div>
                <div style="margin-top: 6px">
                    <el-button @click="updateDialogVisible = false">稍后再安装</el-button>
                    <el-button type="primary" style="margin-left: 10px" @click="handleInstall">
                        立即关闭并安装
                    </el-button>
                </div>
            </div>
        </div>
    </el-dialog>
</template>

<style lang="stylus">
.M-new-version-dialog
    .el-dialog__header
        display: none
    .content-con
        display: flex
        gap: 10px
        align-items: center
        padding: 6px
        .img
             width: 50px
             height: 50px
         .tips-con
             flex: 1
             text-align: left
</style>
