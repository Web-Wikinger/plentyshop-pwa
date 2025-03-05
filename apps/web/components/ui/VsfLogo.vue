<template>
  <div class="flex items-center max-w-[170px] lg:max-w-[200px]">
    <picture>
      <NuxtImg :src="imagePath" alt="Kellogg's Logo" class="w-100" width="150" height="40" preload />
    </picture>
    <span class="ml-2 lg:ml-4 g-24 lg:g-32 text-primary-500">B2B</span>
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const storeName = runtimeConfig.public.storeName;
const imageExtension = useRuntimeConfig().public.headerLogo.split('.').pop();
const imagePath = '/images/kelloggs-logo.' + imageExtension;
const logo = ref<HTMLImageElement | null>(null);
const imgWidth = ref<string>('');
const imgHeight = ref<string>('');
onMounted(() => {
  if (logo.value) {
    imgWidth.value = logo.value.clientWidth + '';
    imgHeight.value = logo.value.clientHeight + '';
  }
});
</script>
