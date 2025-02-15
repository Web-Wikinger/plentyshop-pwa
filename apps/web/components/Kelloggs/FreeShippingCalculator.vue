<template>
  <div class="kl-shipping-progress pb-2">
    <p class="shipping-text">
      <template v-if="remainingAmount > 0">
        Noch <strong style="color: #f60b45;">{{ formattedRemainingAmount }}</strong> zum kostenlosen Versand
      </template>
      <template v-else>
        Kostenloser Versand <strong>freigeschaltet!</strong>
      </template>
    </p>

    <div class="progress-bar-container">
      <div class="progress-bar" :style="{ width: progressBarWidth, backgroundColor: progressBarColor }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { cartGetters } from '@plentymarkets/shop-api';

const props = defineProps<{
  cart: any;
}>();

const { n } = useI18n();
const FREE_SHIPPING_THRESHOLD = 100;

const cartTotal = computed(() => cartGetters.getTotals(props.cart).subtotal || 0);
const remainingAmount = computed(() => Math.max(0, FREE_SHIPPING_THRESHOLD - cartTotal.value));
const formattedRemainingAmount = computed(() => n(remainingAmount.value, 'currency'));

const progressBarWidth = computed(() => {
  const percentage = (cartTotal.value / FREE_SHIPPING_THRESHOLD) * 100;
  return `${Math.min(100, percentage)}%`;
});

const progressBarColor = computed(() => (remainingAmount.value === 0 ? '#0AB380' : '#f60b45'));
</script>

<style scoped>
.kl-shipping-progress {
  margin-bottom: 1rem;
}

.shipping-text {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
}

.progress-bar-container {
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 5px;
  height: 12px;
  overflow: hidden;
}

.progress-bar {
  display: block;
  height: 100%;
  transition: width 0.5s ease;
}
</style>