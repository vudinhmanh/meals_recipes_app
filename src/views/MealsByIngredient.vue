<template>
  <div>
    <h2 class="uppercase text-4xl mt-6 font-bold">{{ route.params.ingredient}}</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 ">
      <div v-for="meal in meals" :key="meal.idMeal">
        <router-link :to="{name:'mealDetails', params:{id: meal.idMeal}}">
          <img :src="meal.strMealThumb" alt="" class="mx-auto w-auto">
          <h3 class="bg-[#FFC567] pt-3 pb-3 text-2xl text-center rounded-br-2xl rounded-bl-2xl">
            {{ meal.strMeal }}
          </h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import store from '@/store';
import { useRoute } from 'vue-router';
const route = useRoute();
import { computed, onMounted } from 'vue';
const meals = computed(() => store.state.mealsByIngredients)
onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient)
})
</script>

<style></style>