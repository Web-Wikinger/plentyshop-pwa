<template>
  <NuxtLayout
    name="default"
    :breadcrumbs="breadcrumbs"
    class="relative"
    :class="{ 'pointer-events-none opacity-50': loading }"
  >
    <BulkAddProducts />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { data: productsCatalog, loading } = useProducts();
import { categoryGetters, categoryTreeGetters } from '@plentymarkets/shop-api';
const { data: categoryTree } = useCategoryTree();
const { t, locale } = useI18n();
definePageMeta({ layout: false });

const breadcrumbs = computed(() => {
  if (productsCatalog.value.category) {
    const breadcrumb = categoryTreeGetters.generateBreadcrumbFromCategory(
      categoryTree.value,
      categoryGetters.getId(productsCatalog.value.category),
    );
    breadcrumb.unshift({ name: t('home'), link: '/' });

    return breadcrumb;
  }

  return [];
});
</script>
