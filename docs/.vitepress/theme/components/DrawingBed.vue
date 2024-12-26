<!--
 * @Description: 
 * @Author: (于智勇)zhiyong.yu@ytever.com
 * @Date: 2024-10-28 09:53:16
 * @LastEditors: (于智勇)zhiyong.yu@ytever.com
 * @LastEditTime: 2024-12-06 22:42:58
-->
<template>
  <el-image
    style="width: 100%"
    :src="fullUrl"
    :zoom-rate="1.2"
    :max-scale="7"
    :min-scale="0.2"
    :preview-src-list="[fullUrl]"
    :initial-index="4"
    fit="cover"
  />
</template>
<script setup>
import { computed } from "vue"
import { ElImage } from "element-plus"

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: String,
})

const fullUrl = computed(() => {
  const prefix = "https://ebugs.l2.bb1a.cn/drawing-bed/"
  return `${prefix}${props.src}`
})
</script>
<style lang="scss">
.el-image__error {
  padding: 50px;
}
</style>

