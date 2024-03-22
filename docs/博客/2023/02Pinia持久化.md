# Pinia 持久化处理

## 场景
在部分场景下，某些数据需要一直保持，不被浏览器刷新所干扰，此时就需要处理pinia的持久化，要解决这个问题非常简单，在状态改变时将其同步到浏览器的存储中，如 cookie、localStorage、sessionStorage 。每次初始化状态时从存储中去获取初始值即可。

当前从第三方依赖角度实现pinia的持久化`pinia-plugin-persistedstate`

## 配置
```ts
pnpm add pinia-plugin-persistedstate

// 使用 main.ts
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// code

app.use(pinia)
```

## 使用

```ts
import { defineStore } from 'pinia'
export const useStore = defineStore('main', s{
  state: () => {
    return {
      someState: 'hello pinia',
      nested: {
        data: 'nested pinia',
      },
    }
  },
  persist: true,
})
``` 

## 常见问题

1. 模块做了持久化后，以后数据会不会变，怎么办？
   1. 先读取本地的数据，如果新的请求获取到新数据，会自动把新数据覆盖掉旧的数据。
   2. 无需额外处理，插件会自己更新到最新数据

## 进阶用法

1. 不想所有数据都持久化处理，能不能按需持久化所需数据
```ts
import { defineStore } from 'pinia'
export const useStore = defineStore('main', s{
  state: () => {
    return {
      someState: 'hello pinia',
      nested: {
        data: 'nested pinia',
      },
    }
  },
  // 持久化存储插件其他配置
  persist: {
    // 修改存储中使用的键名称，默认为当前 Store的 id
    key: 'storekey',
    // 修改为 sessionStorage，默认为 localStorage
    storage: window.sessionStorage,
    // 部分持久化状态的点符号路径数组，[]意味着没有状态被持久化(默认为undefined，持久化整个状态)
    paths: ['nested.data'],
  },
})
```

## API

https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/