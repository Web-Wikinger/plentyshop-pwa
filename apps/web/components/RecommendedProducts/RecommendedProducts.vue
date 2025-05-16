<template>
  <ProductSlider v-if="recommendedProducts?.length" :items="recommendedProducts" />
</template>

<script setup lang="ts">
import type { RecommendedProductsProps } from './types';

const props = defineProps<RecommendedProductsProps>();
const { data: recommendedProducts, fetchProductRecommended } = useProductRecommended(props.categoryId + props.cacheKey);
const { isAuthorized } = useCustomer();

watch(isAuthorized, async (newValue: Boolean) => {
  if (newValue) {
    // Fetch or update the productsCatalog when the user is authorized
    await fetchProductRecommended(props.categoryId);
  } else {

  }
});
if (props.categoryId) {
  fetchProductRecommended(props.categoryId);
}
</script>
