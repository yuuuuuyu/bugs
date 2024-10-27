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
const route = useRoute()

const { path } = route

console.log(props.prefix)

const firstItemLink = config.base + sidebar[props.prefix][0].items[0].link
console.log(firstItemLink)

router.go(firstItemLink)
</script>

