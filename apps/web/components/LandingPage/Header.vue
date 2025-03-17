<template>
  <div class="lg:header-sizes justify-between flex flex-col  lg:h-[355px] text-center bg-white p-8 shadow-none mx-auto lg:my-[100px] lg:max-w-[940px]">
    <div>
      <h2 class="text-lg font-semibold text-gray-800 text-[23px]">
        Platzierungsvorschlag und Best Practice-Tipps für die Hotellerie
      </h2>
      <p class="text-[#2C2C2C] mt-1 lg:text-[40px] text-[20px] mt-[14px] font-bold">
        Kellogg's® Produkte effektiv am Frühstücksbuffet und in Tagungsräumen platzieren
      </p>
    </div>
    <div>
      <p class="text-[#707070] text-sm text-[20px] font-normal">
        In der Hotellerie entscheidet oft das kulinarische Angebot über den Erfolg, besonders beim Frühstück und in Tagungsräumen. Hier spielt der Hoteleinkauf eine Schlüsselrolle: Durch die Auswahl qualitativer Produkte können Hotels ihr Frühstücksbuffet und Snack-Angebot in Tagungsräumen aufwerten.
      </p>
      <button
        class="px-6 py-2 border-2 border-red-color text-red-color rounded-[1vw] hover:bg-red-color hover:text-white transition text-[20px] mt-[37px]"
      >
        Zum Snack-Angebot
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// No additional script logic needed for static content
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