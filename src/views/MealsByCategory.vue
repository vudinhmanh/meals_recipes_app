<template>
  <div class="mt-6">
    <h2 class="uppercase text-4xl mt-6 font-bold">{{ route.params.category}}</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
      <div v-for="meal in meals" :key="meal.idMeal">
        <div class="bg-[#F9F8F8] hover:scale-105 transition-all rounded-2xl w-full max-w-[400px] h-full">
          <router-link :to="{name:'mealDetails', params:{id: meal.idMeal}}">
            <img :src="meal.strMealThumb" alt="" class="object-cover">
            <h3 class="bg-[#FFC567] pt-3 pb-3 text-2xl text-center rounded-br-2xl rounded-bl-2xl">{{ meal.strMeal }}</h3>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted } from "vue";
import store from "@/store";
import { useRoute } from "vue-router";
const meals = computed(() => store.state.mealsByCategories)
const route = useRoute()
onMounted(() => {
  store.dispatch('searchMealsByCategory', route.params.category)
})
const { meal} = defineProps({
  meal: {
    required: true,
    default: 0,
    type: Object
  }
})

</script>

<style></style>