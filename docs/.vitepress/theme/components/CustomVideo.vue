<!--
 * @Description: 自定义视频组件
 * @Author: (于智勇)zhiyong.yu@ytever.com
 * @Date: 2025-05-17
-->
<template>
  <video :width="width" :height="height" :controls="controls">
    <source :src="processedSrc" :type="type" />
    {{ fallbackText }}
  </video>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { withBase } from "../utils/imageUrl"

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  width: {
    type: [String, Number],
    default: "100%",
  },
  height: {
    type: [String, Number],
    default: "auto",
  },
  controls: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String,
    default: "video/mp4",
  },
  fallbackText: {
    type: String,
    default: "您的浏览器不支持 HTML5 视频标签。",
  },
})

const processedSrc = computed(() => {
  return withBase(props.src)
})
</script>

