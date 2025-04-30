<template>
  <NuxtLayout
    name="default"
    :breadcrumbs="breadcrumbs"
    class="relative"
    :class="{ 'pointer-events-none opacity-50': loading }"
  >
    <!-- Products table with bulk-add controls -->
    <div class="flex justify-between items-center mx-10 my-6">
      <h1 class="text-2xl font-bold">{{ $t('bulkAdd.title') }} {{ categoryName }}</h1>
      <UiButton
        variant="primary"
        @click="addSelectedToBasket"
        :disabled="!hasProductsToAdd || bulkAddLoading"
        class="flex items-center"
      >
        <template #prefix>
          <SfIconShoppingCart size="sm" class="mr-2" />
        </template>
        <span v-if="!bulkAddLoading">{{ $t('bulkAdd.addAllToBasket') }} ({{ selectedProductsCount }})</span>
        <span v-else><SfLoaderCircular size="sm" class="mr-2" />{{ $t('bulkAdd.adding') }}</span>
      </UiButton>
    </div>

    <div
      v-if="showSuccessNotification"
      class="mx-10 p-4 mb-4 rounded-md bg-positive-100 text-positive-700 flex justify-between items-center"
    >
      <span>{{ $t('bulkAdd.addedToBasket') }}</span>
      <SfIconClose class="cursor-pointer" @click="showSuccessNotification = false" />
    </div>

    <div class="px-4 my-6">
      <table class="w-full table-auto border-collapse bg-white shadow rounded">
        <thead class="bg-red-color text-white">
          <tr>
            <th class="p-3 text-left">ART.NR.</th>
            <th class="p-3 text-left">NAME</th>
            <th class="p-3 text-left">VERP.-EINHEIT</th>
            <th class="p-3 text-center">ANZAHL</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(product, index) in productsCatalog?.products"
            :key="index"
            class="border-t hover:bg-gray-50"
          >
            <td class="p-3">{{ productGetters.getId(product) }}</td>
            <td class="p-3 flex items-center gap-2">
              <img
                :src="addModernImageExtension(productGetters.getCoverImage(product))"
                alt="product"
                class="w-6 h-12 object-contain"
              />
              <span>{{ productGetters.getName(product) }}</span>
            </td>
            <td class="p-3">
              {{ productGetters.getUnitContent(product) }} {{ productGetters.getUnitName(product) }}
            </td>
            <td class="p-3 text-center">
              <div class="inline-flex items-center gap-1">
                <button
                  type="button"
                  class="px-2 py-1 text-white bg-red-500 rounded-l hover:bg-red-600"
                  @click="decreaseQuantity(productGetters.getId(product))"
                >
                  -
                </button>
                <input
                  type="text"
                  class="w-20 text-center border border-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 font-medium"
                  v-model.number="quantities[productGetters.getId(product)]"
                  min="0"
                />
                <button
                  type="button"
                  class="px-2 py-1 text-white bg-green-500 rounded-r hover:bg-green-600"
                  @click="increaseQuantity(productGetters.getId(product))"
                >
                  +
                </button>
              </div>
            </td>

          </tr>
        </tbody>
      </table>
    </div>

    <div
      v-if="!loading && (!productsCatalog?.products || productsCatalog.products.length === 0)"
      class="text-center p-10 bg-gray-50 rounded-lg my-6 mx-10"
    >
      <p class="text-lg text-neutral-500 mb-2">{{ $t('bulkAdd.noProducts') }}</p>
      <p class="text-sm text-neutral-400">{{ $t('bulkAdd.tryAnotherCategory') }}</p>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">

import { categoryGetters, categoryTreeGetters, productGetters } from '@plentymarkets/shop-api';
import { SfLoaderCircular } from '@storefront-ui/vue';

const { isAuthorized } = useCustomer();
const { addModernImageExtension } = useModernImage();

definePageMeta({ layout: false });

const { t, locale } = useI18n();
const route = useRoute();
const router = useRouter();
const { data: productsCatalog, loading, fetchProducts } = useProducts();
const { data: categoryTree } = useCategoryTree();
const { buildCategoryLanguagePath } = useLocalization();
const { setCategoriesPageMeta } = useCanonical();
const { getFacetsFromURL, checkFiltersInURL } = useCategoryFilter();


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

const categoryName = computed(() => {
  return productsCatalog.value.category.details?.[0]?.name;
});

const handleQueryUpdate = async () => {
  await fetchProducts(getFacetsFromURL()).then(() => checkFiltersInURL());

  if (!productsCatalog.value.category) {
    throw new Response(null, {
      status: 404,
      statusText: 'Not found',
    });
  }
};

await handleQueryUpdate().then(() => setCategoriesPageMeta(productsCatalog.value, getFacetsFromURL()));

const { setPageMeta } = usePageMeta();
const icon = 'sell';
setPageMeta(categoryName.value, icon);

watch(
  () => locale.value,
  (changedLocale: string) => {
    router.push({
      path: buildCategoryLanguagePath(`${productsCatalog.value.languageUrls[changedLocale]}`),
      query: route.query,
    });
  },
);

const headTitle = computed(() =>
  productsCatalog.value?.category
    ? (categoryGetters.getMetaTitle(productsCatalog.value.category) || process.env.METATITLE) ?? ''
    : process.env.METATITLE ?? '',
);

const descriptionContent = computed(() =>
  productsCatalog.value?.category
    ? (categoryGetters.getMetaDescription(productsCatalog.value.category) || process.env.METADESC) ?? ''
    : process.env.METADESC ?? '',
);

const keywordsContent = computed((): string =>
  productsCatalog.value?.category
    ? (categoryGetters.getMetaKeywords(productsCatalog.value.category) || process.env.METAKEYWORDS) ?? ''
    : process.env.METAKEYWORDS ?? '',
);

const robotsContent = computed((): string =>
  productsCatalog.value?.category ? categoryGetters.getCategoryRobots(productsCatalog.value.category) : '',
);

watch(
  () => route.query,
  async () => {
    await handleQueryUpdate().then(() => setCategoriesPageMeta(productsCatalog.value, getFacetsFromURL()));
  },
);

useHead({
  title: headTitle,
  meta: [
    { name: 'description', content: descriptionContent },
    { name: 'keywords', content: keywordsContent },
    { name: 'robots', content: robotsContent },
  ],
});

watch(isAuthorized, (newValue: Boolean) => {
  if (newValue) {
    // Fetch or update the productsCatalog when the user is authorized
    fetchProducts({categoryId: String(categoryGetters.getId(productsCatalog.value.category))});
  } else {

  }
});

// Quantity and bulk-add
const quantities = ref<Record<string, number>>({});

const selectedProductsCount = computed(() => Object.values(quantities.value).filter(q => q > 0).length);
const hasProductsToAdd = computed(() => selectedProductsCount.value > 0);

const { addToCart } = useCart();
const { send } = useNotification();
const bulkAddLoading = ref(false);
const showSuccessNotification = ref(false);

async function addSelectedToBasket() {
  if (!hasProductsToAdd.value) {
    send({ message: t('bulkAdd.noProductsSelected'), type: 'negative' });
    return;
  }
  bulkAddLoading.value = true;
  let addedCount = 0;
  for (const product of productsCatalog.value.products) {
    const id = productGetters.getId(product);
    const qty = quantities.value[id] || 0;
    if (qty > 0) {
      if (await addToCart({ productId: Number(productGetters.getVariationId(product)), quantity: qty, basketItemOrderParams: [] })) addedCount++;
    }
  }
  showSuccessNotification.value = true;
  setTimeout(() => (showSuccessNotification.value = false), 5000);
  if (addedCount > 0) {
    Object.keys(quantities.value).forEach(k => (quantities.value[k] = 0));
    send({ message: t('bulkAdd.addedToBasket'), type: 'positive' });
  } else {
    send({ message: t('bulkAdd.errorAddingToBasket'), type: 'negative' });
  }
  bulkAddLoading.value = false;
}

function increaseQuantity(id: string | number) {
  const key = String(id)
  if (!quantities.value[key]) {
    quantities.value[key] = 0
  }
  quantities.value[key]++
}

function decreaseQuantity(id: string | number) {
  const key = String(id)
  if (quantities.value[key] > 0) {
    quantities.value[key]--
  }
}



</script>
