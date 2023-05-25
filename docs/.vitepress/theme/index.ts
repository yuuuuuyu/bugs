import DefaultTheme from 'vitepress/theme'
// import {createPinia} from 'pinia'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {useComponents} from './useComponents'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import 'element-plus/dist/index.css'
import './styles/index.css'

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        // 引三方组件
        // const pinia = createPinia()
        DefaultTheme.enhanceApp(ctx)

        // ctx.app.use(pinia)
        ctx.app.use(ElementPlus)
        // 全局加载 自定义组件
        useComponents(ctx.app)

        // Object.entries(components).forEach(([name, component]) => {
        // ctx.app.component(name, component)
        // })
        Object.entries(ElementPlusIconsVue).forEach(([name, component]) => {
            ctx.app.component(name, component)
        })
    }
}
