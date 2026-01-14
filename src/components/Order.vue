<template>
    <main class="order-wrapper">
  
      <!-- FORMULÁR -->
      <div class="form-section">
        <p class="eyebrow">Objednávka</p>
        <h1>Dokončite svoju objednávku</h1>
        <v-expand-transition>
            <v-alert
                v-if="showAlert"
                color="green"
                density="compact"
                icon="mdi-check-circle"
                theme="dark"
                class="mb-4"
            >
                    Objednávka bola odoslaná. Ďakujeme.
            </v-alert>
        </v-expand-transition>
        <form @submit.prevent="submit">
          <v-text-field clearable
            v-model="name.value.value"
            :counter="20"
            maxlength="20"
            :error-messages="name.errorMessage.value"
            label="Meno"
          />

          <v-text-field clearable
            v-model="phone.value.value"
            :counter="10"
            maxlength="10"
            :error-messages="phone.errorMessage.value"
            label="Telefónne číslo"
          />

          <v-text-field clearable
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            label="E-mail"
          />

          <v-select
            v-model="select.value.value"
            :items="items"
            :error-messages="select.errorMessage.value"
            label="Vyberte možnosť vyzdvihnutia"
          />
          <v-text-field
            v-if="select.value.value === 'Doručenie na adresu'"
            v-model="address.value.value"
            :error-messages="address.errorMessage.value"
            label="Adresa (ulica a číslo)"
          />

          <v-text-field
            v-if="select.value.value === 'Doručenie na adresu'"
            v-model="city.value.value"
            :error-messages="city.errorMessage.value"
            label="Mesto"
          />

          <v-text-field
            v-if="select.value.value === 'Doručenie na adresu'"
            v-model="zip.value.value"
            :error-messages="zip.errorMessage.value"
            label="PSČ"
          />
          
          <v-select
            v-model="payment.value.value"
            :items="paymentItems"
            :error-messages="payment.errorMessage.value"
            label="Vyberte možnosť platby"
          />

          <v-text-field
            v-if="payment.value.value === 'Karta'"
            v-model="cardNumber.value.value"
            :error-messages="cardNumber.errorMessage.value"
            label="Číslo karty"
          />

          <v-text-field
            v-if="payment.value.value === 'Karta'"
            v-model="cardName.value.value"
            :error-messages="cardName.errorMessage.value"
            label="Meno držiteľa karty"
          />

          <v-text-field
            v-if="payment.value.value === 'Karta'"
            v-model="cardExpiry.value.value"
            :error-messages="cardExpiry.errorMessage.value"
            label="Platnosť (MM/YY)"
          />

          <v-text-field
            v-if="payment.value.value === 'Karta'"
            v-model="cardCvc.value.value"
            :error-messages="cardCvc.errorMessage.value"
            label="CVC"
          />

          <v-checkbox
            v-model="checkbox.value.value"
            :error-messages="checkbox.errorMessage.value"
            label="Súhlasím s podmienkami"
            type="checkbox"
            value="1"
          />
  
          <v-btn type="submit" class="me-4">odoslať objednávku</v-btn>
          <v-btn @click="handleReset">Vyčistiť</v-btn>
        </form>
      </div>
      </main>   
    </template>

<style>
.order-wrapper {
  padding: 1rem;
}

.form-section {
  max-width: 100%;
}

.eyebrow {
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #7e8a57;
  font-weight: 700;
  font-size: 0.75rem;
  margin: 0 0 0.5rem;
}

.form-section h1 {
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  margin: 0.4rem 0 1rem;
  color: #2d2a32;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>

<script>
    import { useProductsStore } from '@/stores/counter';
    import { useField, useForm } from 'vee-validate'
    
    
    export default {
      name: 'ContactForm',
      data() {
        return {
          showAlert: false,
          items: [
            'Vyzdvihnutie na predajni',
            'Doručenie na adresu',
          ],
          paymentItems: [
            'Hotovosť',
            'Karta',
          ],
        }
      },
      setup() {
        const cartStore = useProductsStore()

        const { handleSubmit, handleReset } = useForm({
          validationSchema: {
            name(value) {
              if (!value || value.length < 2) {
                return 'Meno musí mať aspoň 2 znaky.'
              }
              if (value.length > 20) {
                return 'Meno môže mať maximálne 20 znakov.'
              }
              return true
            },
            phone(value) {
              if (!value || !/^[0-9-]{7,}$/.test(value)) {
                return 'Telefónne číslo musí mať aspoň 7 čísel.'
              }
              if (value.length > 10) {
                return 'Telefónne číslo môže mať maximálne 10 znakov.'
              }
              return true
            },
            email(value) {
              if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
              return 'E-mail musí byť skutočný.'
            },
            select(value) {
              if (value) return true
              return 'Vyberte akciu.'
            },
            checkbox(value) {
              if (value === '1') return true
              return 'Musíte potvrdiť.'
            },
            address(value, values) {
            if (values.select === 'Doručenie na adresu' && !value) {
                return 'Zadajte adresu.'
                }
                return true
            },
            city(value, values) {
                if (values.select === 'Doručenie na adresu' && !value) {
                return 'Zadajte mesto.'
                }
                return true
            },
            zip(value, values) {
                if (values.select === 'Doručenie na adresu' && !value) {
                return 'Zadajte PSČ.'
                }
                    if (value && !/^[0-9]{5}$/.test(value)) {
                return 'PSČ musí mať 5 číslic.'
                }
                return true
            },

            payment(value) {
                if (value) return true
                return 'Vyberte spôsob platby.'
            },

            cardNumber(value, values) {
                if (values.payment === 'Karta') {
                if (!value) return 'Zadajte číslo karty.'
                if (!/^[0-9 ]{16,19}$/.test(value)) {
                    return 'Číslo karty je neplatné.'
                    }
                }
                return true
            },

            cardName(value, values) {
                if (values.payment === 'Karta' && !value) {
                    return 'Zadajte meno držiteľa karty.'
                }
                return true
            },

            cardExpiry(value, values) {
                if (values.payment === 'Karta') {
                if (!value) return 'Zadajte dátum platnosti.'
                if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) {
                    return 'Formát musí byť MM/YY.'
                    }
                }
                return true
            },

            cardCvc(value, values) {
                if (values.payment === 'Karta') {
                if (!value) return 'Zadajte CVC.'
                if (!/^[0-9]{3,4}$/.test(value)) {
                    return 'CVC musí mať 3–4 číslice.'
                    }
                }
                return true
            },
          },
        })
    
        const name = useField('name')
        const phone = useField('phone')
        const email = useField('email')
        const select = useField('select')
        const checkbox = useField('checkbox')
        const address = useField('address')
        const city = useField('city')
        const zip = useField('zip')
        const payment = useField('payment')
        const cardNumber = useField('cardNumber')
        const cardName = useField('cardName')
        const cardExpiry = useField('cardExpiry')
        const cardCvc = useField('cardCvc')


        return {
          name,
          phone,
          email,
          select,
          checkbox,
          address,
          city,
          zip,
          payment,
          cardNumber,
          cardName,
          cardExpiry,
          cardCvc,
          handleSubmit,
          handleReset,
          cartStore
        }
      },
      methods: {
        submit() {
          this.handleSubmit((values) => {
            console.log(values)
            this.cartStore.cleanCart()
            this.showAlert = true
            this.resetForm()
            setTimeout(() => {
              this.showAlert = false
            }, 3000)
          })()
        },
        resetForm() {
          this.handleReset()
        },
      },
    }
    </script>