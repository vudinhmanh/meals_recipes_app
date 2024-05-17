<template>
    <div class="flex flex-col items-center p-8">
        <div class="flex gap-1 justify-center">
            <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter.id">
                {{ letter }}
            </router-link>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';

import axiosClient from '@/axiosClient';
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const ingredients = ref([])
onMounted(async () => {
    const res = await axiosClient.get('/list.php?a=list')
    ingredients.value = res.data;
})
</script>

<style>

</style>