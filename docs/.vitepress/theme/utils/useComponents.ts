/*
 * @Description: 扩展默认主题
 * @Author: (于智勇)zhiyong.yu@ytever.com
 * @Date: 2025-05-17
 */
import DefaultTheme from "vitepress/theme"
import CustomVideo from "../components/CustomVideo.vue"

export function useComponents() {
  return {
    // 扩展默认主题配置
    extends: DefaultTheme,
    // 注册自定义组件
    enhanceApp({ app }) {
      app.component("CustomVideo", CustomVideo)
    },
  }
}

