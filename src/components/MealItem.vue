<template>
  <div class="bg-[#F9F8F8] hover:scale-105 transition-all w-full max-w-[400px] h-full rounded-2xl">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img :src="meal.strMealThumb" alt="" class="object-cover rounded-t-xl">
    </router-link>
    <div class=" rounded-b-2xl">
      <div class="flex justify-between">
        <div class="ml-[23px]">
          <h3 class="text-[32px] font-semibold">{{ meal.strMeal }}</h3>
          <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
            <p class="hover:underline text-[#F79F1A]">View recipe</p>
          </router-link>
        </div>
        <div class="flex items-center mr-[23px]">
          <youtube-btn :href="meal.strYoutube" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import YoutubeBtn from '@/components/YoutubeBtn.vue';
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
})
</script>
<style></style>