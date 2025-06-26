<template>
  <NuxtLayout name="auth" :heading="$t('auth.resetPassword.heading')">
    <div v-if="!requestSent">
      <form class="pb-4 md:p-6 mt-10 md:border md:border-neutral-200 rounded-md" @submit.prevent="resetPassword">
        <p class="mb-6">
          {{ $t('auth.resetPassword.info2') }}
        </p>
        <label class="mb-4">
          <UiFormLabel>{{ $t('auth.resetPassword.email') }} {{ $t('form.required') }}</UiFormLabel>
          <SfInput v-model="customerEmail" name="email" type="email" required />
        </label>
        <label class="mt-4">
          <UiFormLabel>{{$t('auth.resetPassword.newPassword')}} {{ $t('form.required') }}</UiFormLabel>
          <SfInput v-model="customerPassword" name="password" type="password" required />
        </label>
        <label class="mt-4">
          <UiFormLabel>PLZ {{ $t('form.required') }}</UiFormLabel>
          <SfInput v-model="customerPLZ" name="plz" type="text" required />
        </label>
        <div class="mt-6 flex flex-col-reverse md:flex-row gap-4">
          <UiButton :tag="NuxtLink" :to="localePath(paths.authLogin)" class="flex-1" variant="tertiary">
            {{ $t('auth.resetPassword.backToLogin') }}
          </UiButton>
          <UiButton type="submit" class="flex-1"> {{ $t('auth.resetPassword.continue') }} </UiButton>
        </div>
      </form>
    </div>
    <div v-else class="p-6 text-center">
      <p>{{ $t('auth.resetPassword.processing') }}</p>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { SfInput } from '@storefront-ui/vue';
import { paths } from '~/utils/paths';
import axios from 'axios';

const localePath = useLocalePath();

definePageMeta({
  layout: false,
});

const { t } = useI18n();
const { setPageMeta } = usePageMeta();

const icon = 'page';
setPageMeta(t('auth.resetPassword.heading'), icon);

const customerEmail = ref('');
const customerPassword = ref('');
const customerPLZ = ref('');
const errorMessage = ref('');
const requestSent = ref(false);

const resetPassword = async () => {
  errorMessage.value = '';
  try {
    await axios.post('/rest/passwordReset/reset', {
      email: customerEmail.value,
      password: customerPassword.value,
      PLZ: customerPLZ.value,
    });
    requestSent.value = true;
  } catch (error) {
    errorMessage.value = t('auth.resetPassword.error') || 'An error occurred. Please try again.';
  }
};
const NuxtLink = resolveComponent('NuxtLink');
</script>
