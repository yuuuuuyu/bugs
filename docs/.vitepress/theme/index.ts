import DefaultTheme from "vitepress/theme"
import { h } from "vue"
// import {createPinia} from 'pinia'
import ElementPlus from "element-plus"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import { useComponents } from "./useComponents"
import "vitepress-theme-demoblock/dist/theme/styles/index.css"
import "element-plus/dist/index.css"
import "./styles/index.css"
import "./iconfont/iconfont.css"

// 自定义组件
import AsideTop from "./components/AsideTop.vue"
import comment from "./components/Comment.vue"

export default {
  ...DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "doc-after": () => h(comment),
      //   "doc-footer-before": () => h(docFooterBefore),
      "aside-top": () => h(AsideTop),
      //   "doc-bottom": () => h(imageViewer),
    })
  },
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
  },
}

