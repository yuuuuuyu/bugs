# Teleport

## 基本概念
官方解释：`<Teleport>` 是一个内置组件，它可以将一个组件内部的一部分模板“传送”到该组件的 DOM 结构外层的位置去。

通俗解释：由于vue组件存在层级关系，渲染组件时会按照层级关系进行渲染，如果有特殊需求在根部或者指定位置创建一个子组件，此时可以将组件放在 teleport 内实现传送

## 使用
使用效果通`el-dialog`的`append-to-body`的属性。将整个dialog渲染到`body`。

与`el-dialog`不同的是`teleport`支持向任意DOM上添加。

`teleport`只会改变DOM渲染结构，不会改变组件间逻辑

## 代码

```vue
<template>
    <Teleport to="body">
      <div>被 teleport 包裹的元素</div>
    </Teleport>
    <Teleport to="body">
      <div>被 teleport 包裹的第二个元素</div>
    </Teleport>
</template>
``` 