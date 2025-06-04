<template>
  <div class="relative lg:flex justify-between items-center bg-red-color text-white px-[10px] lg:px-[80px] py-[45px] rounded-3xl w-full lg:max-w-[1200px] m-0 mx-auto">
    <div class="lg:w-[540px] lg:flex-1">
      <p class="text-[17px] leading-[22px] uppercase text-white">{{topTitle}}</p>
      <h2 class="text-[33px] leading-[44px] font-bold mt-2">{{title}}</h2>
      <p class="mt-4 text-[20px] leading-[27px] text-white" v-html="description">
      </p>
    </div>
    <div class="lg:flex-1">
      <p 
        v-if="imageTitle"
        class="text-[20px] leading-[27px] font-bold text-white pb-4"
      >{{imageTitle}}</p>
      <img :src="imageSrc" alt="Cereal and milk" class="w-[37] m-auto" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  topTitle: String,
  description: String,
  imageSrc: { type: String, required: true },
  imageLeft: Boolean,
  btnText: String,
  imageTitle: String
});
</script>
