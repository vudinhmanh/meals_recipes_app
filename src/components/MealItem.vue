<template>
    <div class="bg-[#F9F8F8] hover:scale-105 transition-all">
        <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal} }">
            <img :src="meal.strMealThumb" alt="" class="object-cover">
        </router-link>
        <h3>{{ meal.strMeal }}</h3>
            <p>{{meal.strArea}} food</p>
        <div class="flex">
            <youtube-btn :href="meal.strYoutube"/>
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
<style>

</style>