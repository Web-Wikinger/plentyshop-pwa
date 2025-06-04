<template>
  <div class="bg-gray-100 py-10 px-5">
    <div class=" lg:mx-[250px] text-center">
      <h3 class="text-[17px] uppercase text-[#2C2C2C]">Süß trifft würzig</h3>
      <h2 class="text-[25px] leading-[33px] font-bold mt-1">
        Food Pairing mit Cerealien
      </h2>
      <p class="mt-2 text-[20px] leading-[27px]">
        Auch Getränkemärkte profitieren gleich doppelt davon, Cerealien anzubieten: Zum einen stärken Sie Ihr Profil als regionaler Nahversorger, zum anderen positionieren Sie sich als Experte für Food Pairing. Was genau bedeutet das? Die Kombination von Snacks und Getränken hängt stark von Geschmack und Textur ab. So kann beispielsweise ein süßer Snack wie KELLOGG’S® Smacks den Geschmack einer herzhaften Spirituose ergänzen, ausgleichen und sogar hervorheben. Machen Sie Ihre Kunden doch einmal gezielt auf diese spannenden Geschmackskombinationen aufmerksam!
      </p>
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
  if(isAuthorized.value)
  {
    const cerealienRes = await fetchProducts({ categoryUrlPath: 'fruehstueck/cerealien', page: 1, itemsPerPage: 4 })

    cerealienProducts.value = cerealienRes.products 
  }
}


onMounted(loadProducts)

watch(isAuthorized, (newVal) => {
  if (newVal) {
    loadProducts()
  }
})

</script>
