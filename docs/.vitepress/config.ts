import { UserConfig } from "vitepress"
import { demoBlockPlugin } from "vitepress-theme-demoblock"
import Markd from "markdown-it-task-lists"
import { withBase } from "./theme/utils/imageUrl"
import { BASE_URL } from "./theme/utils/config"

import nav from "./config/nav"
import sidebar from "./config/sidebar"

const config: UserConfig = {
  base: "/bugs",
  outDir: "../dist/bugs",
  build: {
    minify: true,
  },
  head: [["link", { rel: "icon", href: "/bugs/favicon.ico" }]],
  markdown: {
    config: md => {
      md.use(demoBlockPlugin)
      md.use(Markd)

      // 自定义图片处理
      const defaultImageRender = md.renderer.rules.image
      md.renderer.rules.image = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        const srcIndex = token.attrIndex("src")
        if (srcIndex >= 0) {
          const src = token.attrs[srcIndex][1]
          if (src.startsWith("__BASE_URL__")) {
            token.attrs[srcIndex][1] = src.replace("__BASE_URL__", "")
          }
          token.attrs[srcIndex][1] = withBase(token.attrs[srcIndex][1])
        }
        return defaultImageRender(tokens, idx, options, env, self)
      }

      // 自定义链接处理
      const defaultLinkRender =
        md.renderer.rules.link_open ||
        ((tokens, idx, options, env, self) => {
          return self.renderToken(tokens, idx, options)
        })
      md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        const hrefIndex = token.attrIndex("href")
        if (hrefIndex >= 0) {
          const href = token.attrs[hrefIndex][1]
          // 处理外部链接（以__BASE_URL__开头）
          if (href.startsWith("__BASE_URL__")) {
            token.attrs[hrefIndex][1] =
              BASE_URL + href.replace("__BASE_URL__", "")
          }
          // 处理内部文档链接（以/开头但不以http开头）
          else if (href.startsWith("/") && !href.startsWith("http")) {
            token.attrs[hrefIndex][1] = withBase(href)
          }
          // 其他链接（如完整的URL）保持不变
        }
        return defaultLinkRender(tokens, idx, options, env, self)
      }
    },
  },
  vite: {
    define: {
      __BASE_URL__: JSON.stringify(BASE_URL),
    },
  },
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
    // socialLinks: [{ icon: "github", link: "https://github.com/yuuuuuyu" }],
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
      pattern: "https://github.com/yuuuuuyu/bugs/blob/develop/docs/:path",
      text: "在Github上编辑此页",
    },
  },

  title: "八阿哥的博客",
  lang: "zh-CN",
  description: "bug大集合",
}

export default config

