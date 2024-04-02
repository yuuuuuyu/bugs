<template>
  <el-image
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
  const prefix = "https://yuuuuuyu.gitee.io/drawing-bed/"
  return `${prefix}${props.src}`
})
</script>

