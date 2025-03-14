<template>
  <div class="lg:w-[280px] w-full rounded-lg overflow-hidden shadow-none bg-white border">

    <div :class="['h-40 flex ', product.background]">
      <img :src="product.image" :alt="product.name" class="h-24" />
    </div>
    <div class="space-p-4">
      <h3 class="font-[Open_Sans] text-[12px] leading-[17px] text-[#2C2C2C] mt-[12px] ml-[14px]">{{ product.name }}</h3>
      <p class="text-[19px] font-bold ml-[14px]">{{ product.price }}</p>
      <p class="text-[8px] leading-[11px] mt-[1px] ml-[14px]">Grundpreis: 6,72 EUR / KG</p>
      <p class="text-[8px] leading-[11px] mt-[5px] mb-[9px] ml-[14px]">*Preis eks. MwSt. und zzgl. Versand</p>
      <div class="mt-2 text-sm border-t border-b border-gray-300">
        <div class="flex justify-between border-b border-gray-300">
          <div class="w-[40%] py-2 bg-[#2C2C2C]/10 flex  w-3/5">
            <span class="ml-[14px] text-[10px] leading-[14px] font-bold font[Open_Sans]">Inhalt</span>
          </div>
          <div class="w-[60%] py-2 bg-[#2C2C2C]/5 flex ">
            <span class="text-[10px] leading-[14px] ml-[13px]">12 Packungen à 40g</span>
          </div>
        </div>
        <div class="flex justify-between border-b border-gray-300">
          <div class="flex-1 py-2 bg-[#2C2C2C]/10 flex ">
            <span class="w-[40%] ml-[14px] text-[10px] leading-[14px] font-bold font[Open_Sans]">Nettogewicht</span>
          </div>
          <div class="w-[60%] py-2 bg-[#2C2C2C]/5 flex ">
            <span class="text-[10px] leading-[14px] ml-[13px]">40g pro Packung</span>
          </div>
        </div>
        <div class="flex justify-between">
          <div class="flex-1 py-2 bg-[#2C2C2C]/10 flex ">
            <span class="w-[40%] ml-[14px] text-[10px] leading-[14px] font-bold font[Open_Sans]">Haltbarkeit</span>
          </div>
          <div class="w-[60%] py-2 bg-[#2C2C2C]/5 flex ">
            <span class="text-[10px] leading-[14px] ml-[13px]">min. 90 Tage</span>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <select class="w-3/5 h-[45px] bg-gray-200 border border-gray-300 text-sm px-2">
          <option>1 Paket</option>
        </select>
        <button
          class="w-full bg-[#2C2C2C] text-white rounded-none h-[45px] hover:bg-gray-800 text-[14px]"
        >
          IN DEN WARENKORB
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ product: { id: number; name: string; price: string; image: string; background: string } }>();
</script>