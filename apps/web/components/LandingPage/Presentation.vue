<template>
  <div :class="[bgColor, 'w-full py-[62px]']"> 
    <div class="container ">
      <div class="align-items justify-center pb-[20px]">
        <h2 
          v-if="header"
          class="lg:text-[40px] text-[30px] font-bold justify-content lg:px-[300px] break-all"
        >{{ header }}</h2>
      </div>
      <div
        class='presentation-sizes lg:flex lg:flex-row  items-center my-8 rounded-[1vw] shadow-none w-full lg:min-h-[480px] justify-between gap-4'
      >
        <div v-if="imageLeft" class="lg:flex items-center justify-center lg:max-w-[550px] h-auto">
          <img :src="imageSrc" alt="Frühstücksbuffet" class="rounded-[1vw] w-full h-full " />
        </div>

        <div class="text-left lg:flex lg:flex-col h-full lg:max-w-[550px] justify-center">
          <div class="mb-[20px]">
            <p class="text-xs text-gray-600 uppercase text-[17px]" v-html="SubTitle"></p>
            <h2 class="text-2xl font-bold text-gray-800 mt-2 text-[33px] my-[16px] leading-[33px]" v-html="Title">
            </h2>
            <p class="text-gray-600 mt-4 text-sm text-[20px] pr-[20px] leading-[27px] max-w-[500px]" v-html="Description">
            </p>
            <p class="text-xs text-gray-500 mt-2 text-[12px]" v-html="Additional">
            </p>
          </div>

          <NuxtLink v-if="!noButton && !mailTo"
                    :to="buttonLink"
                    class="mt-[20px] px-4 lg:px-6 py-2 border-2 border-red-500 text-red-color font-semibold rounded-[1vw] hover:bg-red-color hover:text-white transition self-start text-sm lg:text-base text-center whitespace-normal min-w-[200px] max-w-full">
                    {{ButtonText}}
          </NuxtLink>
          <a v-if="mailTo"
            :href="buttonLink" 
            class="mt-6 px-6 py-2 border-2 border-red-500 text-red-color font-semibold rounded-[1vw] hover:bg-red-color hover:text-white transition self-start">
            {{ButtonText}}
          </a>
        </div>

        <div v-if="!imageLeft" class="h-full lg:flex items-center justify-center mt-[20px]">
          <img :src="imageSrc" alt="Frühstücksbuffet" class="rounded-[1vw] lg:max-w-[550px] h-auto" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  imageLeft: Boolean,
  bgColor: { type: String, default: 'bg-white' },
  imageSrc: { type: String, required: true },
  header: { type: String, required: false },
  SubTitle: { type: String, default: '' },
  Title: { type: String, default: '' },
  Description: { type: String, default: '' },
  Additional: { type: String, default: '' },
  ButtonText: { type: String, default: '' },
  noButton: Boolean,
  buttonLink :String,
  mailTo:Boolean
});
</script>
