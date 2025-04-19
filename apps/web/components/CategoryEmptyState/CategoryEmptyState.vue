<template>
  <section data-testid="category-empty-state" class="flex flex-col items-center md:mt-16">
    <!--<NuxtImg
      src="/images/something-went-wrong.svg"
      :alt="$t('emptyStateAltText')"
      width="192"
      height="192"
      loading="lazy"
    />-->
    
    <h1 class="mt-8 font-bold w-[50%] text-center text-[15px] lg:text-[32px]">{{ $t('categoryPage.textNotlogged') }}</h1>
    <UiButton :tag="NuxtLink" to="/kelloggs/register" variant="secondary" class="mt-4">
      {{ $t('categoryPage.buttonRegister') }}
    </UiButton>
  </section>
</template>

<script setup lang="ts">
import { paths } from '~/utils/paths';

const localePath = useLocalePath();

const NuxtLink = resolveComponent('NuxtLink');
</script>
