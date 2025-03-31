<template>
  <div class="w-full bg-white p-6 rounded-lg shadow-md">
    <!-- Tabs Navigation -->
    <ul class="flex justify-between border-b mb-4">
        <li v-if="isAuthenticated" class="bg-gray-100 px-6 py-3" :class=" { 'border-t border-x': activeTab === 'CreateCustomer' }">
          <a 
            class="cursor-pointer px-4 py-2" 
            :class="{ 'border-blue-500 font-semibold': activeTab === 'CreateCustomer' }" 
            @click="activeTab = 'CreateCustomer'"
          >
            Neukunden anlegen
          </a>
        </li>
        <li v-if="!isAuthenticated" class="bg-gray-100 px-6 py-3" :class=" { 'border-t border-x': activeTab === 'login' }">
          <a 
            class="text-lg font-semibold text-gray-700" 
            @click="activeTab = 'login'"
          >
            Einloggen
          </a>
        </li>

        <li v-if="isAuthenticated" class="bg-gray-100 px-6 py-3" :class=" { 'border-t border-x': activeTab === 'customerEntries' }">
          <a 
            class="cursor-pointer px-4 py-2" 
            :class="{ 'border-blue-500 font-semibold': activeTab === 'customerEntries' }" 
            @click="fetchCustomerEntries"
          >
            Kundenzugang
          </a>
        </li>
        <li v-if="isAuthenticated" class="bg-gray-100 px-6 py-3" :class=" { 'border-t border-x': activeTab === 'changePassword' }">
          <a 
            class="cursor-pointer px-4 py-2" 
            :class="{ 'border-blue-500 font-semibold': activeTab === 'changePassword' }" 
            @click="activeTab = 'changePassword'"
          >
            Passwort ändern
          </a>
        </li>
        <li v-if="isAuthenticated" class="bg-gray-100 px-6 py-3">
          <a class="cursor-pointer px-4 py-2 text-red-500" @click.prevent="logoutVertriebUser">
            Logout
          </a>
        </li>
      </ul>
    <!-- Tabs Content -->
    <div class="tab-content mt-3">

      <!-- Second Tab -->
      <div v-if="isAuthenticated && activeTab === 'CreateCustomer'" class="flex justify-center items-center">
        <div class="w-full bg-[#d0033d] text-white p-6 rounded-lg shadow-md">
          <h3 class="text-center text-xl font-bold mb-6">B2B Kundendaten erfassen</h3>

          <form @submit.prevent="registerCustomer" ref="CustomerRegistrationForm" class="space-y-4">
            <!-- Firmenname -->
            <div>
              <label class="block text-sm font-medium">Firmenname*</label>
              <input type="text" v-model="customer.firmName" @input="validateField('firmName')" required
                    class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-black" />
              <small v-if="errors.firmName" class="text-yellow-300">{{ errors.firmName }}</small>
            </div>

            <!-- Ansprechpartner -->
            <div>
              <label class="block text-sm font-medium">Ansprechpartner*</label>
              <input type="text" v-model="customer.contactPerson" @input="validateField('contactPerson')" required
                    class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-black" />
              <small v-if="errors.contactPerson" class="text-yellow-300">{{ errors.contactPerson }}</small>
            </div>

            <!-- Straße, Hausnummer -->
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium">Straße*</label>
                <input type="text" v-model="customer.street" @input="validateField('street')" required
                      class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-black" />
                <small v-if="errors.street" class="text-yellow-300">{{ errors.street }}</small>
              </div>
              <div>
                <label class="block text-sm font-medium">Hausnummer*</label>
                <input type="text" v-model="customer.housenumber" @input="validateField('housenumber')" required
                      class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-black" />
                <small v-if="errors.housenumber" class="text-yellow-300">{{ errors.housenumber }}</small>
              </div>
            </div>

            <!-- PLZ, Ort -->
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium">Ort*</label>
                <input type="text" v-model="customer.city" @input="validateField('city')" required
                      class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-black" />
                <small v-if="errors.city" class="text-yellow-300">{{ errors.city }}</small>
              </div>
              <div>
                <label class="block text-sm font-medium">PLZ*</label>
                <input type="text" v-model="customer.zipCity" @input="validateField('zipCity')" required
                      class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-black" />
                <small v-if="errors.zipCity" class="text-yellow-300">{{ errors.zipCity }}</small>
              </div>
            </div>

            <!-- E-Mail Adresse -->
            <div>
              <label class="block text-sm font-medium">E-Mail Adresse*</label>
              <input type="email" v-model="customer.email" @input="validateField('email')" required
                    class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-black" />
              <small v-if="errors.email" class="text-yellow-300">{{ errors.email }}</small>
            </div>

            <!-- Telefonnummer -->
            <div>
              <label class="block text-sm font-medium">Telefonnummer*</label>
              <input type="text" v-model="customer.phone" @input="validateField('phone')" required
                    class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-black" />
              <small v-if="errors.phone" class="text-yellow-300">{{ errors.phone }}</small>
            </div>

            <!-- UST-ID (Optional) -->
            <div>
              <label class="block text-sm font-medium">UST-ID</label>
              <input type="text" v-model="customer.taxId" placeholder="OPTIONAL"
                    class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-black" />
            </div>

            <!-- Submit Button -->
            <button type="submit" class="w-full py-2 bg-white text-[#d0033d] font-bold rounded-md disabled:opacity-50" :disabled="!isFormValid">
              Kunde anlegen
            </button>
            <recaptcha></recaptcha>
          </form>
        </div>
      </div>




      <!-- Change Password Tab -->
      <div v-if="isAuthenticated && activeTab === 'changePassword'" class="flex justify-center items-center">
        <div class="w-full bg-[#d0033d] text-white rounded-lg shadow-md p-4">
          <h3 class="text-center text-xl font-bold mb-6">Passwort ändern</h3>

          <form @submit.prevent="changePassword" class="space-y-4">
            <!-- Current Password -->
            <div>
              <label class="block text-sm font-medium">aktuelles Passwort*</label>
              <input type="password" v-model="passwordForm.currentPassword" required
                    class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-black" />
            </div>

            <!-- New Password -->
            <div>
              <label class="block text-sm font-medium">neues Passwort*</label>
              <input type="password" v-model="passwordForm.newPassword" required
                    class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-black" />
            </div>

            <!-- Confirm New Password -->
            <div>
              <label class="block text-sm font-medium">neues Passwort bestätigen*</label>
              <input type="password" v-model="passwordForm.confirmPassword" required
                    class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-black" />
            </div>

            <!-- Submit Button -->
            <button type="submit" class="w-full py-2 bg-black text-white font-bold rounded-md">
              Passwort aktualisieren
            </button>
          </form>
        </div>
      </div>

       <!-- Customer Entries Tab -->
       <div v-if="isAuthenticated && activeTab === 'customerEntries'">
        <div class="container-fluid">
          <h3 class="mb-3 text-center font-weight-bold">Kundenzugang</h3>

          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Kunden ID</th>
                <th>Kundenkonto Login</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="entry in customerEntries" :key="entry.id">
                <td>{{ entry.id }}</td>
                <td>{{ entry.customer_id }}</td>
                <td>
                  <button class="btn btn-primary btn-sm" @click="redirectToLogin(entry.customer_id)">
                    Login
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

        <div class="w-full  bg-white ">
          <!-- Header with gray tab -->
          
          <form @submit.prevent="loginVertriebUser" class="mt-6 space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" v-model="email" required
                class="mt-1 w-full px-3 py-2 border border-gray-300 text-gray-700 focus:ring-1 focus:ring-gray-400 focus:outline-none" />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" v-model="password" required
                class="mt-1 w-full px-3 py-2 border border-gray-300 text-gray-700 focus:ring-1 focus:ring-gray-400 focus:outline-none" />
            </div>

            <button type="submit"
              class=" py-2 px-4 bg-[#d0033d] text-white font-semibold hover:bg-[#d0033d] transition">
              Login
            </button>
          </form>
      </div>

    </div>

     <!-- Loading Overlay -->
     <div v-if="loading" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";

// Add these at the top with other refs
const email = ref<string>('')
const password = ref<string>('')

interface PasswordForm {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

interface Customer {
  firmName: string
  contactPerson: string
  street: string
  housenumber: string
  city: string
  zipCity: string
  email: string
  phone: string
  taxId: string
}

interface Errors {
  firmName: string
  contactPerson: string
  street: string
  housenumber: string
  city: string
  zipCity: string
  email: string
  phone: string
}

const activeTab = ref<string>('login')
const loading = ref<boolean>(false)
const customerEntries = ref<any[]>([])
const CustomerRegistrationForm = ref<HTMLElement | null>(null)

const passwordForm = reactive<PasswordForm>({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

const customer = reactive<Customer>({
  firmName: '',
  contactPerson: '',
  street: '',
  housenumber: '',
  city: '',
  zipCity: '',
  email: '',
  phone: '',
  taxId: ''
})

const errors = reactive<Errors>({
  firmName: '',
  contactPerson: '',
  street: '',
  housenumber: '',
  city: '',
  zipCity: '',
  email: '',
  phone: ''
})

const isAuthenticated = computed(() => {
  return process.client ? !!localStorage.getItem('vertrieb-token') : false
})

const isFormValid = computed(() => {
  const validErrors = Object.values(errors).every(error => error === '')
  const validFields = Object.entries(customer)
    .filter(([key]) => key !== 'taxId')
    .every(([_, value]) => value !== '')
  return validErrors && validFields
})

onMounted(() => {
  if (process.client && isAuthenticated.value) {
    activeTab.value = 'CreateCustomer'
  }
})

const validateField = (field: keyof Errors) => {
  const value = customer[field]
  switch (field) {
    case 'firmName':
      errors.firmName = value ? '' : 'Firmenname ist erforderlich'
      break
    case 'contactPerson':
      errors.contactPerson = value ? '' : 'Ansprechpartner ist erforderlich'
      break
    case 'street':
      errors.street = value ? '' : 'Straße, Hausnummer ist erforderlich'
      break
    case 'housenumber':
      errors.housenumber = value ? '' : 'Hausnummer ist erforderlich'
      break
    case 'city':
      errors.city = value ? '' : 'Ort ist erforderlich'
      break
    case 'zipCity':
      errors.zipCity = value ? '' : 'PLZ, Ort ist erforderlich'
      break
    case 'email':
      errors.email = value
        ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ''
          : 'Ungültige E-Mail-Adresse'
        : 'E-Mail ist erforderlich'
      break
    case 'phone':
      errors.phone = value
        ? /^\d{10,}$/.test(value)
          ? ''
          : 'Telefonnummer muss mindestens 10 Ziffern enthalten'
        : 'Telefonnummer ist erforderlich'
      break
  }
}

const loginVertriebUser = async () => {
  const data = {
    email: email.value,
    password: password.value
  }

  loading.value = true
  try {
    const response = await axios.post('/rest/salesperson/login', data)
    localStorage.setItem('vertrieb-token', response.data.token)
    alert('Ceres::Template.loginSuccessful')
    window.location.reload()
  } catch (error: any) {
    alert(error.response?.data?.error || 'Login fehlgeschlagen')
  } finally {
    loading.value = false
  }
}

const logoutVertriebUser = () => {
  localStorage.removeItem('vertrieb-token')
  alert('Logout erfolgreich')
  window.location.reload()
}

const registerCustomer = async () => {
  if (!isFormValid.value) {
    alert('Bitte füllen Sie alle Pflichtfelder korrekt aus.')
    return
  }

  try {    
    const userObject = {
      contact: {
        referrerId: 4.01,
        typeId: 1,
        classId: 18,
        options: {
          typeId: {
            typeId: 2,
            subTypeId: 4,
            value: customer.email,
            priority: 0,
          }
        },
        password: "New@Customer2025"
      },
      billingAddress: {
        countryId: 1,
        telephone: customer.phone,
        address1: customer.street,
        address2: customer.housenumber,
        postalCode: customer.zipCity || "",
        town: customer.city,
        contactPerson: customer.contactPerson,
        name1: customer.firmName,
        isPrimary: 1
      },
    }

    let response = await axios.post('/rest/io/customer', userObject)
    axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;

    const salespersonToken = localStorage.getItem('vertrieb-token')
    if (!salespersonToken) throw new Error('Salesperson token fehlt')

    const customerData = {
      customerId: response.data.id,
      token: salespersonToken,
      taxId: customer.taxId
    }

    await axios.post('/rest/salesperson-customers-create', customerData)
    alert('Ceres::Template.regSuccessful')
    window.location.reload()
  } catch (error: any) {
    alert(error.response?.data?.error || 'Registrierung fehlgeschlagen')
  }
}

const fetchCustomerEntries = async () => {
  activeTab.value = "customerEntries"
  loading.value = true
  
  try {
    const token = process.client ? localStorage.getItem('vertrieb-token') : null
    if (!token) {
      alert("Authentication token is missing.")
      return
    }

    const response = await axios.post('/rest/salesperson-customers-front', { 
      salespersonToken: token 
    })
    
    customerEntries.value = response.data
  } catch (error) {
    alert("Failed to fetch customer entries")
  } finally {
    loading.value = false
  }
}

const changePassword = async () => {
  try {
    const token = process.client ? localStorage.getItem('vertrieb-token') : null
    if (!token) {
      alert("Authentication token is missing.")
      return
    }

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert("New passwords do not match!")
      return
    }

    const data = {
      salespersonToken: token,
      currentPassword: passwordForm.currentPassword,
      newPassword: passwordForm.newPassword,
    }

    loading.value = true
    await axios.post('/rest/salesperson-change-password', data)
    
    alert("Password changed successfully!")
    passwordForm.currentPassword = ""
    passwordForm.newPassword = ""
    passwordForm.confirmPassword = ""
  } catch (error: any) {
    alert(error.response?.data?.error || "Error updating password")
  } finally {
    loading.value = false
  }
}

const redirectToLogin = async (customerId: number) => {
  try {
    const token = process.client ? localStorage.getItem('vertrieb-token') : null
    if (!token) {
      alert("Authentication token is missing.")
      return
    }

    loading.value = true
    const response = await axios.get('/rest/login-to-customer', {
      params: {
        customerId,
        token
      }
    })

    if (process.client) {
      window.open(response.data.loginUrl, "_blank")
    }
  } catch (error: any) {
    alert(error.response?.data?.error || "Login redirect failed")
  } finally {
    loading.value = false
  }
}
</script>
