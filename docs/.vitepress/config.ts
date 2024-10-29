import { UserConfig } from "vitepress"
import { demoBlockPlugin } from "vitepress-theme-demoblock"
import Markd from "markdown-it-task-lists"

import nav from "./config/nav"
import sidebar from "./config/sidebar"

// 奥德彪语录
// import oldBiao from "./theme/utils/oldBiao"
// const message = oldBiao[Math.floor(Math.random() * oldBiao.length)]

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
    outlineTitle: "当前页面",
    lastUpdated: {
      text: "最近更新时间",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    socialLinks: [{ icon: "github", link: "https://github.com/yuuuuuyu" }],
    nav,
    sidebar,
    logo: "/logo.png",
    footer: {
      message: "乾坤未定，你我皆是黑马；闹钟一响，你我皆是牛马",
      copyright: "Copyright © 2022-present yuzhiyong",
    },
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            placeholder: "搜索文档",
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                searchBox: {
                  resetButtonTitle: "清除查询条件",
                  resetButtonAriaLabel: "清除查询条件",
                  cancelButtonText: "取消",
                  cancelButtonAriaLabel: "取消",
                },
                startScreen: {
                  recentSearchesTitle: "搜索历史",
                  noRecentSearchesText: "没有搜索历史",
                  saveRecentSearchButtonTitle: "保存至搜索历史",
                  removeRecentSearchButtonTitle: "从搜索历史中移除",
                  favoriteSearchesTitle: "收藏",
                  removeFavoriteSearchButtonTitle: "从收藏中移除",
                },
                errorScreen: {
                  titleText: "无法获取结果",
                  helpText: "你可能需要检查你的网络连接",
                },
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                  searchByText: "搜索提供者",
                },
                noResultsScreen: {
                  noResultsText: "无法找到相关结果",
                  suggestedQueryText: "你可以尝试查询",
                  reportMissingResultsText: "你认为该查询应该有结果？",
                  reportMissingResultsLinkText: "点击反馈",
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

  title: "八阿哥的博客",
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

