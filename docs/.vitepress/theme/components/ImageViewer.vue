<!--
 * @Description: 
 * @Author: (于智勇)zhiyong.yu@ytever.com
 * @Date: 2025-01-06 17:47:06
 * @LastEditors: (于智勇)zhiyong.yu@ytever.com
 * @LastEditTime: 2025-01-08 11:44:08
-->
<template>
  <div class="image-viewer">
    <el-image-viewer
      v-if="show"
      :src="previewImageInfo.list[currentIndex]"
      :url-list="previewImageInfo.list"
      @close="show = false"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from "vue"
import { useRoute } from "vitepress"

const route = useRoute()
const { path } = route

const show = ref(false)
const currentIndex = ref(0)
const previewImageInfo = reactive<{ url: string; list: string[]; idx: number }>(
  {
    url: "",
    list: [],
    idx: 0,
  }
)

function previewImage(e: Event) {
  const target = e.target as HTMLElement
  const currentTarget = e.currentTarget as HTMLElement

  if (target.tagName.toLowerCase() === "img") {
    const imgs = currentTarget.querySelectorAll<HTMLImageElement>(
      ".content-container .main img"
    )

    const idx = Array.from(imgs).findIndex(el => el === target)
    const urls = Array.from(imgs).map(el => el.src)
    const url = target.getAttribute("src")

    if (url) {
      currentIndex.value = idx
      previewImageInfo.url = url
      previewImageInfo.list = urls
      previewImageInfo.idx = idx

      // 兼容点击 main 之外的图片
      if (idx === -1 && url) {
        previewImageInfo.list.push(url)
        previewImageInfo.idx = previewImageInfo.list.length - 1
      } else {
        const _arr = urls.slice(idx)
        const _arrprefix = urls.slice(0, idx)
        previewImageInfo.list = [..._arr, ..._arrprefix]
      }
      show.value = true
    }
  }
}

onMounted(() => {
  const docDomContainer = document.querySelector("#VPContent")
  docDomContainer?.addEventListener("click", previewImage)
})

onUnmounted(() => {
  const docDomContainer = document.querySelector("#VPContent")
  docDomContainer?.removeEventListener("click", previewImage)
})
</script>

