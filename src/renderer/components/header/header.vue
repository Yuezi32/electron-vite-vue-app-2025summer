<script setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
import AppAboutDialog from '@renderer/components/appAboutDialog/appAboutDialog.vue'

// 是否显示关于软件的MDialog
const showAppAboutDialog = ref(false)

// router钩子，返回路由器实例
const router = useRouter()

// 从localStorage获取登录信息
const loginInfo = window.localStorage.getItem('Electron_Login_Info')

// 下拉菜单触发指令
const handleCommand = (command) => {
    if (command === 'showAppAbout') {
        showAppAboutDialog.value = true
    } else if (command === 'signout') {
        ElMessageBox.confirm('确定要退出登录么？', {
            confirmButtonText: '退出',
            cancelButtonText: '取消',
            type: 'warning'
        })
            .then(() => {
                // 清除登录信息
                window.localStorage.removeItem('Electron_Login_Info')
                // 跳转到登录页面
                router.push('/login')
            })
            .catch(() => {})
    }
}
</script>

<template>
    <div class="M-header">
        <div class="header-wrapper">
            <div class="logo-con">
                <img src="@renderer/common/images/logo.png" alt="" />
                <span class="logo-text">图片压缩小工具</span>
            </div>
            <div class="header-con">
                <el-dropdown @command="handleCommand" class="user-menu">
                    <span class="el-dropdown-link">
                        {{ loginInfo ? JSON.parse(loginInfo).nickname : '未登录' }}
                        <el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item command="showAppAbout">关于软件</el-dropdown-item>
                            <el-dropdown-item command="signout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
    <AppAboutDialog v-model="showAppAboutDialog" />
</template>

<style scoped lang="stylus">
.M-header
    padding: 8px
    height: 52px
    line-height: 36px
    .header-wrapper
        display: flex
        min-width: 520px
    .logo-con
        display: flex
        img
            height: 36px
        .logo-text
            margin-left: 6px
            font-size: 18px
            font-weight: bold
    .header-con
        display: flex
        flex: 1
        justify-content: flex-end
        gap: 20px
        .user-menu
            line-height: 36px
</style>
