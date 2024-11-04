<template>
  <el-scrollbar height="calc(100vh - 64px - 113px)">
    <div class="works-container" v-if="loading">
      <section class="works-list">
        <div
          class="works-item iconfont"
          :style="{
            'background-image': `url(${item.bg})`,
          }"
          v-for="item in works"
        >
          <div class="item-tip">
            <span class="iconfont icon-shou"></span>
            <span>{{ item.title }}</span>
          </div>
          <div class="item-container">
            <div class="works-item-info">
              <div class="works-item-title">{{ item.title }}</div>
              <div class="works-item-name">{{ item.name }}</div>
              <div class="works-item-desc">{{ item.desc }}</div>
            </div>
            <div class="works-item-btn">
              <el-button type="primary" @click="jump(item.url)">演示</el-button>
              <el-button type="info" @click="jump(item.github)">源码</el-button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="loading-container" v-else>
      <img class="loading" src="/loading.gif" alt="" />
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { works } from "../utils/works"

if (typeof window !== "undefined") {
  import("../utils/watermark.ts")
    .then(({ default: watermark }) => {
      watermark.create()
    })
    .catch(error => {
      console.error("Failed to load watermark module:", error)
    })
}

const loading = ref(false)
const onLoad = () => {
  loading.value = !loading.value
}
onMounted(() => {
  onLoad()
})
const jump = url => {
  window.open(url, "_blank")
}
</script>

<style lang="scss" scoped>
.loading-container {
  width: 100%;
  height: calc(100vh - 64px - 113px);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 10%;
  }
}

.works-container {
  width: 100%;
  height: calc(100vh - 64px - 113px);
  padding: 48px 0;
  .works-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    .works-item {
      width: 300px;
      height: 200px;
      padding: 16px;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      position: relative;
      border-radius: 6px;
      position: relative;
      border: 1px solid #eee;
      overflow: hidden;
      cursor: pointer;
      background-size: 100%;
      background-position: left;
      transition: all 0.3s ease-in-out;
      z-index: 99999;

      &:nth-child(4n) {
        margin-right: 0;
      }
      &:hover {
        box-shadow: 0 0 15px rgba(4, 105, 248, 0.3);
        transition: all 0.3s ease-in-out;
        background-size: 120%;
        .item-container {
          top: 0px;
          transition: all 0.3s ease-in-out;
        }
        .item-tip {
          transition: all 0.3s ease-in-out;
          top: 400px;
        }
      }
      &::before {
        content: "";
        display: inline-block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0%;
        left: 0;
        transition: all 0.3s ease-in-out;
        // background: linear-gradient(
        //   90deg,
        //   #0469f8 0%,
        //   rgba(255, 255, 255, 0.1) 100%
        // );
        // opacity: 0.8;
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0.8) 50%,
          rgba(255, 255, 255, 0.2) 100%
        );
      }
      .item-tip {
        width: calc(100% - 32px);
        height: 100%;
        position: absolute;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease-in-out;
        padding-top: 16px;
        span:first-child {
          font-size: 50px;
          margin-bottom: 20px;
          animation: loading 1s infinite linear;
        }
        span:last-child {
          font-size: 20px;
          font-weight: bold;
        }
      }
      .item-container {
        flex: 1;
        position: relative;
        // top: 0px;
        top: -400px;
        transition: all 0.3s ease-in-out;
        display: flex;
        flex-direction: row;
        .works-item-info {
          z-index: 10;
          height: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
          .works-item-title {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 8px;
          }
          .works-item-name {
            font-size: 14px;
            margin-bottom: 8px;
            color: #666;
          }
          .works-item-desc {
            font-size: 14px;
            flex: 1;
            color: #111;
            overflow: hidden;
            font-weight: 500;
          }
        }
        .works-item-btn {
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          :deep(.el-button) {
            margin: 0;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}

@media (min-width: 960px) {
  .works-container {
    width: 1260px;
    margin: 0 auto;
    .works-list {
      width: 1260px;
      .works-item {
        margin-right: 20px;
        margin-bottom: 20px;
      }
    }
  }
}
@media (max-width: 960px) {
  .works-container {
    margin: 0 auto;
    .works-list {
      .works-item {
        width: 100%;
        margin-right: 30px;
        margin-bottom: 30px;
      }
    }
  }
}
@keyframes loading {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>

