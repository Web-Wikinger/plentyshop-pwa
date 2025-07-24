<template>
  <NuxtLazyHydrate when-visible>
    <template v-if="isUserOrder && orderData">
      <ConfirmationPageContent :order="orderData" />
    </template>
  </NuxtLazyHydrate>
  <NuxtLazyHydrate when-visible>
    <template v-if="error">
      <SoftLogin :error="error" @submit="loadOrder" />
    </template>
  </NuxtLazyHydrate>
</template>

<script setup lang="ts">
import { ref, computed, type Ref } from 'vue'
import { useRuntimeConfig } from '#app'
import { useRoute } from 'vue-router'

const config = useRuntimeConfig()
const route = useRoute()
const { data: sessionData } = useCustomer()

const orderId = route.params.orderId as string
const apiEndpoint = config.public.apiEndpoint

const orderData: Ref<any> = ref(null)
const error = ref<any>(null)

const loadOrder = async () => {
  try {
    const response: any = await $fetch(`${apiEndpoint}/rest/confirmation-details?orderId=${orderId}`)
    orderData.value = response.data
    error.value = null
  } catch (err) {
    error.value = err
    orderData.value = null
  }
}

await loadOrder()

const userContactId = computed(() => sessionData.value?.user?.id)
const isUserOrder = computed(() => {
  const relations = orderData.value?.order?.relations || []
  const result = Array.isArray(relations) && relations.some(
    (rel: any) => rel.referenceType === 'contact' && rel.referenceId === userContactId.value
  )
  return result;
})
</script>
