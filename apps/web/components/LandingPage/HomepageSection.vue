<template>
  <div class="mx-auto px-[30px] py-[70px]">
    <div class="flex flex-col xl:flex-row justify-center items-start">
      <div class="max-w-[360px] xl:text-center md:text-left mb-6 lg:ml-[35px] mr-[80px]">
        <span class="text-[18px] mb-[8px] font-bold">Verkaufsstrategien</span>
        <h1 class="font-bold mb-4 text-[48px] leading-[60px]">
          Lassen Sie sich inspirieren </h1>
          <a href="#hero-section" class="bg-[#f60b45] font-bold text-white px-6 py-3 rounded-full">Mehr erfahren</a>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-[25px] m-auto xl:max-w-[920px] flex-1">
        <div v-for="recipe in recipes" :key="recipe.id" class="bg-white shadow-lg shadow-r shadow-b rounded-none overflow-hidden">
          <NuxtLink :href="localePath(recipe.url)"><img :src="recipe.image" :alt="recipe.title" class="w-full h-[447px] object-cover duration-500 ease-in-out hover:scale-105 rounded-none"></NuxtLink>
          <div class="py-4">
            <NuxtLink :href="localePath(recipe.url)" class="text-[32px] font-bold pl-2">{{ recipe.title }}</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

const recipes = [
  {
    id: 1,
    title: "Hotellerie",
    image: "/images/hp-block/composing_hotel-buffet.png",
    url: '/hotellerie'
  },
  {
    id: 2,
    title: "Bars & Gastronomie",
    image: "/images/hp-block/automat_halterung_theken_automat.png",
    url: '/bars-gastronomie'
  },
  {
    id: 3,
    title: "Kiosk & Getränkemärkte",
    image: "/images/hp-block/Pringles_Wobbler.png",
    url: '/kiosk-getrankehandel'
  },
  {
    id: 4,
    title: "Pringles Automat",
    image: "/images/hp-block/composing_pringles-automat.png",
    url: 'https://snackinginsel.de/'
  }
];
</script>

<style>
</style>
