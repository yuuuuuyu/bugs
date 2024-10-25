---
# https://vitepress.dev/reference/default-theme-home-page
layout: doc
editLink: false
lastUpdated: false
isNoComment: true
isNoBackBtn: true
---

<!-- 之所以将代码写在 md 里面，而非单独封装为 Vue 组件，因为 aside 不会动态刷新，参考 https://github.com/vuejs/vitepress/issues/2686 -->
<template v-for="post in curPosts" :key="post.url">
  <h2 :id="post.title" class="post-title">
    <a :href="post.url">{{ post.title }}</a>
    <a
      class="header-anchor"
      :href="`#${post.title}`"
      :aria-label="`Permalink to &quot;${post.title}&quot;`"
      >​</a
    >
    <div class="post-date hollow-text">{{ post.date?.string }}</div>
  </h2>
    <el-tag
        class="mr-4"
        v-for="tag in post.tags"
        :key="tag"
        type="primary"
        effect="light"
        round
    >
        {{ tag }}
    </el-tag>
  <div v-if="post.excerpt" v-html="post.excerpt"></div>
</template>

<div class="pagination-container">
  <!-- <t-pagination
    v-model="current"
    v-model:pageSize="pageSize"
    :total="total"
    size="small"
    :showPageSize="false"
    :showPageNumber="!isMobile"
    :showJumper="isMobile"
    @current-change="onCurrentChange"
  /> -->
</div>

<script lang="ts" setup>
    import { ref, computed, onMounted } from "vue";
    import { isMobile as checkIsMobile } from "./.vitepress/theme/utils/mobile.ts";
    
    import { data as posts } from "./.vitepress/config/posts.data.mts";
    
    
    const isMobile = ref(false);
    const current = ref(1);
    const pageSize = ref(10);
    const total = ref(posts.length);

    const curPosts = computed(() => {
        return posts.slice(
            (current.value - 1) * pageSize.value,
            current.value * pageSize.value
        );
    });
    console.log(curPosts)
</script>

<style lang="scss" scoped>
/* 去掉.vp-doc li + li 的 margin-top */
.pagination-container {
	margin-top: 60px;

	:deep(li) {
		margin-top: 0px;
	}
}

.mr-4 {
	margin-right: 4px;
    color: var(--vp-c-brand-1);
}

.post-title {
	margin-bottom: 6px;
	border-top: 0px;
	position: relative;
	top: 0;
	left: 0;

	.post-date {
		position: absolute;
		top: -6px;
		left: -10px;

		z-index: -1;
		opacity: .12;
		font-size: 66px;
		font-weight: 900;
	}
}

.hollow-text {
  
  /* 设置文本颜色为透明 */
  color: var(--vp-c-bg);
  
	-webkit-text-stroke: 1px var(--vp-c-text-1);
}
</style>
<!-- <script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import { data as posts } from "./.vitepress/config/blogs-links.ts";
import { isMobile as checkIsMobile } from "./.vitepress/theme/utils/mobile.ts";

const isMobile = ref(false);
const current = ref(1);
const pageSize = ref(10);
const total = ref(posts.length);

const curPosts = computed(() => {
	return posts.slice(
		(current.value - 1) * pageSize.value,
		current.value * pageSize.value
	);
});

const onCurrentChange: PaginationProps["onCurrentChange"] = (
	index,
	pageInfo
) => {
	MessagePlugin.success(`转到第${index}页`);

	const url = new URL(window.location as any);
	url.searchParams.set("page", index.toString());
	window.history.replaceState({}, "", url);

	window.scrollTo({
		top: 0,
	});
};

onMounted(() => {
  // 只在客户端执行的代码
  const search = window.location.search.slice(1);
  const searchParams = new URLSearchParams(search);
  const page = searchParams.get("page") || 1;

  current.value = +page;
  isMobile.value = checkIsMobile();
});
</script>
 -->
