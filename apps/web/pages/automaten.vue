<template>
    <div class="min-h-screen">
        <!-- Pringles Promotion Section -->
        <div class="relative overflow-hidden lg:max-h-[560px] bg-[#f60c45] lg:px-[20%] lg:py-[7%]">
            <img 
                v-if="isMobile"
                src="/images/Interbad_Mobile_Top.webp"
                alt="Pringles Vending Machine"
                class="mb-[-15%] mt-[-10%]"
            />
            <div class="mx-0 " :class="{ 'p-[35px]': isMobile }">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <!-- Left Side with Vending Machine -->
                    
                    <div class="relative max-w-[313px] flex">
                        <div class="flex-1">
                            <div 
                                class="inline-block bg-[#FFD700] text-[#E31837] font-bold px-4 py-2 rounded-none mb-4"
                                style="background-color: #fac427; color: #9f1148; font-size: 32px; font-weight: 800;"
                            >
                                LEER GEDREHT?
                            </div>
                            <h2 class="text-4xl md:text-6xl font-bold mb-4 text-white font-bold" style="line-height: 1.2;">
                                Jetzt Pringles 40g<br/>nachbestellen
                            </h2>
                            <p class="mb-6 text-white font-[800] w-max lg:w-[630px] text-[18px] lg:text-[32px] leading-[1.2]">
                                Profitiere von keinem Mindestbestellwert<br/>
                                und kostenloser Lieferung ab 100€.
                            </p>
                            <a 
                                href="#" 
                                class="inline-block bg-white text-black lg:text-[#E31837] font-[800] px-8 py-2 rounded-[25px] hover:bg-opacity-90 transition-all text-center"
                                style="font-weight: 800;"
                            >
                                Jetzt registrieren und B2B Kunde werden
                            </a>
                        </div>
                    </div>
                    <!-- Right Side with Content -->
                    <div class="text-white relative z-10">
                        
                    </div>
                </div>
            </div>
            
            <img 
                v-if="!isMobile"
                src="/images/Automat.webp"
                alt="Pringles Vending Machine"
                class="ml-0  flex-1 w-[313px] lg:absolute left-[-5%] top-[-1%]"
            />
            <img 
                v-else
                src="/images/Interbad_Mobile_Bottom_Cropped.webp"
                alt="Pringles Vending Machine"
                class=""
            />
            <!-- Floating Pringles Cans -->
            <div class="absolute top-[5%] right-[-5%] w-1/2 h-full pointer-events-none">
                <img 
                    v-if="!isMobile"
                    src="/images/Interbad_Pringles.webp"
                    alt="Pringles Cans"
                    class="object-contain object-right"
                    style="width: 937px; max-width: 937px; position: absolute; right: -8%; top: -8%;"
                />
            </div>

            <!-- Decorative Chips -->
            <div class="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div class="chips-animation">
                    <div class="chip" style="top: 10%; left: 5%;"></div>
                    <div class="chip" style="top: 30%; right: 15%;"></div>
                    <div class="chip" style="bottom: 20%; left: 25%;"></div>
                    <div class="chip" style="top: 50%; right: 25%;"></div>
                </div>
            </div>
        </div>

        <LandingPagePringlesProductGrid />

        <!-- B2B Portal Section -->
        <div class="flex flex-col items-center justify-center px-4 py-12" style="background-color: #f60c45;">
            <div class="text-white lg:text-center mb-12">
                <h2 class="text-xl mb-2" style="font-size: 18px; font-weight: 800;">Unser B2B-Portal</h2>
                <h1 class="lg:text-[56px] text-[38px] font-[800] mb-4 leading-[1]">Du bist bereits<br/>Businesspartner?</h1>
                <p class="text-xl text-white" style="font-size: 18px; font-weight: 400;">Nutze exklusive Vorteile für Geschäftspartner!</p>
            </div>

            <!-- Features Section -->
            <div v-if="isMobile" class="lg:grid lg:grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12" style="max-width: 650px;">
                <div class="text-white lg:text-center flex lg:w-[190px] lg:block lg:block" >
                    <div class="flex lg:justify-center mb-4 mr-[10px]">
                        <img src="/images/icon-einfach-flexible@2x.webp" class="w-[24px] h-[24px] lg:w-[48px] lg:h-[48px]">
                    </div>
                    <p class="text-white ">Aktuelle Kellogg's und Pringles Produkte</p>
                </div>
                <div class="text-white lg:text-center flex lg:w-[190px] lg:block">
                    <div class="flex lg:justify-center mb-4 mr-[10px]">
                        <img src="/images/icon-exklusive@2x.webp" class="w-[24px] h-[24px] lg:w-[48px] lg:h-[48px]" >
                    </div>
                    <p class="text-white ">Exklusive Rabatt- Aktionen</p>
                </div>
                <div class="text-white lg:text-center flex lg:w-[190px] lg:block">
                    <div class="flex lg:justify-center mb-4 mr-[10px]">
                        <img src="/images/icon-aktuell@2x.webp" class="w-[24px] h-[24px] lg:w-[48px] lg:h-[48px]">
                    </div>
                    <p class="text-white ">Einfache & flexible Bestellmöglichkeiten</p>
                </div>
            </div>

            <!-- Features Section -->
            <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12" style="max-width: 650px;">
                <div class="text-white lg:text-center" style="width: 190px;">
                    <div class="flex lg:justify-center mb-4">
                        <img src="/images/icon-einfach-flexible@2x.webp" class="w-[24px] h-[24px] lg:w-[48px] lg:h-[48px]">
                    </div>
                    <p class="text-white">Aktuelle Kellogg's und<br/>Pringles Produkte</p>
                </div>
                <div class="text-white lg:text-center">
                    <div class="flex lg:justify-center mb-4">
                        <img src="/images/icon-exklusive@2x.webp" class="w-[24px] h-[24px] lg:w-[48px] lg:h-[48px]" >
                    </div>
                    <p class="text-white">Exklusive Rabatt-<br/>Aktionen</p>
                </div>
                <div class="text-white lg:text-center">
                    <div class="flex lg:justify-center mb-4">
                        <img src="/images/icon-aktuell@2x.webp" class="w-[24px] h-[24px] lg:w-[48px] lg:h-[48px]">
                    </div>
                    <p class="text-white">Einfache & flexible<br/>Bestellmöglichkeiten</p>
                </div>
            </div>


            <!-- Login Form -->
            <div class="w-full mx-auto" style="max-width: 298px;">
                <form @submit.prevent="handleLogin" class="space-y-4">
                    <!-- Email Input -->
                    <div class="relative">
                        <input 
                            v-model="email"
                            type="email"
                            id="email123"
                            required
                            class="w-full h-[35px] px-3 bg-white text-[#595957] border-none focus:outline-none pt-4"
                            style="font-size: 1em; line-height: 1.2em;"
                        />
                        <label 
                            for="email123" 
                            class="absolute left-0 pointer-events-none"
                            style="
                                font-size: .65em;
                                line-height: 1em;
                                color: #adb5bd;
                                background: transparent;
                                padding: .35rem 1rem 0;
                                font-weight: 600;
                                text-transform: uppercase;
                                letter-spacing: .1px;
                                white-space: nowrap;
                                top: 0;
                            "
                        >
                            E-Mail*
                        </label>
                        <span v-if="emailError" class="text-sm text-white mt-1 block">
                            Bitte geben Sie eine gültige E-Mail-Adresse an.
                        </span>
                    </div>

                    <!-- Password Input -->
                    <div class="relative">
                        <input 
                            v-model="password"
                            type="password"
                            id="password"
                            required
                            class="w-full h-[35px] px-3 bg-white text-[#595957] border-none focus:outline-none pt-4"
                            style="font-size: 1em; line-height: 1.2em;"
                        />
                        <label 
                            for="password" 
                            class="absolute left-0 pointer-events-none"
                            style="
                                font-size: .65em;
                                line-height: 1em;
                                color: #adb5bd;
                                background-color: transparent;
                                padding: .35rem 1rem 0;
                                font-weight: 600;
                                text-transform: uppercase;
                                letter-spacing: .1px;
                                white-space: nowrap;
                                top: 0;
                            "
                        >
                            Passwort*
                        </label>
                    </div>

                    <div class="flex justify-between items-center mt-6" style="gap: 1rem;">
                        <a 
                            href="#" 
                            class="hover:underline" 
                            style="font-size: 80%; color: #d0033d; font-weight: 400;"
                        >
                            Passwort vergessen?
                        </a>
                        <button 
                            type="submit"
                            class="flex items-center bg-[#d0033d] text-white hover:bg-opacity-90 transition-all px-4 py-1"
                            style="font-weight: 800; font-size: 1em;"
                            :disabled="loading"
                        >
                            <span v-if="!loading">anmelden</span>
                            <SfLoaderCircular v-else class="flex justify-center items-center" size="base" />
                            <span v-if="!loading" class="ml-2">
                                <SfIconPerson />
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <LandingPagePresentation imageSrc="/images/Pringles_Automaten_Black_Red.webp" 
            SubTitle="DEN DREH RAUS" Title="Der Drehautomat für PRINGLES® 40 g" 
            Description="Die Snackinsel für alle und jede Gelegenheit: signalrot oder schwarz als Drehautomat, gefüllt mit 49 Pringles 40g Dosen, oder als Thekenautomat mit 28 40g Dosen, ein kultiger Hingucker und Umsatzbringer ohne wesentlichen Personal- oder Zeitaufwand. Das Handling ist easy: einfach Sorte aussuchen, Geld einwerfen, drehen und snacken."
            ButtonText="Jetzt weitere Pringles Automaten nachbestellen"
            buttonLink="https://kelloggs-shop.de/pages/pringles-pos"
        />
    </div>
</template>

<script setup lang="ts">
import {
  SfIconPerson,
  SfLoaderCircular
} from '@storefront-ui/vue';
import { useCustomer } from '~/composables/useCustomer';
import { useI18n } from 'vue-i18n';

definePageMeta({
  layout: 'default'
});

const { login, loading } = useCustomer();
const { t } = useI18n();

const email = ref('');
const password = ref('');
const emailError = ref(false);

const handleLogin = async () => {
  try {
    emailError.value = false;
    const success = await login(email.value, password.value);
    if (success) {
      // Redirect to dashboard or home page after successful login
      navigateTo('/');
    }
  } catch (error) {
    emailError.value = true;
    console.error('Login failed:', error);
  }
};

const viewport = useViewport();
const isMobile = computed(() => viewport.isLessThan('lg'));
</script>

<style scoped>
input {
  font-family: inherit;
  -webkit-font-smoothing: antialiased;
}

input:focus {
  outline: none;
  box-shadow: none;
}
</style>
