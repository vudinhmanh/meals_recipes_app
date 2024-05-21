<template>
  <a :href="href" target="_blank" class="px-2 py-2 bg-red-400 rounded-md hover:bg-red-300">
    Youtube
  </a>
</template>

<script setup>
const props = defineProps({
  href: String
})
</script>

<style></style>