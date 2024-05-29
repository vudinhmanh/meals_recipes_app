<template>
  <div class="flex flex-col items-center p-8 w-full">
    <div class="flex gap-x-4 justify-center whitespace-nowrap overflow-x-auto w-full no-scrollbar">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter in letters"
        :key="letter"
        class="flex-shrink-0 px-2 py-1 bg-gray-200 rounded-lg text-center"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>
  <meals :meals="meals"/>
</template>
<script setup>
import { onMounted, ref, watch } from 'vue';
import { computed } from 'vue';
import store from '@/store';
import { useRoute } from 'vue-router';
import Meals from '@/components/Meals.vue';

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch('searchMealsByLetter', route.params.letter);
});

onMounted(() => {
  store.dispatch('searchMealsByLetter', route.params.letter);
});
</script>

<style>

</style>
