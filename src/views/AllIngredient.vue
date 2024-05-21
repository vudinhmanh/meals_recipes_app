<template>
  <div class="mt-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div v-for="ingredient in ingredients" :key="ingredient.idIngredient">
        <router-link :to="{name:'byIngredient', params: {ingredient: ingredient.strIngredient}}">
          <div class="bg-white p-3">
            <h2 class="font-bold">
              {{ ingredient.strIngredient }}
            </h2>
          </div>
        </router-link>
      </div>
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
    .then(({ data }) => {
      ingredients.value = data.meals;
    })
})

</script>

<style></style>