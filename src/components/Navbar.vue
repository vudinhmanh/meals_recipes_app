<template>
  <header class="pt-5 sticky top-0 h-full z-50 bg-[#F3F3F3]">

    <div class="flex flex-col lg:flex-grow lg:gap-9 items-center">
      <div class="">
        <router-link :to="{name: 'home'}">
          <img src="/src/assets/img/logo.png" alt="">
        </router-link>
      </div>
      <div
        :class="['lg:flex lg:gap-5 fixed lg:bg-transparent  top-0 right-0 bottom-0 lg:relative bg-white transition-transform duration-300', isMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0', !isMenuOpen ? 'hidden' : 'block lg:flex']">
        <router-link :to="{ name: 'home' }"
          class="relative after:bg-[#F79F1A] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
          <p class="uppercase font-bold">Home</p>
        </router-link>
        <router-link :to="{ name: 'allCategories' }"
          class="relative after:bg-[#F79F1A] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
          <p class="uppercase font-bold">Categories</p>
        </router-link>
        <router-link :to="{ name: 'AllIngredient' }"
          class="relative after:bg-[#F79F1A] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
          <p class="uppercase font-bold">Meals By ingredients</p>
        </router-link>
        <router-link :to="{ name: 'byName' }"
          class="relative after:bg-[#F79F1A] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
          <p class="uppercase font-bold">Search Meals</p>
        </router-link>
        <router-link :to="{ name: 'byLetter' }"
          class="relative after:bg-[#F79F1A] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
          <p class="uppercase font-bold">Meals By Letter</p>
        </router-link>
      </div>
      <div class="lg:hidden ml-auto">
        <button class="relative group" @click="toggleMenu">
          <div
            class="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <div
              class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center">
              <div
                class="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]">
              </div>
              <div class="bg-white h-[1px] rounded"></div>
              <div
                class="bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]">
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>

<style>
/* Add any additional styles here */
</style>
