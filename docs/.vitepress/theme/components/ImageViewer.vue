<template>
  <div class="image-viewer">
    <el-image-viewer
      v-if="show"
      :src="previewImageInfo.list[0]"
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
      previewImageInfo.url = url
      previewImageInfo.list = urls
      previewImageInfo.idx = idx

      // 兼容点击 main 之外的图片
      if (idx === -1 && url) {
        previewImageInfo.list.push(url)
        previewImageInfo.idx = previewImageInfo.list.length - 1
      }
      show.value = true
    }
  }
}

onMounted(() => {
  const docDomContainer = document.querySelector("#VPContent")

  path.includes("posts") &&
    docDomContainer?.addEventListener("click", previewImage)
})

onUnmounted(() => {
  const docDomContainer = document.querySelector("#VPContent")
  path.includes("posts") &&
    docDomContainer?.removeEventListener("click", previewImage)
})
</script>

