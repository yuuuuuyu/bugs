<template>
  <div class="button-group">
    <el-button
      v-if="isPosts && !frontmatter.isNoBackBtn"
      plain
      color="#3451b2"
      @click="goBack"
      @mouseenter="onMouseEnter('back')"
      @mouseleave="onMouseLeave('back')"
      :class="{ 'is-hover': backIsHover }"
    >
      <span
        class="iconfont"
        :class="{
          'icon-fanhui1': !backIsHover,
          'icon-fanhui1-copy': backIsHover,
        }"
      ></span>
      <span class="btn-txt" v-if="backIsHover">返回上一页</span>
    </el-button>
    <el-button
      plain
      color="#3451b2"
      v-if="!frontmatter.isNoBackBtn"
      @click="copyLink"
      @mouseenter="onMouseEnter('copy')"
      @mouseleave="onMouseLeave('copy')"
      :class="{ 'is-hover': copyIsHover }"
    >
      <span
        class="iconfont"
        :class="{
          'icon-fuzhi2': !copyIsHover && !isCopySuccess,
          'icon-fuzhi2-copy': copyIsHover && !isCopySuccess,
          'icon-duihao': copyIsHover && isCopySuccess,
        }"
      ></span>
      <span class="btn-txt" v-if="copyIsHover">{{ btnText }}</span>
    </el-button>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue"
import { useRoute, useData } from "vitepress"
import { long2short } from "../utils/shortUrl"
import { copyText } from "../utils/copyText"
import config from "../../config"

const route = useRoute()
const isEN = computed(() => route.path.startsWith("/en"))
const isPosts = computed(() => route.path.startsWith("/bugs/posts"))
const { frontmatter } = useData()

const isCopySuccess = ref(false)

const backIsHover = ref(false)
const copyIsHover = ref(false)
const onMouseEnter = btn => {
  btn === "back" && (backIsHover.value = true)
  btn === "copy" && (copyIsHover.value = true)
}
const onMouseLeave = btn => {
  btn === "back" && (backIsHover.value = false)
  btn === "copy" && (copyIsHover.value = false)
}

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
const copyLink = event => {
  if (typeof window !== "undefined") {
    clearTimeout(timer)
    const path = window.location.pathname.slice(0)

    const key = decodeURI(path).split(".html")[0]

    const shortUrl = long2short[key]

    copyText(`${window.location.host}${config.base}/s.html?u=${shortUrl}`)
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
<style scoped lang="scss">
.button-group {
  width: 100%;
  margin-bottom: 10px;
  padding: 0 12px;

  :deep(.el-button > span) {
    width: 100%;
    flex: 1;
  }

  button {
    transition: width 0.5s ease;
    width: 32px;
    position: relative;
    padding: 8px;

    .iconfont {
      margin: 0;
    }
    &.is-hover {
      > span {
        flex: 1;
      }
      width: 122px;
      .btn-txt {
        width: 72px;
        padding-left: 8px;
      }
    }
  }
}
</style>

