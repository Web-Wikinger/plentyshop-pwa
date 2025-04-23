<template>
  <div v-if="isAuthorized"   class="kl-shipping-progress pb-2">
    <div class="flex rounded-[1vw] overflow-hidden w-full text-sm font-medium text-white">
      <!-- Text Section -->
      <div class="bg-[#2ea533] flex-1 px-4 py-2 flex items-center">
        <p class="!text-white shipping-text m-0">
          <template v-if="remainingAmount > 0">
            Noch
            <strong class="font-bold text-white">
              {{ formattedRemainingAmount }}
            </strong>
            bis zur Mindestbestellgrenze
          </template>
          <template v-else>
            Mindestbestellgrenze erreicht!
          </template>
        </p>
      </div>

      <!-- Arrow Section -->
      <div class="bg-[#1f6522] px-4 flex items-center justify-center">
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { cartGetters } from '@plentymarkets/shop-api';


const shippingRules = [
  {
    id: 2,
    name: 'B2B',
    minFreeShipping: 100,
  },
  {
    id: 14,
    name: 'Retail 2',
    minFreeShipping: 100,
  },
  {
    id: 18,
    name: 'Vertrieb',
    minFreeShipping: 100,
  },
  {
    id: 10,
    name: 'Retail',
    minFreeShipping: 280,
  },
  {
    id: 13,
    name: 'Mariott',
    minFreeShipping: 200,
  }
];
const { data: userData, isAuthorized } = useCustomer();

const props = defineProps<{
  cart: any;
}>();

const { n } = useI18n();

const FREE_SHIPPING_THRESHOLD = computed(() => {
  const classId = userData?.value?.user?.classId;
  const rule = shippingRules.find(rule => rule.id === classId);
  return rule?.minFreeShipping ?? 100; // fallback to 100 if not found
});

const cartTotal = computed(() => cartGetters.getTotals(props.cart).subtotal || 0);
const remainingAmount = computed(() => Math.max(0, FREE_SHIPPING_THRESHOLD.value - cartTotal.value));
const formattedRemainingAmount = computed(() => n(remainingAmount.value, 'currency'));



const progressBarWidth = computed(() => {
  const percentage = (cartTotal.value / FREE_SHIPPING_THRESHOLD.value) * 100;
  return `${Math.min(100, percentage)}%`;
});

const progressBarColor = computed(() => (remainingAmount.value === 0 ? '#0AB380' : '#f60b45'));
</script>
