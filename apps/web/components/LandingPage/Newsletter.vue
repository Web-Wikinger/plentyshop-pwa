<template>
  <section class="bg-[#ffc426] overflow-hidden">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-end">
      <!-- Left image -->
      <div class="w-full lg:w-1/2 flex justify-center lg:justify-start newsletter-image-wrapper">
        <img
          src="/images/man eating pringle.png"
          alt="Mann isst Chips"
          class="
            max-w-[480px] lg:w-full object-contain
            transition-all duration-400 ease-out
            origin-bottom
            group-hover:rotate-[-5deg]
          "
        />
      </div>

      <!-- Right form -->
      <div class="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col items-center text-center">
        <p class="font-bold text-lg mb-2">Bleibe up‑to‑date mit unserem</p>
        <h2 class="font-extrabold text-4xl lg:text-5xl mb-4">Newsletter</h2>
        <p class="mb-6 text-base lg:text-lg">
          Jetzt zum Newsletter anmelden und von exklusiven Vorteilen profitieren.
        </p>

        <form @submit.prevent="onSubmit" class="space-y-4">
          <input
            v-model="email"
            type="email"
            required
            placeholder="E‑Mail Adresse"
            class="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f60b45]"
          />

          <label class="inline-flex items-center space-x-2">
            <input
              v-model="accepted"
              type="checkbox"
              required
              class="w-5 h-5 border border-gray-300 rounded focus:ring-2 focus:ring-[#f60b45]"
            />
            <span class="text-sm">
              Ich habe die
              <a
                href="/datenschutz"
                class="underline text-gray-800 hover:text-[#f60b45]"
                target="_blank"
                rel="noopener"
              >
                Datenschutzbestimmungen
              </a>
              zur Kenntnis genommen.
            </span>
          </label>

          <button
            type="submit"
            class="mt-4 w-full lg:w-auto px-8 py-4 bg-[#f60b45] text-white font-bold rounded-full disabled:opacity-50 transition"
          >
            Jetzt anmelden
          </button>


          <NuxtTurnstile
            v-if="turnstileSiteKey"
            v-bind="turnstileAttributes"
            ref="turnstileElement"
            v-model="turnstile"
            :options="{ theme: 'light' }"
            class="mt-4"
          />

          <ErrorMessage as="div" name="turnstile" class="text-negative-700 text-left text-sm pt-[0.2rem]" />
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useForm, ErrorMessage } from 'vee-validate';

const { subscribe, loading } = useNewsletter();
const { send } = useNotification();
const { t } = useI18n();
const { errors, meta, defineField, handleSubmit, resetForm } = useForm();
const runtimeConfig = useRuntimeConfig();
const turnstileSiteKey = runtimeConfig.public?.turnstileSiteKey ?? '';
const [turnstile, turnstileAttributes] = defineField('turnstile');
const turnstileElement = ref();

const email = ref('')
const accepted = ref(false)

const canSubmit = computed(() => {
  // simple email regex
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
  return emailValid && accepted.value
})


async function onSubmit() {
  console.log('here')
  if (!canSubmit) {
    alert('Bitte bestätigen Sie die Datenschutzbestimmungen.')
    return
  }

  const response = await subscribe({
    email: email.value || '',
    emailFolder: 1,
    'cf-turnstile-response': turnstile.value,
  });

  if (response) {
    send({
      type: 'positive',
      message: t('newsletter.success'),
    });
    resetForm();
  }

  turnstile.value = '';
  turnstileElement.value?.reset();
}
</script>


<style scoped>
.newsletter-image-wrapper img {
  transition: all 0.4s ease-out;
  transform-origin: bottom;
}
.newsletter-image-wrapper:hover img {
  /* rotate and move down */
  transform: rotate(-5deg) translateY(15px);
}
</style>