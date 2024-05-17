<template>
  <div>
      <div class="p-7">
      <input 
      type="text" 
      v-model="key"
      @change="searchMeals"
      class="rounded border-2 w-full" 
      placeholder="Search for Meals" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div v-for="meal in meals" :key="meal.idMeal" class="bg-[#F9F8F8] cursor-pointer hover:scale-105 transition-all">
        <img :src="meal.strMealThumb" alt="" class="object-cover">
        <h3>{{ meal.strMeal }}</h3>
        <p>{{meal.strArea}} food</p>
        <div>
          <a :href="meal.strYoutube" target="_blank">Youtube</a>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, computed} from 'vue'
import store from '../store'
import { useRoute } from 'vue-router';
const route = useRoute();
const key = ref('')
const meals = computed(() => store.state.searchedMeals)
function searchMeals() {
  store.dispatch('searchMeals', key.value)
}
</script>

<style>

</style>