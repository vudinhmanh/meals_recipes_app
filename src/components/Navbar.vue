<template>
  <header class="mt-6 flex justify-between">
    <router-link :to="{ name: 'home' }" class="relative after:bg-[#F79F1A] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
      <p class="uppercase font-bold">Home</p>
    </router-link>
    <div class="flex gap-9 items-center">
      <router-link :to="{ name: 'byIngredient' }" class="relative after:bg-[#F79F1A] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
        <p class="uppercase font-bold">Categories</p>
      </router-link>
      <router-link :to="{ name: 'byIngredient' }" class="relative after:bg-[#F79F1A] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
        <p class="uppercase font-bold">Meals By ingredients</p>
      </router-link>
      <router-link :to="{ name: 'byName' }" class="relative after:bg-[#F79F1A] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
        <p class="uppercase font-bold">Search Meals</p>
      </router-link>
      <router-link :to="{ name: 'byLetter' }" class="relative after:bg-[#F79F1A] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
        <p class="uppercase font-bold">Meals By Letter</p>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style></style>