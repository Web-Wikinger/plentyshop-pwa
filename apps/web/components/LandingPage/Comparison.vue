<template>
  <div class="container my-[100px]">
    <div class="bg-[#F2F2F2] rounded-3xl">
      <div class="flex flex-col md:flex-row items-center md:items-start bg-red-color text-white p-6 rounded-3xl">

        <div class="flex-1">
          <img 
            src="/images/cornflakes-muesli.png" 
            alt="Kellogg's Products" 
            class="rounded-lg shadow-none w-full"
          />
        </div>
        <div class="md:ml-6 flex-1 my-[20px]">
          <h2 class="text-lg uppercase text-[17px] leading-[22px]" v-html="title"></h2>
          <h1 class="text-2xl font-bold mt-2 text-[33px] leading-[44px] text-white">{{ subtitle }}</h1>
          <p class="mt-2 text-20px text-white" v-html="description">
          </p>
          <p class="mt-2 font-bold text-[20px] leading-[27px] mt-[50px] text-white">
            {{imageText}}
          </p>
          <img 
            src="/images/platzierungs-grafik.png"
          />
        </div>
      </div>
      
      <div class=" text-black p-4 rounded-lg text-center">
        <h3 class="text-xl font-bold text-[25px] leading-[33px] mt-[40px] mb-[19px]">Beispielrechnung Wareneinsatz:</h3>
        <div class="lg:flex justify-center items-center mt-2 lg:space-x-4 gap-4">
          <div class="bg-[#ACACAC] p-4 rounded-[3vw] lg:w-[385px] h-[190px] lg:flex lg:flex-col justify-center align-items">
            <p class="text-[25px] leading-[33px] font-bold text-white">Klassisches Frühstück*:</p>
            <p class="text-[40px] leading-[53px] font-bold text-white">&lt; 4,80 €</p>
          </div>
          <p class="text-[40px] leading-[53px] font-bold">VS.</p>
          <div class="bg-red-color text-white p-4 rounded-[3vw] lg:w-[385px] h-[190px] lg:flex lg:flex-col justify-center align-items">
            <p class="text-[25px] leading-[33px] font-bold text-white">Frühstück mit Kellogg’s Cerealien*: </p>
            <p class="text-[40px] leading-[53px] font-bold text-white">&gt; 1,50 €</p>
          </div>
        </div>
        <p class="text-[15px] leading-[20px] my-[40px] text-[#707070] font-normal ">*Quelle: Bayerische Landesanstalt für Landwirtschaft, Institut für <br>
          Betriebswirtschaft und Agrarstruktur, Dezember 2021</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  subtitle: String,
  description: String,
  imageText: String,
});
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
