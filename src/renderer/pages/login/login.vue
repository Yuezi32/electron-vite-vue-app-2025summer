<script setup>
import { ref } from 'vue'
import pkg from '@renderer/../../package.json'
import { useRouter } from 'vue-router'

const account = ref('')
const password = ref('')

// router钩子，返回路由器实例
const router = useRouter()

// 登录
const handleLogin = () => {
    // 模拟登录成功,将登录信息存储到localStorage中
    window.localStorage.setItem(
        'Electron_Login_Info',
        JSON.stringify({
            uid: 1000,
            nickname: '兔子先生'
        })
    )
    // 跳转到Home页面
    router.push('/home')
}
</script>

<template>
    <div class="P-login">
        <img src="@renderer/common/images/logo.png" class="logo" />
        <h1>图片压缩小工具 v{{ pkg.version }}</h1>
        <div class="ipt-con">
            <el-input v-model="account" placeholder="账号" />
        </div>
        <div class="ipt-con">
            <el-input v-model="password" type="password" placeholder="密码" show-password />
        </div>
        <div class="ipt-con">
            <el-button type="primary" style="width: 100%" @click="handleLogin">登录</el-button>
        </div>
    </div>
</template>

<style scoped lang="stylus">
.P-login
    height: 100%
    background: #7adbca
    overflow: hidden
    h1
        margin-bottom: 20px
        text-align: center
        color: #fff
        font-weight: bold
        font-size: 28px
    .logo
        display: block
        margin: 50px auto 20px
        height: 128px
    .ipt-con
        margin: 0 auto 20px
        width: 400px
</style>
