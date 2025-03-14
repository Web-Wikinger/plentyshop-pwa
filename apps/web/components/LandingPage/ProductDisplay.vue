<template>
  <div class="flex flex-wrap justify-center gap-6 p-6">
    <LandingPageProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  background: string;
}

const products = ref<Product[]>([
  {
    id: 1,
    name: 'Pringles Original - 40g',
    price: '6,72 EUR',
    image: '/images/pringles-original.png',
    background: 'bg-red-500',
  },
  {
    id: 2,
    name: 'Pringles Sour Cream & Onion - 40g',
    price: '6,72 EUR',
    image: '/images/pringles-sour-cream.png',
    background: 'bg-green-500',
  },
  {
    id: 3,
    name: 'Pringles Sweet Paprika - 40g',
    price: '6,72 EUR',
    image: '/images/pringles-paprika.png',
    background: 'bg-orange-500',
  },
  {
    id: 4,
    name: 'Pringles Hot & Spicy - 40g',
    price: '6,72 EUR',
    image: '/images/pringles-hot-spicy.png',
    background: 'bg-gray-700',
  },
]);
</script>
