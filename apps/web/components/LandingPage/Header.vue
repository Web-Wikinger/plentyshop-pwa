<template>
  <div class="lg:header-sizes justify-between flex flex-col  lg:h-[355px] text-center bg-white p-8 shadow-none mx-auto lg:my-[100px] lg:max-w-[940px]">
    <div>
      <h2 class="text-lg font-semibold text-gray-800 text-[23px]">
        {{title}}
      </h2>
      <p class="text-[#2C2C2C] mt-1 lg:text-[40px] text-[20px] mt-[14px] font-bold" v-html="subtitle">
      </p>
    </div>
    <div>
      <p class="text-[#707070] text-sm text-[20px] font-normal" v-html="description">
      </p>
      <button
        v-if="buttonText"
        class="px-6 py-2 border-2 border-red-color text-red-color rounded-[1vw] hover:bg-red-color hover:text-white transition text-[20px] mt-[37px]"
      >
        {{buttonText}}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  subtitle: String,
  description: String,
  buttonText: String,
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