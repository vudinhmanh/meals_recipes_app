<template>
  <div>
    <h2 class="uppercase text-4xl mt-6 font-bold">categories</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 ">
      <meal-category v-for="category in allCategories" :key="category.idCategory" :category="category"/>
    </div>
  </div>
</template>

<script setup>
import axiosClient from '@/axiosClient';
import { onMounted, ref } from 'vue';
import store from '@/store';
import MealCategory from '@/components/MealCategory.vue'
const allCategories = ref([])
onMounted(() => {
  axiosClient.get('categories.php')
    .then(({ data }) => {
      allCategories.value = data.categories;
    })
})

</script>

<style></style>