<template>
  <div class="button-group">
    <el-button
      v-if="isPosts && !frontmatter.isNoBackBtn"
      theme="default"
      variant="dashed"
      style="margin-bottom: 10px"
      @click="goBack"
    >
      <template #icon><RollbackIcon /></template>
      {{ isEN ? "Go back " : "返回上一页" }}
    </el-button>
    <el-button
      v-if="!frontmatter.isNoBackBtn"
      theme="primary"
      style="margin-bottom: 10px"
      @click="copyLink"
    >
      <template #icon>
        <CopyIcon v-if="!isCopySuccess" />
        <CheckIcon v-else />
      </template>
      {{ btnText }}
    </el-button>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue"
import { useRoute, useData } from "vitepress"
import { long2short } from "../utils/shortUrl"
import { copyText } from "../utils/copyText"

const route = useRoute()
const isEN = computed(() => route.path.startsWith("/en"))
const isPosts = computed(
  () => route.path.startsWith("/posts") || route.path.startsWith("/en/posts")
)
const { frontmatter } = useData()

const isCopySuccess = ref(false)
const goBack = () => {
  if (window.history.length <= 1) {
    location.href = "/"
  } else {
    window.history.go(hashChangeCount.value)
    hashChangeCount.value = -1
  }
}

const btnText = ref("复制短链接")
let timer: any
const copyLink = () => {
  if (typeof window !== "undefined") {
    clearTimeout(timer)
    const path = window.location.pathname.slice(0)
    const key = decodeURI(path).split(".html")[0]

    const shortUrl = long2short[key]

    copyText(`${window.location.host}/s.html?u=${shortUrl}`)
    btnText.value = "复制成功"
    isCopySuccess.value = true
    timer = setTimeout(() => {
      btnText.value = "复制短链接"
      isCopySuccess.value = false
    }, 2000)
  }
}
const hashChangeCount = ref(-1)
onMounted(() => {
  window.onhashchange = () => {
    hashChangeCount.value--
  }
})

onUnmounted(() => {
  window.onhashchange = null
})
</script>
<style scoped>
.button-group {
  display: flex;
  button {
    flex: 1;
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
}
.img-container {
  height: 105px;
  width: 100px;
}

img {
  height: 100px;
  border-radius: 5px;
  margin-top: 5px;
}
</style>

