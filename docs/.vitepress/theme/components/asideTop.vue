<template>
  <div class="aside-top-container">
    <share class="share" />
    <!-- <exportDoc /> -->
  </div>
</template>
<script setup lang="ts">
import share from "./share.vue"
import exportDoc from "./exportDoc.vue"
</script>
<style scoped>
/* 仅在侧边栏不显示时显示这部分 */
.aside-top-container {
  border-left: 1px solid var(--vp-c-divider);
  display: flex;
  flex-flow: row nowrap;
}
</style>

