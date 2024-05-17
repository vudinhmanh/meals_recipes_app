<template>
    <div>
        <pre>
            {{ meal }}
        </pre>
    </div>
</template>

<script setup>
import { onMounted, ref} from 'vue';
import { useRoute } from 'vue-router';
const meal = ref({});
const route = useRoute;
</script>

<style>

</style>