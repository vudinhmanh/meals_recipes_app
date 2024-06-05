<template>
  <header class="pt-5 sticky top-0 h-full z-50 bg-[#F3F3F3]">
    <div class="flex flex-col lg:flex-grow lg:gap-9 items-center">
      <div class="relative">
        <router-link :to="{ name: 'home' }">
          <img src="/src/assets/img/logo.png" alt="">
        </router-link>
      </div>
      <div
        :class="['lg:flex lg:gap-5 fixed lg:bg-transparent pt-4 top-0 right-0 bottom-0 lg:relative bg-white transition-transform duration-700 ease-in-out transform', isMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0']">
        <router-link :to="{ name: 'home' }"
          class="relative after:bg-[#F79F1A] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
          <p class="uppercase font-bold lg:pt-0 pt-5 pr-3">Home</p>
        </router-link>
        <router-link :to="{ name: 'allCategories' }"
          class="relative after:bg-[#F79F1A] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
          <p class="uppercase font-bold lg:pt-0 pt-5 pr-3">Categories</p>
        </router-link>
        <router-link :to="{ name: 'AllIngredient' }"
          class="relative after:bg-[#F79F1A] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
          <p class="uppercase font-bold lg:pt-0 pt-5 pr-3">Meals By ingredients</p>
        </router-link>
        <router-link :to="{ name: 'byName' }"
          class="relative after:bg-[#F79F1A] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
          <p class="uppercase font-bold lg:pt-0 pt-5 pr-3">Search Meals</p>
        </router-link>
        <router-link :to="{ name: 'byLetter' }"
          class="relative after:bg-[#F79F1A] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
          <p class="uppercase font-bold lg:pt-0 pt-5 pr-3">Meals By Letter</p>
        </router-link>
      </div>
      <div class="lg:hidden absolute top-0 right-0 p-3 pt-6">
        <button class="relative group" @click="toggleMenu">
          <div
            class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-active:ring-4 ring-opacity-30 duration-200 shadow-md">
            <div
              class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div
                class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-active:rotate-[42deg]">
              </div>
              <div
                class="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-active:-translate-x-10">
              </div>
              <div
                class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-active:-rotate-[42deg]">
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
</style>
