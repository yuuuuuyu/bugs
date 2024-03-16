// Don't remove this file, because it registers the demo components.
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
import LanguageChart from "../../components/index/LanguageChart.vue"
import { ElPopover } from "element-plus"

export function useComponents(app) {
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
    app.component("ElPopover", ElPopover)
    app.component("LanguageChart", LanguageChart)
}
