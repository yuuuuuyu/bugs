---
title: VitePress 项目性能优化实战指南
date: 2024-09-18
tags: 
  - VitePress
  - 性能优化
  - 前端工程化
  - 构建优化
---

## 核心优化手段

### 1. 按需加载组件
在`.vitepress/theme/index.ts`中优化Element Plus引入方式：
```ts
import { defineTheme } from 'vitepress'

export default defineTheme({
  enhanceApp({ app }) {
    // 仅引入使用的组件
    import('element-plus').then((module) => {
      app.use(module.ElPagination)
      app.use(module.ElTag)
    })
  }
})

```

# 安装图片压缩插件
npm install -D vite-plugin-imagemin
```markdown
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      pngquant: { quality: [0.8, 0.9] }
    })
  ]
})
