<template>
  <form ref="registerForm" @submit.prevent="submitWithRecaptcha"  class="gap-4 p-6">
    <!-- Customer Group -->
    <div class="col-span-2 pb-5">
      <select id="customerGroup" v-model="customerGroup" v-bind="customerGroupAttrs" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
        <option disabled value="">Kundengruppe wählen</option>
        <option v-for="group in customerGroups" :key="group.id" :value="String(group.id)">
          {{ group.name }}
        </option>
      </select>
      <ErrorMessage name="customerGroup" class="text-red-500 text-sm mt-1" />
    </div>

    <!-- Email -->
    <div class="col-span-2 pb-5">
      <input id="email" v-model="email" v-bind="emailAttrs" type="email" placeholder="E-Mail*" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" />
      <ErrorMessage name="contact.options.typeId.value" class="text-red-500 text-sm mt-1" />
    </div>

    <!-- Password Fields -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pb-5">
      <div>
        <input id="password" v-model="password" v-bind="passwordAttrs" type="password" placeholder="Passwort*" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" />
        <ErrorMessage name="contact.password" class="text-red-500 text-sm mt-1" />
      </div>

      <div>
        <input id="repeatPassword" v-model="repeatPassword" v-bind="repeatPasswordAttrs" type="password" placeholder="Passwort wiederholen*" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" />
        <ErrorMessage name="contact.repeatPassword" class="text-red-500 text-sm mt-1" />
      </div>
    </div>

    <!-- Salutation -->
    <div class="col-span-2 pb-5">
      <select id="salutation" v-model="gender" v-bind="genderAttrs" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
        <option value="" disabled>Anrede wählen</option>
        <option value="male">Herr</option>
        <option value="female">Frau</option>
        <option value="diverse">Person</option>
        <option value="company">Firma</option>
      </select>
    </div>

    <!-- Company and VAT ID -->
    <div v-if="gender === 'company'" class="md:col-span-2 flex flex-col md:flex-row gap-4 pb-5">
      <div class="w-full">
        <input id="company" v-model="name1" v-bind="name1Attrs" type="text" placeholder="Firma*" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" />
        <ErrorMessage name="billingAddress.name1" class="text-red-500 text-sm mt-1" />
      </div>
      <div class="w-full">
        <div class="flex rounded-md shadow-sm">
          <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-100 text-sm text-gray-600">DE</span>
          <input id="vatId" v-model="vatNumber" v-bind="vatNumberAttrs" type="text" placeholder="USt.-Nr." class="w-full px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-red-500" />
        </div>
      </div>
    </div>

    <!-- Name and Phone -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pb-5">
      <div>
        <input type="text" placeholder="Vorname" class="w-full px-4 py-2 border border-gray-300 rounded-md" v-model="name2" v-bind="name2Attrs" />
        <ErrorMessage name="billingAddress.name2" class="text-red-500 text-sm mt-1" />
      </div>
      <div>
        <input type="text" placeholder="Nachname" class="w-full px-4 py-2 border border-gray-300 rounded-md" v-model="name3" v-bind="name3Attrs" />
        <ErrorMessage name="billingAddress.name3" class="text-red-500 text-sm mt-1" />
      </div>
      <div>
        <input type="text" placeholder="Telefon" class="w-full px-4 py-2 border border-gray-300 rounded-md" v-model="telephone" v-bind="telephoneAttrs" />
        <ErrorMessage name="billingAddress.telephone" class="text-red-500 text-sm mt-1" />
      </div>
    </div>

    <!-- Straße and Hausnummer -->
    <div class="grid grid-cols-3 gap-4 pb-5">
      <div class="col-span-2">
        <input type="text" placeholder="Straße*" class="w-full px-4 py-2 border border-gray-300 rounded-md" v-model="address1" v-bind="address1Attrs" />
        <ErrorMessage name="billingAddress.address1" class="text-red-500 text-sm mt-1" />
      </div>
      <div>
        <input type="text" placeholder="Nr.*" class="w-full px-4 py-2 border border-gray-300 rounded-md" v-model="address2" v-bind="address2Attrs" />
        <ErrorMessage name="billingAddress.address2" class="text-red-500 text-sm mt-1" />
      </div>
    </div>

    <!-- PLZ / Ort / Land -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pb-5">
      <div>
        <input type="text" placeholder="PLZ*" class="w-full px-4 py-2 border border-gray-300 rounded-md" v-model="postalCode" v-bind="postalCodeAttrs" />
        <ErrorMessage name="billingAddress.postalCode" class="text-red-500 text-sm mt-1" />
      </div>
      <div>
        <input type="text" placeholder="Ort*" class="w-full px-4 py-2 border border-gray-300 rounded-md" v-model="town" v-bind="townAttrs" />
        <ErrorMessage name="billingAddress.town" class="text-red-500 text-sm mt-1" />
      </div>
      <div>
        <select class="w-full px-4 py-2 border border-gray-300 rounded-md" v-model="countryId" v-bind="countryIdAttrs">
          <option disabled value="">Land wählen</option>
          <option value="1">Deutschland</option>
        </select>
        <ErrorMessage name="billingAddress.countryId" class="text-red-500 text-sm mt-1" />
      </div>
    </div>

    <!-- Privacy -->
    <div class="col-span-2">
      <label class="inline-flex items-start gap-2 text-sm">
        <input type="checkbox" v-model="privacyPolicy" v-bind="privacyPolicyAttrs" class="mt-1" />
        <span>
          Hiermit bestätige ich, dass ich die
          <a href="/datenschutz" target="_blank" class="text-red-600 underline">Datenschutzerklärung</a>
          gelesen habe.
        </span>
      </label>
    </div>
    <ErrorMessage name="privacyPolicy" class="text-red-500 text-sm mt-1" />

    <!-- Submit Button -->
    <div class="col-span-2 flex justify-end mt-2">
      <button type="submit" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg flex items-center gap-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <path d="M20 8v6M23 11h-6" />
        </svg>
        Registrieren
      </button>
    </div>
    <ReCaptcha/>
  </form>


  <input type="text" v-model="CustomerId" placeholder="CustomerId" class="w-full px-4 py-2 border border-gray-300 rounded-md"/>
      <button @click="addCustomerGroup()" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg flex items-center gap-2">
        Set Group
      </button>


</template>

<script setup lang="ts">
import { useForm, ErrorMessage } from 'vee-validate';
import { object, string, boolean, number,ref as yupRef } from 'yup';
import { toTypedSchema } from '@vee-validate/yup';
import { onMounted, ref } from 'vue';
import { httpClient } from '@/sdk.client';

declare global {
  interface Window {
    grecaptcha: {
      execute(siteKey: string, options: { action: string }): Promise<string>;
    };
  }
}

const { login, loading } = useCustomer();
const { send } = useNotification();
const { t } = useI18n();
const CustomerId = ref('16304');

const emits = defineEmits(['loggedIn', 'change-view']);
const registerForm = ref<HTMLFormElement | null>(null);
const customerGroups = ref<{ id: number; name: string }[]>([]);
const validationSchema = toTypedSchema(
  object({
    contact: object({
      password: string().required().matches(/^(?=.*[A-Za-z])(?=.*\d)\S{8,}$/, 'Ungültiges Passwort'),
      repeatPassword: string()
        .required('Passwort-Wiederholung erforderlich')
        .oneOf([yupRef('password')], 'Passwörter stimmen nicht überein'),
      referrerId: number().required(),
      typeId: number().required(),
      options: object({
        typeId: object({
          typeId: number().required(),
          subTypeId: number().required(),
          priority: number().required(),
          value: string().email().required()
        })
      })
    }),
    billingAddress: object({
      gender:string().required(),
      name1: string().required(),
      vatNumber: string().nullable(),
      name2: string().required(),
      name3: string().required(),
      telephone: string().required(),
      address1: string().required(),
      address2: string().required(),
      postalCode: string().required(),
      town: string().required(),
      countryId: number().required(),
      contactPerson: string().nullable(),
      stateId:string().nullable(),
    }),
    privacyPolicy: boolean().isTrue().required(),
    recaptcha: string().required(),
    customerGroup: string().required('Kundengruppe erforderlich').notOneOf([""], 'Bitte wählen Sie eine Kundengruppe'),
  })
);
const { defineField, handleSubmit,setFieldValue } = useForm({
  validationSchema,
  initialValues: {
    contact: {
      password: 'Simo@2025',
      repeatPassword : 'Simo@2025',
      referrerId: 1,
      typeId: 1,
      options: {
        typeId: { 
          typeId: 2,
          subTypeId: 4,
          value: "test+1899@web-wikinger.de",
          priority: 0
         }
      }
    },
    billingAddress: {  
      gender: "company",
      contactPerson: "moh",
      name1: 'test company',
      vatNumber: 'DE163594625',
      name2: 'mohamed',
      name3: 'aara',
      telephone: '26326',
      address1: 'wet',
      address2: '24116',
      postalCode: '24116',
      town: 'kiel',
      countryId: 1,
      stateId: "",
    },
    recaptcha: '',
    privacyPolicy : true,
    customerGroup : "32",
  }
});

const [email, emailAttrs] = defineField('contact.options.typeId.value');
const [password, passwordAttrs] = defineField('contact.password');
const [repeatPassword, repeatPasswordAttrs] = defineField('contact.repeatPassword');
const [privacyPolicy, privacyPolicyAttrs] = defineField('privacyPolicy');
const [name1, name1Attrs] = defineField('billingAddress.name1');
const [vatNumber, vatNumberAttrs] = defineField('billingAddress.vatNumber');
const [name2, name2Attrs] = defineField('billingAddress.name2');
const [name3, name3Attrs] = defineField('billingAddress.name3');
const [telephone, telephoneAttrs] = defineField('billingAddress.telephone');
const [address1, address1Attrs] = defineField('billingAddress.address1');
const [address2, address2Attrs] = defineField('billingAddress.address2');
const [postalCode, postalCodeAttrs] = defineField('billingAddress.postalCode');
const [town, townAttrs] = defineField('billingAddress.town');
const [countryId, countryIdAttrs] = defineField('billingAddress.countryId');
const [gender, genderAttrs] = defineField('billingAddress.gender');
const [customerGroup, customerGroupAttrs] = defineField('customerGroup');

const googleRecaptchaApiKey = '6LczjZcpAAAAAPu2LrxCO-OQaaYzj4VTFwdLHoBG';
const baseUrl = 'https://b2b.kelloggs-shop.de/rest';

onMounted(() => {
  customerGroups.value = [
    { id: 31, name: 'Neu-Kunde' },
    { id: 32, name: 'Gastro' },
    { id: 30, name: 'Kiosk' },
    { id: 33, name: 'Tankstelle' },
    { id: 34, name: 'Hotel' }
  ];
});
const onSubmit = handleSubmit(async (values) => {

  try {
    const response = await httpClient(`${baseUrl}/io/customer/`, values, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('✅ Registered customer:', response);
    
    // add customer group
    const response_group = await addCustomerGroup();
    console.log('✅ add Customer Group :', response_group);

    // login
    loginUser();
   
  } catch (err) {
    console.error('❌ Error during registration:', err);
  }
});
const submitWithRecaptcha = async () => {
  if (!registerForm.value) return;

  try {
    const recaptchaToken = await executeReCaptcha(registerForm.value);

    console.log(recaptchaToken)
    // Set the recaptcha value before validation
    await setFieldValue('recaptcha', recaptchaToken);

    // call submit handler (which will validate everything)
    await onSubmit();
  } catch (err) {
    console.error('❌ reCAPTCHA failed:', err);
  }
};

const loginUser = async () => {
  const success = await login(email.value!, password.value!);
  if (success) {
    send({ message: t('auth.login.success'), type: 'positive' });
    emits('loggedIn', false);
  }
};
const addCustomerGroup = async () => {

  const contactId = CustomerId.value,
  customerGroupId = customerGroup.value;

  const apiEndpoint = `WWExtendRegistrationForm/setCustomerGroup?customerGroup=${customerGroupId}&contactId=${contactId}`;

  try {
    const response = await httpClient(`${baseUrl}/${apiEndpoint}`, {}, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response;
  } catch (err) {
    console.error('❌ Error during Add the group:', err);
    return null
  }

}

const executeReCaptcha = (form: HTMLFormElement): Promise<string> => {
  const recaptchaElement = form.querySelector('[data-recaptcha]');

  if (window.grecaptcha && recaptchaElement) {
    return new Promise((resolve, reject) => {
      window.grecaptcha.execute(googleRecaptchaApiKey, { action: 'homepage' })
        .then((response) => {
          if (response) {
            resolve(response);
          } else {
            reject(new Error('No reCAPTCHA response received'));
          }
        })
        .catch((err) => reject(err));
    });
  }

  return Promise.reject(new Error('reCAPTCHA not available'));
}

</script>
