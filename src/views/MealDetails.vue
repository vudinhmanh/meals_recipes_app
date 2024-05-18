<template>
    <div >
        <h1>{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" alt="">
        <p>{{ meal.strInstructions }}</p>
    </div>
</template> 

<script setup>
import axiosClient from '@/axiosClient';
import { onMounted, ref} from 'vue';
import { useRoute } from 'vue-router';
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

<style>

</style>