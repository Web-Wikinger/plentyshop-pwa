<template>
    <div class="register-form">
      <form @submit.prevent="submitForm" class="form-grid" ref="CustomerRegistrationForm">
        <!-- Row 1: Kundengruppe -->
        <div class="form-group full">
          <label for="customerGroup">Kundengruppe</label>
          <select id="customerGroup" v-model="customerGroup" requiredd>
            <option disabled value="">Bitte auswählen</option>
            <option v-for="group in customerGroups" :key="group.id" :value="group.id">
              {{ group.name }}
            </option>
          </select>
        </div>
  
        <!-- Row 2: E-Mail -->
        <div class="form-group full">
          <label for="email">E-Mail*</label>
          <input id="email" v-model="data.contact.options.typeId.value" type="email" requiredd />
        </div>
  
        <!-- Row 3: Passwort & Passwort wiederholen -->
        <div class="form-group">
          <label for="password">Passwort*</label>
          <input id="password" v-model="data.contact.password" type="password" requiredd />
        </div>
        <div class="form-group">
          <label for="passwordRepeat">Passwort wiederholen*</label>
          <input id="passwordRepeat" v-model="data.contact.password" type="password" requiredd />
        </div>
        <!-- Row 4: Anrede -->
        <div class="form-group full">
          <label for="salutation">Anrede</label>
          <select id="salutation" v-model="data.billingAddress.gender">
            <option value="company">Firma</option>
            <option value="mr">Herr</option>
            <option value="ms">Frau</option>
          </select>
        </div>
  
        <!-- Row 5: Firma & USt-ID -->
        <div class="form-group">
          <label for="company">Firma*</label>
          <input id="company" v-model="data.billingAddress.name1" type="text" requiredd />
        </div>
  
        <div class="form-group ust-group">
          <label for="vatId">USt.-Nr.</label>
          <div class="ust-container">
            <span class="prefix">DE</span>
            <input id="vatId" v-model="data.billingAddress.vatNumber" type="text" />
          </div>
        </div>
  
        <!-- Row 6: Vorname, Nachname, Telefon -->
        <div class="form-group">
          <label for="firstName">Vorname</label>
          <input id="firstName" v-model="data.billingAddress.name2" type="text" />
        </div>
        <div class="form-group">
          <label for="lastName">Nachname</label>
          <input id="lastName" v-model="data.billingAddress.name3" type="text" />
        </div>
        <div class="form-group">
          <label for="phone">Telefon</label>
          <input id="phone" v-model="data.billingAddress.telephone" type="text" />
        </div>
  
        <!-- Row 7: Straße & Nr. -->
        <div class="form-group">
          <label for="street">Straße*</label>
          <input id="street" v-model="data.billingAddress.address1" type="text" requiredd />
        </div>
        <div class="form-group">
          <label for="houseNumber">Nr.*</label>
          <input id="houseNumber" v-model="data.billingAddress.address2" type="text" requiredd />
        </div>
  
        <!-- Row 8: PLZ, Ort, Land -->
        <div class="form-group">
          <label for="zip">PLZ*</label>
          <input id="zip" v-model="data.billingAddress.postalCode" type="text" requiredd />
        </div>
        <div class="form-group">
          <label for="city">Ort*</label>
          <input id="city" v-model="data.billingAddress.town" type="text" requiredd />
        </div>
        <div class="form-group">
          <label for="country">Land</label>
          <select id="country" v-model="data.billingAddress.countryId">
            <option value="1">Deutschland</option>
          </select>
        </div>
  
        <!-- Datenschutz -->
        <div class="form-group full checkbox">
          <input type="checkbox"  id="privacy" requiredd />
          <label for="privacy">
            Hiermit bestätige ich, dass ich die
            <a href="/datenschutz" target="_blank">Datenschutzerklärung</a> gelesen habe.
          </label>
        </div>
  
        <!-- Button -->
        <div class="form-group full">
          <button type="submit" @click="activeFunction = 'f1'">Registrieren</button>
          <!--<button type="submit" @click="activeFunction = 'f2'">Registrieren F2</button>-->
        </div>
        <ReCaptcha/>
      </form>
    </div>
  </template>
  
  
<script>

import { httpClient } from '@/sdk.client'; // adjust path as needed

const { register } = useCustomer();
export default {
  data() {
    return {
      activeFunction: 'f1',
      googleRecaptchaApiKey: '6LczjZcpAAAAAPu2LrxCO-OQaaYzj4VTFwdLHoBG',
      customerGroups: [],
      data : {
            contact: {
                referrerId: 1,
                typeId: 1,
                options: {
                typeId: {
                    typeId: 2,
                    subTypeId: 4,
                    value: "test+1899@web-wikinger.de",
                    priority: 0
                }
                },
                password: "Simo@2025"
            },
            billingAddress: {
                countryId: 1,
                stateId: "",
                gender: "company",
                vatNumber: "",
                name2: "mohamed",
                name3: "aara",
                telephone: "26326",
                address1: "wet",
                address2: "24116",
                postalCode: "24116",
                town: "kiel",
                name1: "test company",
                contactPerson: "moh"
            }
    }
    };
  },
  mounted() {
    this.fetchCustomerGroups();
  },
  methods: {
    async fetchCustomerGroups() {
      // Load from your API or use dummy data for now
      this.customerGroups = [
        { id: 1, name: "Endkunde" },
        { id: 2, name: "Händler" }
      ];
    },
    async registerUser_1() {
      console.log("Registering user:", this.data);

      try {
        const recaptchaToken = await this.executeReCaptcha(this.$refs.CustomerRegistrationForm);
        this.data.recaptcha = recaptchaToken;
        console.log(this.data);

        const params = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        const response = await httpClient('https://b2b.kelloggs-shop.de/rest/io/customer/',this.data,params);

        console.log('✅ Registered customer:');

        console.log(response)

        
      } catch (err) {
        console.error('❌ Error during registration:', err);
      }
    },

    async registerUser_2() {

      console.log("Registering user:", this.data);
    
      register(this.data).then(res => {
        console.log("✅ Registered successfully!", res);
      }).catch(err => {
        console.error("❌ Error during registration", err);
      });
     
      
    },
    submitForm() {
      if (this.activeFunction === 'f1') {
        this.registerUser_1();
      } else if (this.activeFunction === 'f2') {
        this.registerUser_2();
      }
    },
    executeReCaptcha(form){
       
        const recaptchaElement = form.querySelector("[data-recaptcha]");

        if (window.grecaptcha && recaptchaElement){

           return new Promise((resolve, reject) =>{

                window.grecaptcha.execute(this.googleRecaptchaApiKey,{ action: "homepage" })
                .then(response =>{
                        if (response){
                            resolve(response);
                        }else{
                            reject();
                        }
                });


            });
        }

    }

  }
};
</script>

<style scoped>
.register-form {
  max-width: 900px;
  margin: 2rem auto;
  background-color: #fff;
  padding: 2rem;
  border-radius: 12px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.full {
  grid-column: span 3;
}

input,
select {
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

label {
  font-size: 0.75rem;
  text-transform: uppercase;
  margin-bottom: 0.25rem;
  color: #777;
  font-weight: bold;
}

/* USt.-Nr. block */
.ust-group .ust-container {
  display: flex;
  align-items: center;
}

.ust-group .prefix {
  background-color: #f0f0f0;
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-right: none;
  border-radius: 4px 0 0 4px;
}

.ust-group input {
  border-radius: 0 4px 4px 0;
  border-left: none;
  flex: 1;
}

/* Datenschutz checkbox */
.checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.checkbox a {
  color: #c8102e;
  text-decoration: underline;
}

/* Submit Button */
button {
  background-color: #c8102e;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #a00e25;
}
</style>

