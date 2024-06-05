<template>
  <div>
      <div class="p-7">
      <input 
      type="text" 
      v-model="key"
      @change="searchMeals"
      class="rounded border-2 w-full" 
      placeholder="Search for Meals" 
      />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
      <meal-item v-for="meal in meals" :key="meal.idMeal" v-bind:meal="meal"/>
    </div>
  </div>
</template>

<script setup>
import { ref, computed} from 'vue'
import store from '../store'
import { useRoute } from 'vue-router';
import MealItem from '@/components/MealItem.vue';
const route = useRoute();
const key = ref('')
const meals = computed(() => store.state.searchedMeals)
function searchMeals() {
  store.dispatch('searchMeals', key.value)
}
</script>

<style>

</style>