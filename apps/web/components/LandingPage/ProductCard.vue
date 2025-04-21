<template>
  <div class="lg:w-[280px] w-full rounded-[2vw] overflow-hidden shadow-none bg-white border">

    <div :class="['h-40 flex ']">
      <NuxtImg
                 :src="imageUrl"
                 :alt="imageAlt"
                 :title="imageTitle"
                 :loading="lazy && !priority ? 'lazy' : 'eager'"
                 :fetchpriority="priority ? 'high' : 'auto'"
                 :preload="priority || false"
                 :width="getWidth()"
                 :height="getHeight()"
                 class="object-cover aspect-square w-full"
                 data-testid="image-slot" />
    </div>
    <div class="space-p-4">
      <h3 class="font-[Open_Sans] text-[12px] leading-[17px] text-[#2C2C2C] mt-[12px] ml-[14px]">{{ name }}</h3>
      <p class="text-[19px] font-bold ml-[14px]">{{ n(price, 'currency') }}</p>
      <p class="text-[8px] leading-[11px] mt-[1px] ml-[14px]">Grundpreis: {{ getWeight(product) }}g ({{ n(getKgPrice(product), 'currency') }}/kg )</p>
      <p class="text-[8px] leading-[11px] mt-[5px] mb-[9px] ml-[14px] text-[#2c2c2c]">*Preis eks. MwSt. und zzgl. Versand</p>
      <div class="mt-2 text-sm border-t border-b border-gray-300">
        <div class="flex justify-between border-b border-gray-300">
          <div class="w-[40%] py-2 bg-[#2C2C2C]/10 flex  w-3/5">
            <span class="ml-[14px] text-[10px] leading-[14px] font-bold font[Open_Sans]">Inhalt</span>
          </div>
          <div class="w-[60%] py-2 bg-[#2C2C2C]/5 flex ">
            <span class="text-[10px] leading-[14px] ml-[13px]">12 Packungen à 40g</span>
          </div>
        </div>
        <div class="flex justify-between border-b border-gray-300">
          <div class="flex-1 py-2 bg-[#2C2C2C]/10 flex ">
            <span class="w-[40%] ml-[14px] text-[10px] leading-[14px] font-bold font[Open_Sans]">Nettogewicht</span>
          </div>
          <div class="w-[60%] py-2 bg-[#2C2C2C]/5 flex ">
            <span class="text-[10px] leading-[14px] ml-[13px]">{{productGetters.getWeightG(product)}}g pro Packung</span>
          </div>
        </div>
        <div class="flex justify-between">
          <div class="flex-1 py-2 bg-[#2C2C2C]/10 flex ">
            <span class="w-[40%] ml-[14px] text-[10px] leading-[14px] font-bold font[Open_Sans]">Haltbarkeit</span>
          </div>
          <div class="w-[60%] py-2 bg-[#2C2C2C]/5 flex ">
            <span class="text-[10px] leading-[14px] ml-[13px]">min. 90 Tage</span>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <select 
          v-model="quantity" 
          class="w-3/5 h-[45px] bg-gray-200 border border-gray-300 text-sm px-2"
          @change="debouncedAddToCart"
        >
          <option v-for="n in 10" :key="n" :value="n">
            {{ n }} Paket
          </option>
        </select>
        <div v-if="!loading">
          <button @click.stop="addItemToCart" 
              class="w-full bg-[#2C2C2C] text-white font-bold rounded-none h-[45px] hover:bg-gray-800 text-[14px] flex items-center justify-center no-underline"
            >
              IN DEN WARENKORB
          </button>
        </div>
        <div 
          v-else
          class="w-full  text-white font-bold rounded-none h-[45px] hover:bg-gray-800 text-[14px] flex items-center justify-center no-underline"
        >
          <SfLoaderCircular size="sm" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import type { ProductProps } from '~/components/LandingPage/Product/type';
import { productGetters } from '@plentymarkets/shop-api';
import { defaults } from '~/composables';
import { Product } from '@plentymarkets/shop-api';
import { computed, ref } from 'vue';
import { SfLoaderCircular } from '@storefront-ui/vue';

import _ from 'lodash';

const {
  product,
  name,
  imageUrl,
  imageAlt = '',
  imageTitle,
  imageWidth,
  imageHeight,
  rating,
  ratingCount,
  priority,
  lazy = true,
  unitContent,
  unitName,
  basePrice,
  showBasePrice,
  isFromWishlist = false,
  isFromSlider = false
} = defineProps<ProductProps>();

let available =productGetters.canBeAddedToCartFromCategoryPage(product);
const { cartIsEmpty } = useCart();

const localePath = useLocalePath();
const { t, n } = useI18n();
const { addToCart, setCartItemQuantity, deleteCartItem } = useCart();


const { data: categoryTree } = useCategoryTree();
const { price, crossedPrice } = useProductPrice(product);
const { send } = useNotification();
const loading = ref(false);
const { showNetPrices } = useCustomer();
const path = computed(() => productGetters.getCategoryUrlPath(product, categoryTree.value));
const productSlug = computed(() => productGetters.getSlug(product) + `_${productGetters.getItemId(product)}`);
const productPath = computed(() => localePath(`${path.value}/${productSlug.value}`));
const getWidth = () => {
  if (imageWidth && imageWidth > 0 && imageUrl.includes(defaults.IMAGE_LINK_SUFIX)) {
    return imageWidth;
  }
  return '';
};
const getHeight = () => {
  if (imageHeight && imageHeight > 0 && imageUrl.includes(defaults.IMAGE_LINK_SUFIX)) {
    return imageHeight;
  }
  return '';
};

// Handle success of adding to cart (can be used to trigger notifications, etc.)
const handleAddToCartSuccess = () => {
  loading.value = false;
  send({ message: t('addedToCart'), type: 'positive' });
};

const getWeight = (product: Product) => {
  let propertyGroup = product.variationProperties?.find(property => property.id == 8);
  let property: any = propertyGroup?.properties.find(property => property.id == 21);
  if (!property) return false;

  return property.values.value;
}

const getKgPrice = (product: Product) => {
  let weight = getWeight(product);
  let kgPrice = (price.value / weight) * 1000;

  return kgPrice;
}

const updateCart = async () => {
  let productId = Number(productGetters.getId(product));
  const cartItem = getCartItem(productId);
  const isItemInCart = cartItem?.quantity;

  if (!isItemInCart) {
    await addToCart({ productId, quantity: quantity.value });
    send({ message: t('addedToCart'), type: 'positive' });
  } else {
    if (quantity.value === 0) {
      await deleteCartItem(cartItem);
      send({ message: t('removedFromCart'), type: 'positive' });
    } else {
      await setCartItemQuantity({
        productId,
        quantity: quantity.value,
        cartItemId: cartItem.id,
      });
      send({ message: t('changedCartQuantity'), type: 'positive' });
    }
  }
}

const debouncedAddToCart = _.debounce(async () => {
  if (loading.value || !available) return;
  loading.value = true;

  try {
    await updateCart();
  } catch (error) {
    console.error('Error adding to cart:', error);
    send({ message: t('errorAddingToCart'), type: 'negative' });
  } finally {
    loading.value = false;
  }
}, 800);

const addItemToCart = async () => {
  if (loading.value || !available) return;
  quantity.value = 1;

  debouncedAddToCart();
};

const quantity = ref(1);
onMounted(() => {
  available =productGetters.canBeAddedToCartFromCategoryPage(product);
  quantity.value = getCartItem(Number(productGetters.getId(product)))?.quantity ?? 1;
})

const getCartItem = (productId: Number) => {
  const { data: cart } = useCart();
  const cartItem = cart.value?.items?.find((item) => item.variationId === productId);

  return cartItem ?? null;
}

const NuxtLink = resolveComponent('NuxtLink');
</script>