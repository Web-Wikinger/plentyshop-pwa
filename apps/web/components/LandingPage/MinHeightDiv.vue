<template>
  <div class="flex lg:flex-row flex-col justify-center w-full py-20">
    <!-- Main Container with Red Background -->
    <div class="relative flex justify-between items-center bg-red-color text-white px-[100px] py-[45px] rounded-3xl w-full max-w-5xl lg:min-h-[380px] m-0">
      
      <div v-if="imageLeft"
        class="flex-1"
      >
      </div>
      <!-- Text Section -->
      <div class="flex-1">
        <p class="text-xs leading-[22px] uppercase text-[17px] text-white">{{topTitle}}</p>
        <h2 class="font-bold mt-2 text-[33px] leading-[30px] text-white">
          {{title}}
        </h2>
        <p class="text-sm mt-4 text-[20px] leading-[27px] font-regular text-white" v-html="description">
        </p>
        <button
          v-if="btnText"
          class="px-6 py-2 border-2 border-white text-white rounded-[1vw] hover:bg-white hover:text-white transition text-[20px] mt-[37px]"
        >
          {{btnText}}
        </button>
      </div>

      <div v-if="!imageLeft"
        class="flex-1">
        
      </div>





      <template v-if="!isMobile">
        <div v-if="!imageLeft" class="lg:absolute right-[100px]">
          <img 
            :src="imageSrc" 
            alt="Foodserver Left" 
            class="h-[400px] md:h-[200px] lg:h-[600px] object-contain"
          />
        </div>
        <div v-else class="lg:absolute left-0">
          <img 
            :src="imageSrc" 
            alt="Foodserver Left" 
            class="h-[400px] md:h-[200px] lg:h-[600px] object-contain"
          />
        </div>
      </template>
    </div>
    <div v-if="isMobile" class="flex items-center justify-center">
      <img 
          :src="imageSrc" 
          alt="Foodserver Left" 
          class="h-[400px] md:h-[200px] lg:h-[600px] object-contain"
        />
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
  btnText: String
});

const viewport = useViewport();
const isMobile = computed(() => viewport.isLessThan('md'));
</script>
