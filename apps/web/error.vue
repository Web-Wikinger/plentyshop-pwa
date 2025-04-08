<template>
  <uiHeader />
    <div class="bg-white flex flex-col lg:flex-row items-center justify-between px-6 pb-12 space-y-10 lg:space-y-0">
      <!-- Left side -->
      <div class="max-w-xl">
        <h1 class="text-4xl sm:text-5xl font-semibold text-gray-800 pb-4">
          Ups, ein Fehler!
        </h1>
        <p class="text-lg text-gray-600">
          Die Seite, die du aufgerufen hast, wurde nicht gefunden.
        </p>
        <hr class="border-gray-300 my-4" />
        <NuxtLink
          to="/"
          class="inline-block bg-[#d0033d] hover:bg-[#d0033d] text-white px-4 py-2 rounded-none transition"
        >
          Startseite
        </NuxtLink>
      </div>

      <!-- Right side -->
      <div class="text-center lg:text-right">
        <h2 class="text-[115px] sm:text-[160px] lg:text-[200px] font-bold text-gray-700" style="text-shadow: 4px 3px 0 #f8f9fa, 9px 8px 0 #dee2e6;">
          404
        </h2>
      </div>
    </div>
  <uiFooter />
</template>

<script setup lang="ts">
</script>