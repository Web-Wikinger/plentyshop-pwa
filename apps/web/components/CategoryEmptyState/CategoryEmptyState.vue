<template>
  <section data-testid="category-empty-state" class="flex flex-col items-center md:mt-16">
    <!--<NuxtImg
      src="/images/something-went-wrong.svg"
      :alt="$t('emptyStateAltText')"
      width="192"
      height="192"
      loading="lazy"
    />-->
    
    <p class="mt-8 font-medium">{{ $t('categoryPage.textNotlogged') }}</p>
    <UiButton :tag="NuxtLink" :to="localePath(paths.category)" variant="secondary" class="mt-4">
      {{ $t('categoryPage.buttonRegister') }}
    </UiButton>
  </section>
</template>

<script setup lang="ts">
import { paths } from '~/utils/paths';

const localePath = useLocalePath();

const NuxtLink = resolveComponent('NuxtLink');
</script>
