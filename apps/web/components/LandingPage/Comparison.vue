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
          <h2 class="text-lg font-bold uppercase text-[17px] leading-[22px]">Große Geschmacksvielfalt - Gute Laune inklusive</h2>
          <h1 class="text-2xl font-bold mt-2 text-[33px] leading-[44px]">Je mehr KELLOGG‘s®️ gegessen wird, desto weniger Belag</h1>
          <p class="mt-2 text-20px">
            Das Kellogg’s®️ Sortiment umfasst unterschiedlichste knusprige Cereals und Müslis. Mit einer Auswahl davon haben Ihre Gäste eine gute Basis für leckere Bowls, die sie mit Zutaten von Ihrem Buffet ergänzen können und Sie profitieren - <strong>bei einer Platzierung im ersten Buffetdrittel </strong>- durch einen günstigeren Wareneinsatz als z.B. bei Wurst und Käse.*
          </p>
          <p class="mt-2 font-bold text-[20px] leading-[27px] mt-[50px]">
            Beispiel Platzierung auf Ihrem Buffet:
          </p>
          <img 
            src="/images/platzierungs-grafik.png"
          />
        </div>
      </div>
      
      <div class=" text-black p-4 rounded-lg text-center">
        <h3 class="text-xl font-bold text-[25px] leading-[33px] mt-[40px] mb-[19px]">Beispielrechnung Wareneinsatz:</h3>
        <div class="flex justify-center items-center mt-2 space-x-4 gap-4">
          <div class="bg-gray-300 p-4 rounded-[3vw] w-[385px] h-[190px] flex flex-col justify-center align-items">
            <p class="text-[25px] leading-[33px] font-semibold">Klassisches Frühstück*:</p>
            <p class="text-[40px] leading-[53px] font-bold">&lt; 4,80 €</p>
          </div>
          <p class="text-[40px] leading-[53px] font-bold">VS.</p>
          <div class="bg-red-color text-white p-4 rounded-[3vw] w-[385px] h-[190px] flex flex-col justify-center align-items">
            <p class="text-[25px] leading-[33px] font-semibold">Frühstück mit</p>
            <p class="text-[40px] leading-[53px] font-bold">&gt; 1,50 €</p>
          </div>
        </div>
        <p class="text-[15px] leading-[20px] my-[40px]  ">*Quelle: Bayerische Landesanstalt für Landwirtschaft, Institut für <br>
          Betriebswirtschaft und Agrarstruktur, Dezember 2021</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No script logic required for this static component
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
