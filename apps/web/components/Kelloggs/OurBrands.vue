<template>
  <section class="flex flex-col items-center lg:py-10 text-center">
    <!-- Logos Row -->
    <div class="grid grid-cols-2 lg:gap-10 w-full">
      <div class="flex items-center justify-end">
        <img
          class="lg:h-[150px]"
          alt="Kellogg's"
          src="/images/logo-red.svg"
        >
      </div>
      <div class="flex items-center lg:ml-[105px]">
        <img
          class="lg:h-[220px]"
          alt="Pringles"
          src="https://kelloggs-shop.de/cdn/shop/t/26/assets/pringles-logo.png"
        >
      </div>
    </div>

    <!-- Social Media Row -->
    <div class="flex justify-center gap-2 lg:gap-16 mt-4 w-full">
      <!-- Kellogg's Socials -->
      <div class="flex lg:gap-6 gap-2 lg:mr-[100px]">
        <a href="https://www.facebook.com/kelloggs.deutschland/">
          <img class="w-[50px] h-auto" src="/images/social/facebook.svg" alt="Facebook">
        </a>
        <a href="https://www.instagram.com/kelloggs_de">
          <img class="w-[50px] h-auto" src="/images/social/instagram.svg" alt="Instagram">
        </a>
        <a href="https://www.youtube.com/user/KELLOGGDeutschland">
          <img class="w-[50px] h-auto" src="/images/social/youTube.svg" alt="YouTube">
        </a>
        <a href="https://www.tiktok.com/@kelloggs_de">
          <img class="w-[50px] h-auto" src="/images/social/tiktok.svg" alt="TikTok">
        </a>
      </div>

      <!-- Pringles Socials -->
      <div class="flex lg:gap-6 gap-2">
        <a href="https://www.facebook.com/PringlesDeutschland/">
          <img class="w-[50px] h-auto " src="/images/social/facebook.svg" alt="Facebook">
        </a>
        <a href="https://www.instagram.com/pringles_de/">
          <img class="w-[50px] h-auto" src="/images/social/instagram.svg" alt="Instagram">
        </a>
        <a href="https://www.youtube.com/channel/UCzwrjVlnMRynB80igUyAioQ">
          <img class="w-[50px] h-auto" src="/images/social/youTube.svg" alt="YouTube">
        </a>
        <a href="https://www.tiktok.com/@pringles_de">
          <img class="w-[50px] h-auto" src="/images/social/tiktok.svg" alt="TikTok">
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>

import { SfLink, SfIconShoppingCart, SfLoaderCircular, SfRating, SfCounter } from '@storefront-ui/vue';

</script>
