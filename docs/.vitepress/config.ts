import { UserConfig } from "vitepress"
import { demoBlockPlugin } from "vitepress-theme-demoblock"
import Markd from "markdown-it-task-lists"

import nav from "./config/nav"
import sidebar from "./config/sidebar"

const config: UserConfig = {
  base: "/bugs",
  outDir: "../dist/bugs",
  build: {
    minify: true,
  },
  head: [["link", { rel: "icon", href: "/bugs/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: [2, 4],
    outlineTitle: "大纲",
    lastUpdatedText: "最近更新时间",
    nav,
    sidebar,
    logo: "/logo.png",
    footer: {
      message:
        '<a href="https://gitee.com/yuuuuuyu/bugs" target="_blank">网站已开源，欢迎star</a>',
      copyright: "Copyright © 2022-present yuzhiyong",
    },
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },
    editLink: {
      pattern: "https://gitee.com/yuuuuuyu/bugs/blob/develop/docs/:path",
      text: "在Gitee上编辑此页",
    },
  },

  title: "Bugs",
  lang: "zh-CN",
  description: "bug大集合",

  markdown: {
    config: md => {
      md.use(demoBlockPlugin, {
        customStyleTagName: 'style lang="scss"', // style标签会解析为<style lang="scss"><style>
      })
      md.use(Markd)
    },
  },
}

export default config

