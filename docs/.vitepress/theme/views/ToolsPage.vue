<template>
  <el-scrollbar height="calc(100vh - 64px - 113px)">
    <div class="tools-container" v-if="loading">
      <section v-for="item in items">
        <div class="tools-title">{{ item.type }}</div>
        <div class="tools-list">
          <div class="tools-item" v-for="(i, index) in item.list" :key="index">
            <div class="tools-item-icon">
              <img :src="prefix + i.icon" alt="" />
            </div>
            <div class="tools-item-title">
              {{ i.name }}
            </div>
          </div>
          <!-- <div class="tools-item" @click="addItem(item.type)">
            <div class="tools-item-add">
              <el-icon><Plus /></el-icon>
            </div>
            <div class="tools-item-title">添加一个</div>
          </div> -->
        </div>
      </section>
    </div>
    <div v-else>loading...</div>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted, onBeforeUnmount } from "vue"
import { APIs } from "../utils/tools.ts"
import data from "../utils/tools.ts"

import IndexedDBService from "../utils/db"

const prefix = ref("https://ebugs.l2.ttut.cc/drawing-bed/tools-icon/")
const loading = ref(false)
const onLoad = () => {
  console.log(3)
  loading.value = !loading.value
}

onMounted(() => {
  console.log(2)
  onLoad()
})

const items = ref([])
const dbService = new IndexedDBService("Bugs")
dbService.openDB(1, "Tools", "type").then(() => {
  getItems()
})

// 添加item
const addItem = async type => {
  const results = await dbService.queryByField("MyStore", "type", "AIs")
}
// 初始化数据
const initData = params => {
  dbService.addData("Tools", params).then(() => {
    console.log("Item added")
  })
}
const getItems = () => {
  dbService.getAllData("Tools").then(res => {
    if (res && !res.length) {
      // 初始化数据
      data.forEach(i => {
        initData(i)
      })
      items.value = data
    } else {
      // 使用indexedDb数据
      items.value = res
    }
  })
}
const test = async () => {
  const results = await dbService.queryByField("MyStore", "type", "AIs")
  console.log(results)
}
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
      margin-right: 1px;
      margin-bottom: 8px;

      .tools-item-add {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px dashed #e3e3e3;
        border-radius: 6px;
        margin-bottom: 4px;
      }
      .tools-item-icon {
        width: 50px;
        height: 50px;
        padding: 6px;
        background-color: #e3e3e3;
        border: 1px solid #e3e3e3;
        border-radius: 6px;
        margin-bottom: 4px;
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        // background: linear-gradient(135deg, #0469f8 0%, #3a51c7 100%);
        &:hover {
          border: 1px solid var(--vp-c-brand-1);
          box-shadow: 0 0 20px var(--vp-c-brand-1);
          //   box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
          transition: all 0.3s ease-in-out;
        }
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

