<template>
  <div class="aside-top-container">
    <ButtonGroup class="share" />
  </div>
</template>
<script setup lang="ts">
import ButtonGroup from "./ButtonGroup.vue"
</script>
<style scoped>
/* 仅在侧边栏不显示时显示这部分 */
.aside-top-container {
  border-left: 1px solid var(--vp-c-divider);
  display: flex;
  flex-flow: row nowrap;
}
</style>

