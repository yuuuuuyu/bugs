// @ts-nocheck
// TODO 不可删除 注册演示组件
import Demo from "vitepress-theme-demoblock/dist/client/components/Demo.vue"
import DemoBlock from "vitepress-theme-demoblock/dist/client/components/DemoBlock.vue"

import { ElPopover } from "element-plus"

import DrawingBed from "./components/DrawingBed.vue"

export function useComponents(app) {
  app.component("Demo", Demo)
  app.component("DemoBlock", DemoBlock)
  app.component("ElPopover", ElPopover)
  app.component("DrawingBed", DrawingBed)
}

