<template></template>
<script setup>
import { useRouter, useRoute } from "vitepress"
import sidebar from "../../config/sidebar"
import config from "../../config"

const props = defineProps({
  prefix: {
    type: String,
    default: "/notes",
  },
})

const router = useRouter()

console.log(sidebar[props.prefix])
const findFirstLink = items => {
  for (const item of items) {
    if (item.link) {
      return item.link
    }
    if (item.items && item.items.length > 0) {
      const link = findFirstLink(item.items)
      if (link) {
        return link
      }
    }
  }
  return null
}

const firstItemLink = findFirstLink(sidebar[props.prefix][0].items)

if (firstItemLink) {
  router.go(config.base + firstItemLink)
} else {
  console.error("No link found in the sidebar")
}
</script>

