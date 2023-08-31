# 功能步骤引导

## 场景
在部分场景下，某些数据需要一直保持，不被浏览器刷新所干扰，此时就需要处理pinia的持久化，要解决这个问题非常简单，在状态改变时将其同步到浏览器的存储中，如 cookie、localStorage、sessionStorage 。每次初始化状态时从存储中去获取初始值即可。

当前从第三方依赖角度实现pinia的持久化`pinia-plugin-persistedstate`

## 配置
```ts

// 通过pnpm
pnpm install driver.js

// 通过CDN
<script src="https://cdn.jsdelivr.net/npm/driver.js@1.0.1/dist/driver.js.iife.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/driver.js@1.0.1/dist/driver.css"/>

```

## 使用
```vue
<template>
    <div id="some-element">111</div>
    <div>222</div>
    <div>333</div>
    <div>444</div>
</template>
<script setup lang="ts">
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const driverObj = driver();
driverObj.highlight({
  element: "#some-element",
  popover: {
    title: "Title",
    description: "Description"
  }
});
</script>
``` 

## API

https://driverjs.com/docs/installation