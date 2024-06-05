<template>
  <div class="flex flex-col justify-center items-center lg:flex-row lg:justify-between">
    <div class="">
      <div class="lg:max-w-[610px] w-full">
        <h1 class="text-[40px] lg:mt-[100px] lg:text-[64px] font-bold leading-[80px] lg:text-left text-center">Cooking Made Fun and Easy: Unleash
          Your
          Inner Chef</h1>
      </div>
      <div class="max-w-[424px] mt-[37px]">
        <p class="lg:text-sm lg:m-0 ml-2">Discover more than <span class="text-[#F79F1A]">10,000 recipes</span> in your hand
          with the best recipe. Help you to find the easiest way to cook.</p>
        <router-link :to="{ name: 'AllIngredient' }">
          <button class="px-[44px] py-[30px] rounded-xl bg-[#F79F1A] mt-[61px] text-white hover:text-white">
            Explore Recipes
          </button>
        </router-link>
      </div>
    </div>
    <div class>
      <div class="relative">
        <img src="../assets/img/img-header.png" alt="">
        <div class="flex flex-col gap-y-3">
          <div
            class="bg-white w-full  lg:max-w-[223px] h-full max-h-[220px] lg:absolute lg:top-[503px] lg:left-[100px] lg:rounded-xl rounded-none">
            <div class="bg-[#F1F3F7] w-[207px] h-[143px] mx-[7px] mt-[7px] rounded-xl">
              <div class="mx-[12px] mt-[17px]">
                <div class="flex items-center">
                  <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 22 20">
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 22 20">
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 22 20">
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 22 20">
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 22 20">
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <p class="text-[16px] leading-[24px]">"The recipes here are not only delicious but also easy
                  to follow”.</p>
              </div>
            </div>
            <div class="flex justify-between mx-3 mt-5">
              <div class="flex gap-2">
                <img src="../assets/img/sarah.png" alt="" class="rounded-full">
                <p>
                  Sarah M.
                </p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </div>
            </div>
          </div>
          <div
            class="bg-white w-full lg:max-w-[223px] h-full max-h-[220px] lg:absolute lg:top-[391px] lg:right-[50px] lg:rounded-xl rounded-none p-2">
            <div class="bg-[#F1F3F7] w-[207px] h-[143px] mx-[7px] mt-[7px] rounded-xl">
              <div class="mx-[12px] mt-[17px]">
                <div class="flex items-center">
                  <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 22 20">
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 22 20">
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 22 20">
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 22 20">
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 22 20">
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <p class="text-[16px] leading-[24px]">“I've discovered a treasure trove of meatless recipes
                  that have made my meals”.”.</p>
              </div>
            </div>
            <div class="flex justify-between mx-3 mt-5">
              <div class="flex gap-2">
                <img src="../assets/img/farellin.png" alt="" class="rounded-full">
                <p>
                  Farellin J.
                </p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="lg:relative m-auto h-full w-full max-w[1440px] lg:mt-0">
    <img src="../assets/img/about.png" alt="" class="w-full">
    <div class="lg:max-w-[578px] w-full bg-white px-10 pt-12 pb-10 lg:absolute lg:top-[85px] lg:right-[182px] lg:rounded-lg rounded-none items-center">
      <p class="font-semibold text-[35px] lg:text-[46px]">About Us</p>
      <p>Our recipes are the heart and soul of our culinary community, and they reflect our commitment to
        providing you with memorable and delightful dining experiences.</p>
      <button class="px-[40px] py-[10px] bg-[#F79F1A] rounded-2xl mt-10">Learn More</button>
    </div>
    <div class="lg:absolute lg:top-[353px] lg:left-[100px] lg:m-0 mt-4">
      <p class="text-[#046E1B] p-[20px] bg-white lg:rounded-lg rounded-none">50+ Quick Food Recipes
        That Easy To Do!</p>
    </div>
  </div>
  <div class="mt-6">
    <div class="flex justify-between items-center mb-6 p-10 lg:p-0">
      <div class="">
        <h2 class="text-[35px] lg:text-[46px] font-semibold">Discover, Create, Share</h2>
        <p class="text-[24px]">Check our most popular recipes of this week</p>
      </div>
      <div>
        <router-link :to="{ name: 'byName' }">
          <button class="bg-[#F79F1A] px-5 py-2 text-white rounded-xl">See All</button>
        </router-link>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <meals :meals="meals" />
    </div>

  </div>

  <div class="bg-[#046E1B] w-full max-w-[1440px] rounded-xl mt-8 py-3">
    <div class="flex flex-col-reverse items-center lg:flex-row lg:justify-between">
      <div class="w-full max-w-[787px] ml-6">
        <h2 class="text-[20px] lg:text-[30px] font-semibold text-white">
          Embrace the joy of cooking with get it on your iPhone or
          Android Your kitchen adventure begins now!</h2>
        <div class="flex justify-evenly lg:gap-[39px] mt-4">
          <a href="#" class="py-[2px] px-[10px] lg:py-[16px] lg:px-[50px] bg-[#F76631] rounded-md">
            App Store
          </a>
          <a href="#" class="py-[2px] px-[10px] lg:py-[16px] lg:px-[50px] bg-[#F76631] rounded-md">
            Google Play
          </a>
        </div>
      </div>
      <div class>
        <img src="../assets/img/iphone.png" alt="" class="object-cover">
      </div>
    </div>
  </div>
</template>

<script setup>
import axiosClient from '@/axiosClient';
import { onMounted } from 'vue';
import store from '@/store';
import { ref } from 'vue';
import Meals from '@/components/Meals.vue';
const meals = ref([])
onMounted(async () => {
  for (let i = 0; i < 9; i++) {
    axiosClient.get('random.php').then(({ data }) => meals.value.push(data.meals[0]));
  }
})
</script>

<style></style>