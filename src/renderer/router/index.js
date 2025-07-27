import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@renderer/pages/login/login.vue'
import Entry from '@renderer/pages/entry/entry.vue'
import Home from '@renderer/pages/home/home.vue'

// 简易路由守卫
const privateRoute = (to, from, next) => {
    // 判断localStorage是否有登录用户信息，如果没有则跳转登录页
    window.localStorage.getItem('Electron_Login_Info') ? next() : next('/login')
}

const routes = [
    {
        // 匹配 "/login" -> Login页面
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        // 未匹配 "/login"，则进入 Entry 页面
        path: '/',
        component: Entry,
        beforeEnter: privateRoute,
        children: [
            {
                // 匹配 "/home" -> Home页面
                path: 'home', // 注意：这里写相对路径
                name: 'Home',
                component: Home
            },
            {
                // 如果 URL 是 "/"，跳转到 "/home"
                path: '',
                redirect: '/home'
            },
            {
                // 未匹配，跳转到 "/login"
                path: ':pathMatch(.*)*',
                redirect: '/login'
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
