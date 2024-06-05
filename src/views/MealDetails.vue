<template>
  <div class="mt-6 w-full">
    <h2 class="text-5xl font-bold ml-4">{{ meal.strMeal }}</h2>
    <div class="mt-6 flex flex-col lg:flex-row lg:justify-between">
      <p class="text-[18px] p-4">{{ meal.strInstructions }}</p>
      <img :src="meal.strMealThumb" alt="" class="w-full lg:max-w-[300px] h-full object-cover">
    </div>
    <div class="flex flex-col lg:flex-row lg:gap-20 justify-center items-center">
      <div class="max-w-[400px] w-full lg:m-0 ml-7">
        <h2 class="font-bold text-[36px] text-[#008800]">Ingredients</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]" class="text-[24px]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="max-w-[400px] w-full lg:m-0 ml-7">
        <h2 class="font-bold text-[36px] text-[#008800]">Measure</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strMeasure${ind + 1}`]" class="text-[24px]">
              {{ind +1}}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="mt-6 flex gap-5 items-center justify-center">
      <youtube-btn :href="meal.strYoutube"/>
      <a :href="meal.strSource">View Original Source</a>
    </div>
  </div>
</template>

<script setup>
import axiosClient from '@/axiosClient';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import YoutubeBtn from '@/components/YoutubeBtn.vue';

const meal = ref({

});
const route = useRoute();
onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
      meal.value = data.meals[0] || {}
    })
})
</script>

<style></style>