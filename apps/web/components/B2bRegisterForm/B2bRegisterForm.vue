<template>

</template>

<script setup lang="ts">
// import { useForm, ErrorMessage } from 'vee-validate';
// import { object, string, boolean, number,ref as yupRef } from 'yup';
// import { toTypedSchema } from '@vee-validate/yup';
// import { onMounted, ref,watch } from 'vue';
// import { httpClient } from '@/sdk.client';
// import { SfLoaderCircular } from '@storefront-ui/vue';

// const { login } = useCustomer();
// const { send } = useNotification();
// const { t } = useI18n();
// const loading = ref(false);
// const CustomerId = ref('16304');
// const recaptchaRef = ref<{
//   executeReCaptcha: (form: HTMLFormElement) => Promise<string>
// } | null>(null)
// const emits = defineEmits(['loggedIn', 'change-view']);
// const registerForm = ref<HTMLFormElement | null>(null);
// const customerGroups = ref<{ id: number; name: string }[]>([]);
// const validationSchema = toTypedSchema(
//   object({
//     contact: object({
//       password: string().required().matches(/^(?=.*[A-Za-z])(?=.*\d)\S{8,}$/, 'Ungültiges Passwort'),
//       repeatPassword: string()
//         .required('Passwort-Wiederholung erforderlich')
//         .oneOf([yupRef('password')], 'Passwörter stimmen nicht überein'),
//       referrerId: number().required(),
//       typeId: number().required(),
//       options: object({
//         typeId: object({
//           typeId: number().required(),
//           subTypeId: number().required(),
//           priority: number().required(),
//           value: string().email().required('Email ist erforderlich')
//         })
//       })
//     }),
//     billingAddress: object({
//       gender:string().required(),
//       name1: string().when('gender', {
//         is: 'company',
//         then: schema => schema.required('Firma ist erforderlich für Firmenkunden'),
//         otherwise: schema => schema.notRequired().nullable()
//       }),
//       vatNumber: string().nullable(),
//       name2: string().required('Vorname ist erforderlich'),
//       name3: string().required('Nachname ist erforderlich'),
//       telephone: string().notRequired(),
//       address1: string().required('Straße ist erforderlich'),
//       address2: string().required('Nr. ist erforderlich'),
//       postalCode: string().required('PLZ ist erforderlich'),
//       town: string().required('Ort ist erforderlich'),
//       countryId: string().required('Land ist erforderlich'),
//       contactPerson: string().nullable(),
//       stateId:string().nullable(),
//     }),
//     privacyPolicy: boolean().isTrue().required('Bitte akzeptieren Sie die Daten­schutz­erklärung.'),
//     recaptcha: string().notRequired(),
//     customerGroup: string().required('Kundengruppe ist erforderlich').notOneOf([""], 'Bitte wählen Sie eine Kundengruppe'),
//   })
// );

// let initialValues =  {
//     contact: {
//       password: 'Simo@2025',
//       repeatPassword : 'Simo@2025',
//       referrerId: 1,
//       typeId: 1,
//       options: {
//         typeId: { 
//           typeId: 2,
//           subTypeId: 4,
//           value: "test+7894561@web-wikinger.de",
//           priority: 0
//          }
//       }
//     },
//     billingAddress: {  
//       gender: "company",
//       contactPerson: "",
//       name1: 'Firma x GMBH',
//       vatNumber: 'DE163594625',
//       name2: 'John Test',
//       name3: 'Rock',
//       telephone: '',
//       address1: 'Berlinerstraße',
//       address2: '123',
//       postalCode: '24116',
//       town: 'Berlin',
//       countryId: "1",
//       stateId: "",
//     },
//     //recaptcha: '',
//     customerGroup : "32",
// }

// initialValues =  {
//     contact: {
//       password: '',
//       repeatPassword : '',
//       referrerId: 1,
//       typeId: 1,
//       options: {
//         typeId: { 
//           typeId: 2,
//           subTypeId: 4,
//           value: "",
//           priority: 0
//          }
//       }
//     },
//     billingAddress: {  
//       gender: "",
//       contactPerson: "",
//       name1: '',
//       vatNumber: '',
//       name2: '',
//       name3: '',
//       telephone: '',
//       address1: '',
//       address2: '',
//       postalCode: '',
//       town: '',
//       countryId: "",
//       stateId: "",
//     },
//     //recaptcha: '',
//     customerGroup : "",
// }

// const { values,defineField, handleSubmit,setFieldValue } = useForm({
//   validationSchema,
//   initialValues: initialValues
// });

// const [email, emailAttrs] = defineField('contact.options.typeId.value');
// const [password, passwordAttrs] = defineField('contact.password');
// const [repeatPassword, repeatPasswordAttrs] = defineField('contact.repeatPassword');
// const [privacyPolicy, privacyPolicyAttrs] = defineField('privacyPolicy');
// const [name1, name1Attrs] = defineField('billingAddress.name1');
// const [vatNumber, vatNumberAttrs] = defineField('billingAddress.vatNumber');
// const [name2, name2Attrs] = defineField('billingAddress.name2');
// const [name3, name3Attrs] = defineField('billingAddress.name3');
// const [telephone, telephoneAttrs] = defineField('billingAddress.telephone');
// const [address1, address1Attrs] = defineField('billingAddress.address1');
// const [address2, address2Attrs] = defineField('billingAddress.address2');
// const [postalCode, postalCodeAttrs] = defineField('billingAddress.postalCode');
// const [town, townAttrs] = defineField('billingAddress.town');
// const [countryId, countryIdAttrs] = defineField('billingAddress.countryId');
// const [gender, genderAttrs] = defineField('billingAddress.gender');
// const [customerGroup, customerGroupAttrs] = defineField('customerGroup');


// onMounted(() => {
//   customerGroups.value = [
//   { id: 30, name: 'Kiosk' },
//   { id: 32, name: 'Gastronomie' },
//   { id: 34, name: 'Hotel' },
//   { id: 36, name: 'Retailer' },
//   { id: 43, name: 'Büro' },
//   { id: 44, name: 'Eventagentur' },
//   { id: 45, name: 'Freizeitgastronomie' },
//   { id: 46, name: 'Getränkemarkt' },
//   { id: 48, name: 'Verein' },
//   { id: 56, name: 'Vending' }
// ]
// });

// watch(
//   () => values.billingAddress?.gender,
//   (newGender) => {
//     if (newGender !== 'company') {
//       setFieldValue('billingAddress.name1', '')
//     }
//   }
// )

// const submitWithRecaptcha = async () => {

//   if (!recaptchaRef.value || !registerForm.value) return;
  
//   try {
//       loading.value = true;
//      const recaptchaToken = await recaptchaRef.value.executeReCaptcha(registerForm.value)
//      console.log('✅ Got reCAPTCHA token:', recaptchaToken)
//     // Set the recaptcha value before validation
//      await setFieldValue('recaptcha', recaptchaToken);

//      // call submit handler (which will validate everything)
//      await onSubmit();

//      loading.value = false;

//   } catch (err) {
//     loading.value = false;
//     console.error('❌ reCAPTCHA failed:', err);
//   } 

  
// };
// const onSubmit = handleSubmit(async (values) => {

//        try {
//         let response = await httpClient(`/rest/io/customer/`, values, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         });

//         if(response?.events?.AfterAccountAuthentication?.isSuccess){
//               //console.log('✅ Registered customer:', response);
//               CustomerId.value =  response.data.id
//             // add customer group
//               response = await addCustomerGroup();

//               if(response.success){
//                 //console.log('✅ add Customer Group :', response);
//                 loginUser();
            
//               }
//         }else{
//             send({
//             message: 'Error during registration',
//             type: 'negative',
//           });
//         }

//        } catch (err) {
//         console.error('❌ Error during registration:', err);
//         send({
//             message: 'An error occurs during registration',
//             type: 'negative',
//           });
//       }
// });
// const addCustomerGroup = async () => {

//   const contactId = CustomerId.value,
//   customerGroupId = customerGroup.value;

//   const apiEndpoint = `/rest/WWExtendRegistrationForm/setCustomerGroup?customerGroup=${customerGroupId}&contactId=${contactId}`;

//   try {
//     const response = await httpClient(apiEndpoint, {}, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     return response;
//   } catch (err) {
//     console.error('❌ Error during Add the group:', err);
//     return null
//   }

// }
// const loginUser = async () => {
//   const success = await login(email.value!, password.value!);
//   if (success) {
//     send({
//       message: t('auth.signup.success'),
//       type: 'positive',
//     });
//     emits('loggedIn', false);
//   }
// };
</script>
