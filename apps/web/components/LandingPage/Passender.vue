<template>
  <div class="bg-gray-100 py-10 px-5">
    <div class=" mx-[250px] text-center">
      <h3 class="text-[17px] uppercase text-[#2C2C2C]">Passender Snack</h3>
      <h2 class="text-[25px] leading-[33px] font-bold mt-1">
        Die Rolle der Textur und des Geschmacks in der Snack/Getränke-Paarung
      </h2>
      <p class="mt-2 text-[20px] leading-[27px]">
        Die Textur und der Geschmack des Snacks spielen eine wichtige Rolle bei der Paarung mit Getränken oder Hauptgängen.
        Eine knusprige Textur kann einen interessanten Kontrast zu einem cremigen Drink schaffen. Auf der anderen Seite kann ein salziger Snack den Geschmack eines süßen Getränks ausgleichen und das Geschmackserlebnis verbessern.
      </p>
    </div>

    <div class="max-w-4xl mx-[230px] mt-8 grid grid-cols-1 md:grid-cols-2 gap-[30px] mx-auto">
      <!-- First Card -->
      <div class="bg-red-color text-center rounded-[30px] w-[440px] h-[440px] p-6 rounded-lg flex flex-col items-center">
        <img height="125" width="125" class="py-[57px]" src="/images/Icon_salzig.svg">
        <p class="text-white text-[18px] ">Wenn der Drink <span class="font-bold">SALZIG ODER WÜRZIG</span> ist,
          empfiehlt sich ein Snack, der den Geschmack ausgleicht, wie zum Beispiel KELLOGG’S® Smacks oder Frosties zum Knuspern.
          Diese lassen sich zu einem Drink beispielsweise in einem Extra-Glas reichen.
        </p>
      </div>

      <!-- Second Card -->
      <div class="bg-red-color text-center rounded-[30px] w-[440px] h-[440px] p-6 rounded-lg flex flex-col items-center">
        <img height="155" width="155" class="pt-[34px] pb-[50px]" src="/images/Icon_suess.svg">
        <p class="text-white text-[18px] ">Wenn der Drink <span class="font-bold">SÜß ODER FRUCHTIG</span> ist,
          bietet sich ein Snack an, der einen kontrastierenden Geschmack hat, also ein herzhafter Snack, wie PRINGLES® Original oder PRINGLES® Hot & Spicy. Hierfür bieten sich vor allem die 40 g Dosen an.
        </p>
      </div>
    </div>

    <LandingPageProductDisplay
      v-if="cerealienProducts.length"
      :products="cerealienProducts"
      class="mt-[107px] mb-[20px]"
    />
  </div>
    
</template>

<script setup lang="ts">
import { Product } from "@plentymarkets/shop-api";

const { fetchProducts } = useProducts();
const { isAuthorized } = useCustomer();

const cerealienProducts    = ref([] as Product[])

async function loadProducts() {
  const cerealienRes = await fetchProducts({ categoryUrlPath: 'fruehstueck/cerealien', page: 1, itemsPerPage: 4 })

  cerealienProducts.value = cerealienRes.products
}

onMounted(loadProducts)

watch(isAuthorized, (newVal) => {
  if (newVal) {
    loadProducts()
  }
})
</script>
