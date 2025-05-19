<template>
  <div class="mx-auto px-4 bg-white" style="margin-top: 100px; margin-bottom: 100px;">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Hot & Spicy -->
      <div class="flex flex-col bg-white rounded-lg">
        <img 
          src="/images/Pringles_Hot_Spicy_12x40g.webp"
          alt="Pringles Hot & Spicy"
          class="w-full h-auto object-contain mb-4"
        />
        <h3 class="text-xl font-bold mb-2">Pringles Hot & Spicy - 40g</h3>
        <p class="text-gray-600 mb-4">480g</p>
      </div>

      <!-- Original -->
      <div class="flex flex-col bg-white rounded-lg">
        <img 
          src="/images/Pringles_Original_40g.webp"
          alt="Pringles Original"
          class="w-full h-auto object-contain mb-4"
        />
        <h3 class="text-xl font-bold mb-2">Pringles Original - 40g</h3>
        <p class="text-gray-600 mb-4">480g</p>
      </div>

      <!-- Sour Cream & Onion -->
      <div class="flex flex-col bg-white rounded-lg">
        <img 
          src="/images/Pringles_Sour_Cream_Onion_40g.webp"
          alt="Pringles Sour Cream & Onion"
          class="w-full h-auto object-contain mb-4"
        />
        <h3 class="text-xl font-bold mb-2">Pringles Sour Cream & Onion - 40g</h3>
        <p class="text-gray-600 mb-4">480g</p>
      </div>

      <!-- Sweet Paprika -->
      <div class="flex flex-col bg-white rounded-lg">
        <img 
          src="/images/Pringles_Sweet_Paprika_12x40g.webp"
          alt="Pringles Sweet Paprika"
          class="w-full h-auto object-contain mb-4"
        />
        <h3 class="text-xl font-bold mb-2">Pringles Sweet Paprika - 40g</h3>
        <p class="text-gray-600 mb-4">480g</p>
      </div>
    </div>
    <div class="flex justify-center">
      <UiButton 
          v-if="!isAuthorized" 
          :tag="NuxtLink" to="/kelloggs/register"
          class="bg-[#f60c45] font-[800] text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors"
      >
        Jetzt kaufen
      </UiButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const NuxtLink = resolveComponent('NuxtLink');

const { isAuthorized } = useCustomer();

</script> 