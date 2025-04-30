<template>
  <LandingPageNewsletter />
  <LandingPageOurBrands v-if="landingPages.includes(route.path)"></LandingPageOurBrands>
  <KelloggsOurBrands v-else></KelloggsOurBrands>
  <footer 
    class="bg-white pt-10 pb-6" 
    data-testid="footer" 
  >
    <div 
      class="grid justify-center grid-cols-1 md:grid-cols-3 px-4 md:px-6 pb-10 max-w-screen-xl mx-auto text-center md:text-left"
      data-testid="section-top"
    >
      <div 
        v-for="{ key, subcategories } in categories" 
        :key="key" 
        class="min-w-[25%] xs:min-w-[50%] flex flex-col mb-8 lg:mb-0 items-center"
      >
        <!-- Category Title -->
        <div class="text-lg font-semibold text-gray-900 mb-3">
          {{ $t(`categories.${key}.label`) }}
        </div>

        <!-- Subcategory Links -->
        <ul class="text-gray-600 space-y-2 text-sm">
          <li
            v-for="{ key: subcategoryKey, link } in subcategories"
            :key="subcategoryKey"
            class="inline-flex items-center gap-2 w-full hover:bg-neutral-100 active:bg-neutral-200 cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:relative focus-visible:z-10 px-4 py-2 py-1 !bg-transparent"
          >
            <span class="flex flex-col w-full min-w-0 items-center">
              <SfLink
                :tag="NuxtLink"
                class="no-underline hover:underline hover:text-gray-800"
                variant="secondary"
                :to="localePath(link)"
              >
                {{ $t(`categories.${key}.subcategories.${subcategoryKey}`) }}
              </SfLink>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </footer>


  <LandingPageUnderFooter />

</template>

<script setup lang="ts">
import { SfLink, SfListItem } from '@storefront-ui/vue';
import { categories } from '~/mocks';
import { watch } from 'vue';
const route = useRoute();
const landingPages = ['/hotellerie', '/bars-gastronomie', '/kiosk-getrankehandel'];
const { data: user, isAuthorized } = useCustomer();

const storename: string = useRuntimeConfig().public.storename;


const localePath = useLocalePath();
const NuxtLink = resolveComponent('NuxtLink');


watch(isAuthorized, async (newVal, oldVal) => {
  try {

    // if loggout remove the session
    if (!newVal) {
          const response = await fetch('/rest/io/customer/logout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
          });

          if (!response.ok) {
            throw new Error(`Logout failed with status ${response.status}`);
          }

          console.log('io User logged out');
    }else{
            // Get the io session
        const response = await fetch('/rest/io/customer');
        const sessionData = await response.json();
        console.log('io session:', sessionData);
        
    }
  } catch (error) {
    console.error('Error in watch isAuthorized:', error);
  }
});



</script>
