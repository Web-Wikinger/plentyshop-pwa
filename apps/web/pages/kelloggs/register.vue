<template>
  <article class="">
    <!-- Header Section -->
    <section class="text-center py-10">
      <p class="g-16 md:g-24">Kellogg's Businesspartner werden und</p>
      <h1 class="g-32 md:g-32 lg:g-40 lg:g-56">Zugang zum B2B-Portal erhalten</h1>
    </section>

    <!-- Registration Steps -->
    <section class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
      <div v-for="(step, index) in steps" :key="index" class="flex flex-col items-center text-center">
        <img :src="step.icon" alt="icon" class="w-24 h-24 object-contain" />
        <p class="text-gray-900 mt-2 text-lg font-bold">{{ step.text }}</p>
      </div>
    </section>

    <!-- Business Partner Login -->
    <section class="bg-primary-500 text-white text-center py-14 mt-10">
      <p class="g-32 lg:g-40 text-white">Sie sind bereits Businesspartner?</p>
      <div class="flex justify-center mt-6 mx-auto">
        <div class="text-gray-900 rounded-lg shadow-lg p-4 bg-white p-12">
          <LoginComponent @logged-in="navigateAfterAuth" :is-soft-login="true" />
        </div>
      </div>
    </section>

    <section class="flex flex-col lg:flex-row bg-[#3cb37f] px-4 py-6 pb-24">

      <!-- Business Partner Registration -->
      <section class="text-white w-full lg:w-1/2 pr-4 pt-[50px]">
        <h1 class="g-32 lg:g-40">Jetzt als Kellogg's Businesspartner im Online-Shop registrieren</h1>
        <p class="g-24 mt-8 text-white">Sichern Sie sich exklusive Businesspartner-Vorteile!</p>
        <div class="mt-8 mx-auto text-left">
          <ul class="mt-4">
            <li  v-for="(benefit, index) in benefits" :key="index"
                class="bg-[#3cb37f] py-1 rounded-r-2xl flex items-center">
              <svg class="h-8 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.4571 9.45711L11 15.9142L6.79289 11.7071L8.20711 10.2929L11 13.0858L16.0429 8.04289L17.4571 9.45711Z">
                </path>
              </svg>
              <h3 class="text-[20px] text-white">{{ benefit }}</h3>
            </li>
          </ul>
        </div>
      </section>

      <!-- Registration Form -->
       <!--<section class="bg-white shadow-lg p-4 lg:p-10 rounded-lg mt-10 mr-auto max-w-4xl">
          <Register :show-benefits="false" :changeable-view="false" @registered="navigateAfterAuth" />
      </section> --> 
      <section class="bg-white shadow-lg p-4 lg:p-10 rounded-lg w-full lg:w-1/2 rounded-xl shadow-md">
        <B2bRegisterForm />
      </section>
    </section>

  </article>
</template>

<script setup>
import { ref } from 'vue';

definePageMeta({
  middleware: ['logged-guard'],
});

const router = useRouter();
const localePath = useLocalePath();
const isLogin = ref(true);

const navigateAfterAuth = (skipReload) => {
  const redirectUrl = router.currentRoute.value.query.redirect;
  if (redirectUrl && !skipReload) {
    window.location.href = localePath(redirectUrl);
  }
};

// Steps for registration process
const steps = ref([
  { icon: "/images/kelloggs/form/Form.svg", text: "Formular ausfüllen" },
  { icon: "/images/kelloggs/form/Check.svg", text: "Freischaltung und Bestätigungs Mail" },
  { icon: "/images/kelloggs/form/Basket.svg", text: "Über das Portal einkaufen" }
]);

// Benefits of registration
const benefits = ref([
  "Preisvorteil im Vergleich zum Großhandel",
  "Topaktuelles Portfolio",
  "Einfache und flexible Bestellmöglichkeiten",
  "Kostenlose Lieferung ab 100€",
  "Kein Mindestbestellwert",
  "Preisstaffelungen möglich"
]);

// Login form data
const loginData = ref({ email: "", password: "" });
const login = () => alert("Login submitted");

// Registration form data
const registerData = ref({ customerGroup: "", email: "", password: "", passwordConfirm: "", termsAccepted: false });
const register = () => alert("Registration submitted");
</script>