<template>
  <div>
    <div v-for="ingredient in ingredients" :key="ingredient.idIngredient">
      <h3>
        {{ ingredient.strIngredient }}
      </h3>
    </div>
  </div>
</template>

<script setup>
import axiosClient from '@/axiosClient';
import { onMounted } from 'vue';
import { ref } from 'vue';
const ingredients = ref([]);
onMounted(() => {
  axiosClient.get('list.php?i=list')
  .then(({data}) => {
    ingredients.value = data.meals;
  })
})
</script>

<style>

</style>