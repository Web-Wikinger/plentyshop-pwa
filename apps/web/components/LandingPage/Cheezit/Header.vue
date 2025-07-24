<template>
  <div class="bg-[#CC2226]">
    <div :class="[
      'lg:header-sizes justify-between flex flex-col lg:h-[355px] text-center p-8 shadow-none mx-auto lg:max-w-[940px]',
      noMarginTop ? 'lg:mt-[0px]' : 'lg:mt-[100px]'
    ]">
      <div>
        <h2 class="text-lg text-gray-800 text-[23px] block-berthold">
          {{title}}
        </h2>
        <p class="text-white mt-1 lg:text-[40px] text-[20px] mt-[14px] block-berthold" v-html="subtitle">
        </p>
      </div>
      <div>
        <p class="text-white text-sm text-[20px] font-normal mb-[30px] block-berthold"  v-html="description">
        </p>
        <NuxtLink v-if="buttonText"
                      :to="buttonLink"
                      class="mt-6 px-6 py-2 border-2 border-red-500 text-red-color font-semibold rounded-[1vw] hover:bg-red-color hover:text-white transition self-start">
                      {{buttonText}}
            </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  subtitle: String,
  description: String,
  buttonText: String,
  buttonLink:String,
  noMarginTop: { type: Boolean, default: false }
});
</script>

<style>
.klg-red {
  border-color: red-color;
  color: red-color;
}

.header-sizes { 
  max-width: 1200px;
  min-height: 355px;
}
</style>