<template>
  <div class="flex flex-col items-center p-8">
    <div class="flex gap-6 justify-center">
      <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter">
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
  store.dispatch('searchMealsByLetter', route.params.letter)
});
onMounted(() => {
  store.dispatch('searchMealsByLetter', route.params.letter)
});
</script>

<style></style>