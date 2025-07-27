import { createApp } from 'vue'
// 全局样式
import '@renderer/common/styles/frame.styl'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import App from '@renderer/App.vue'
import router from './router'

const app = createApp(App)
// 加载所有Element Plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
// 加载Element Plus
app.use(ElementPlus, {
    locale: zhCn
})
app.use(router)
app.mount('#app')
