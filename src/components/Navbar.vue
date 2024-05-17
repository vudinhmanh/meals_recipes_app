<template>
      <header class="bg-white shadow h-16 flex justify-between items-stretch">
      <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-6">
        Home
      </router-link>
      <div class="flex gap-9 items-center">
        <router-link :to="{name:'byName'}" class=" hover:bg-purple-100 h-full inline-flex items-center">
          Search Meals
        </router-link>
        <router-link :to="{name:'byLetter'}" class=" hover:bg-purple-100 h-full inline-flex items-center">
          Meals By Letter
        </router-link>
        <router-link :to="{name:'byIngredient'}" class=" hover:bg-purple-100 h-full inline-flex items-center">
          Meals By ingredients
        </router-link>
      </div>
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>