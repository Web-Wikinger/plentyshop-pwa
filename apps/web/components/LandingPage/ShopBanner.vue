<template>
  <div class="flex w-full bg-white rounded-[4vw] overflow-hidden">
    <!-- Left Section -->
    <div class="w-[44%] bg-[#f60b45] text-white flex pb-10 flex-col  justify-center rounded-l-lg">
      <h2 class="text-[70px] font-bold px-10 leading-[75px]">Sichern Sie sich das Starter-Kit!</h2>
      <p class=" bg-white text-black  py-3 text-[40px] font-bold rounded-none shadow-md pl-10 mr-[100px]">Servicetool gratis!*</p>
      <p class="mt-[60px] text-[8px] opacity-90 leading-relaxed px-10 mr-[100px]">
        * Das Angebot gilt für registrierte Businesspartner im B2B Kellogg’s Shop mit angegebener Ust-ID.<br>
        Nur ein Starter Kit pro Businesspartner bestellbar. Nur solange der Vorrat reicht. Keine Barauszahlung möglich.
      </p>
      <p class="mt-4 text-[8px] opacity-80 px-10 mr-[100px]">Kellogg’s Shop von Web Wikinger Commerce GmbH<br>
        © 2025 Kellanova | TM, ®, © 2025 KELLOGG Europe Trading Limited. All rights reserved.</p>
    </div>
    
    <!-- Middle Section -->
    <div class="w-[28%] bg-yellow-400 flex justify-center items-center p-8">
      <img src="/images/Pringles-image.png" alt="Product Display" class="w-full max-w-xs">
    </div>
    
    <!-- Right Section -->
    <div class="w-[28%] bg-purple-600 flex justify-center items-center p-8 rounded-r-lg">
      <img src="/images/Pringles Pop Image.png" alt="Pop & Go Display" class="w-[75%] max-w-xs">
    </div>
  </div>
</template>

<script>
export default {
  name: "StarterKitBlock",
};
</script>