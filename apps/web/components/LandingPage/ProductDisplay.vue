<template>
  <div class="flex flex-wrap justify-center gap-6 p-6">
    <LandingPageProductCard
      v-for="product in products"
      :product="product"
      :name="productGetters.getName(product)"
      :image-url="addModernImageExtension(productGetters.getSecondPreviewImage(product))"
      :image-alt="
        productImageGetters.getImageAlternate(productImageGetters.getFirstImage(product)) ||
        productGetters.getName(product) ||
        ''
      "
      :image-height="productGetters.getImageHeight(product) || 600"
      :image-width="productGetters.getImageWidth(product) || 600"
    />
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { productGetters, productImageGetters } from '@plentymarkets/shop-api';

const { addModernImageExtension } = useModernImage();

import type { ProductListProps } from '~/components/LandingPage/Product/types.ts';

const {products} = defineProps<ProductListProps>();

console.log('products', products);
</script>
