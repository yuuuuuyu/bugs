<template>
  <el-scrollbar height="calc(100vh - 64px - 113px)">
    <div class="tools-container">
      <section v-for="item in keys">
        <div class="tools-title">{{ item }}</div>
        <div class="tools-list">
          <div
            class="tools-item"
            v-for="(item, index) in data[item]"
            :key="index"
          >
            <div class="tools-item-icon"></div>
            <div class="tools-item-title">
              {{ item.name }}
            </div>
          </div>
        </div>
      </section>
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { APIs } from "../utils/tools.ts"
import data from "../utils/tools.ts"
console.log(data)

const keys = Object.keys(data)
</script>

<style lang="scss" scoped>
.tools-container {
  width: 100%;
  height: calc(100vh - 64px - 113px);
  padding: 48px 32px 0;
  .tools-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 24px;
  }
  .tools-list {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;

    .tools-item {
      display: flex;
      flex-direction: column;
      width: 80px;
      height: 80px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin-right: 1px;
      margin-bottom: 8px;

      .tools-item-icon {
        width: 50px;
        height: 50px;
        background-color: red;
        border-radius: 6px;
        margin-bottom: 4px;
      }
      .tools-item-title {
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}

@media (min-width: 960px) {
  .tools-container {
    width: 1200px;
    margin: 0 auto;
    .tools-list {
      .tools-item {
        margin-right: 30px;
        margin-bottom: 30px;
      }
    }
  }
}
</style>

