<template>
  <div class="bg-[#F9F8F8] hover:scale-105 transition-all rounded-2xl">
    <router-link :to="{ name: 'byCategory', params: { category: category.strCategory } }">
      <img :src="category.strCategoryThumb" alt="" class="mx-auto w-auto">
      <h3 class="bg-[#FFC567] pt-3 pb-3 text-2xl text-center rounded-br-2xl rounded-bl-2xl">
        {{ category.strCategory }}
      </h3>
    </router-link>
  </div>
</template>

<script setup>
const { category } = defineProps({
  category: {
    required: true,
    type: Object
  }
})
</script>

<style></style>