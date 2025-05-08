<template>
  <NuxtLayout
              name="checkout"
              :back-to-cart="false"
              :back-label-desktop="t('back')"
              :back-label-mobile="t('back')"
              :heading="t('myCart')">
    <div v-if="!cartIsEmpty" class="md:grid md:grid-cols-12 md:gap-x-6" data-testid="cart-page-content">
      <div class="col-span-7 mb-2 md:mb-0">
        <div class="hidden lg:grid grid-cols-5 items-center mb-3">
          <div class="col-span-3 g-16">Artikel</div>
          <div class="g-16">Menge</div>
          <div class="text-right g-16">Summe</div>
        </div>
        <div v-for="(cartItem, index) in cart?.items" :key="cartItem.id">
          <UiCartProductCard :cart-item="cartItem" :class="{ 'border-t': index === 0 }" />
        </div>
        <Coupon v-if="viewport.isLessThan('lg')" class="mb-2" />
        <div class="flex flex-col items-end justify-end mb-4">
          <UiButton
            @click="onGenerateUrl"
            class="max-w-[200px]"
          >
            {{ t('bulkAdd.generateUrl') }}
          </UiButton>
          <span class="max-w-[200px] text-[10px] text-gray-700 text-center mt-2">Beim Speichern des Warenkorbs wird eine URL generiert und automatisch in die Zwischenablage kopiert. Über diesen Link kann der Warenkorb mit den identischen Produkten erneut aufgerufen und befüllt werden</span>
        </div>
      </div>
      <div class="lg:py-6 lg:px-4 lg:ml-12 relative col-span-5 md:sticky md:top-10 h-fit mt-4 lg:mt-0 lg:px-12"
           :class="{ 'pointer-events-none opacity-50': loading }">
        <SfLoaderCircular v-if="loading" class="absolute top-[130px] right-0 left-0 m-auto z-[999]" size="2xl" />
        <OrderSummary class="kl-summary" :cart="cart">
          <!-- <Coupon v-if="viewport.isGreaterOrEquals('lg')" class="mb-5" /> -->
          <UiButton
                    data-testid="checkout-button"
                    :tag="NuxtLink"
                    :to="goToCheckout()"
                    size="lg"
                    class="w-full mb-4 md:mb-0 shadow-none lg:bg-primary-500 lg:text-white lg:g-16">
            {{ t('goToCheckout') }}
          </UiButton>
          <client-only>
            <PayPalExpressButton :disabled="loading" class="mt-4" type="CartPreview" />
            <PayPalPayLaterBanner placement="cart" :amount="cartGetters.getTotal(cartGetters.getTotals(cart))" />
          </client-only>
        </OrderSummary>
      </div>
    </div>
    <div v-else class="flex items-center justify-center flex-col pt-24 pb-32" data-testid="cart-page-content">
      <h2 class="mt-8 typography-headline-3 font-bold">{{ t('emptyCart') }}</h2>
    </div>
  </NuxtLayout>
  <div v-if="showCopiedAlert" @click="hideCopiedAlert" class="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-xl shadow-lg cursor-pointer z-50 transition-opacity duration-300">
    {{ $t('bulkAdd.CopiedSuccesfully') }}
  </div>
</template>

<script setup lang="ts">
import { SfLoaderCircular } from '@storefront-ui/vue';
import { cartGetters } from '@plentymarkets/shop-api';
const { setPageMeta } = usePageMeta();

definePageMeta({ pageType: 'static' });

const shippingRules = [
  {
    id: 14,
    name: 'B2B / Retail 2 / Vertrieb',
    minFreeShipping: 100,
  },
  {
    id: 12,
    name: 'Retail',
    minFreeShipping: 280,
  },
  {
    id: 10,
    name: 'Mariott',
    minFreeShipping: 200,
  }
];

const NuxtLink = resolveComponent('NuxtLink');
const { t } = useI18n();
const viewport = useViewport();
const localePath = useLocalePath();
const { isAuthorized } = useCustomer();
const { data: cart, cartIsEmpty, loading } = useCart();
const goToCheckout = () => (isAuthorized.value ? localePath(paths.checkout) : localePath(paths.guestLogin));

const icon = 'page';
setPageMeta(t('cart'), icon);
const showCopiedAlert = ref(false);

const onGenerateUrl = () => {
  if (!cart.value?.items?.length) {
    console.warn('Cart is empty – nothing to generate');
    return;
  }

  // map each item to "id=quantity"
  const query = cart.value.items
    .map(item => `${encodeURIComponent(item.variationId)}=${encodeURIComponent(item.quantity)}`)
    .join('&');

  const baseUrl = window.location.origin;
  const url = `${baseUrl}?${query}`;
  
  // e.g. copy to clipboard
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url)
      .then(() => {
        showCopiedAlert.value = true;
        setTimeout(() => {
          showCopiedAlert.value = false;
        }, 3000); // auto-hide after 3s
      })
      .catch(() => console.error('Copy failed'));
  } else {
    console.log('Generated URL:', url);
  }

  return url;
};

const hideCopiedAlert = () => {
  showCopiedAlert.value = false;
};
</script>
