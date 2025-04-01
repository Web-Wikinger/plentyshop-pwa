<template>
  <div class="mx-auto px-[30px] py-[70px]">
    <div class="flex flex-col md:flex-row justify-center items-start">
      <div class="max-w-[360px] text-center md:text-left mb-6 md:mb-0 mr-[80px]">
        <span class="text-[18px] mb-[8px] font-bold"></span>
        <h1 class="font-bold mb-4 text-[48px] leading-[60px]">Verkaufsstrategien für Ihre</h1>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-[25px] max-w-[920px] flex-1">
        <div v-for="recipe in recipes" :key="recipe.id" class="bg-white shadow-lg shadow-r shadow-b rounded-none overflow-hidden">
          <a :href="localePath(recipe.url)"><img :src="recipe.image" :alt="recipe.title" class="w-full h-[447px] object-cover duration-500 ease-in-out hover:scale-105 rounded-[1vw]"></a>
          <div class="py-4">
            <a :href="localePath(recipe.url)" class="text-[32px] font-bold pl-2">{{ recipe.title }}</a>
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
    image: "/images/hp-block/1.png",
    url: '/hotellerie'
  },
  {
    id: 2,
    title: "Bars",
    image: "/images/hp-block/2.png",
    url: '/bars-gastronomie'
  },
  {
    id: 3,
    title: "Kiosk & Getränkemärkte",
    image: "/images/hp-block/3.png",
    url: '/kiosk-getrankehandel'
  },
  {
    id: 4,
    title: "Pringles",
    image: "/images/hp-block/4.png",
    url: 'https://kelloggs-shop.de/pages/pringles-pos'
  }
];
</script>

<style>
</style>
