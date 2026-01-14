<template>
    <main class="contact-wrapper">
  
      <!-- ĽAVÁ STRANA – FORMULÁR -->
      <div class="form-section">
        <p class="eyebrow">Kontakt pre spotrebiteľov</p>
        <h1>Dajte nám vedieť čo si myslíte</h1>
        <v-expand-transition>
            <v-alert
                v-if="showAlert"
                color="green"
                density="compact"
                icon="mdi-check-circle"
                theme="dark"
                class="mb-4"
            >
                    Formulár bol úspešne odoslaný. Ďakujeme.
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
            label="Vyberte možnosť"
          />
          
          <v-text-field clearable
            v-model="msg.value.value"
            :counter="50"
            maxlength="50"
            :error-messages="msg.errorMessage.value"
            label="Vaša správa" 
          />
          <v-checkbox
            v-model="checkbox.value.value"
            :error-messages="checkbox.errorMessage.value"
            label="Súhlasím s podmienkami"
            type="checkbox"
            value="1"
          />
  
          <v-btn type="submit" class="me-4">Potvrdiť</v-btn>
          <v-btn @click="resetForm">Vyčistiť</v-btn>
        </form>
      </div>
  
      <!-- PRAVÁ STRANA – KONTAKT -->
      <div class="contact-info">
        <p class="eyebrow">Kontakt pre obchodných partnerov</p>
        <h2>Kontakt</h2>
        <p><v-icon color="primary" icon="mdi-pencil"></v-icon>obchod@madfox.sk</p>
        <p><v-icon color="primary" icon="mdi-phone"></v-icon> 0800 657 400</p>
       
      </div>
  
    </main>
  </template>
  
<script>
import { useField, useForm } from 'vee-validate'

export default {
  name: 'ContactForm',
  data() {
    return {
      showAlert: false,
      items: [
        'Otázka o produkte',
        'PR/Mediálna spolupráca',
        'Súťaže',
        'Sponzoring',
        'Kariéra',
        'Iné',
      ],
    }
  },
  setup() {
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
        msg(value) {
          if (!value || value.length < 5) {
            return 'Správa by mala mať aspoň 5 znakov.'
          }
          if (value.length > 50) {
            return 'Správa môže mať maximálne 50 znakov.'
          }
          return true
        },
        checkbox(value) {
          if (value === '1') return true
          return 'Musíte potvrdiť.'
        },
      },
    })

    const name = useField('name')
    const phone = useField('phone')
    const email = useField('email')
    const select = useField('select')
    const msg = useField('msg')
    const checkbox = useField('checkbox')

    return {
      name,
      phone,
      email,
      select,
      msg,
      checkbox,
      handleSubmit,
      handleReset,
    }
  },
  methods: {
    submit() {
      this.handleSubmit((values) => {
        console.log(values)
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

<style>
    .contact-wrapper {
  display: flex;
  gap: 60px;
  padding: 50px;
  max-width: 1200px;
  margin: auto;
}

.form-section {
  flex: 2;
}

.contact-info {
  flex: 1;
  background: #f7f7f7;
  padding: 30px;
  border-radius: 8px;
}

.contact-info h2 {
  margin-bottom: 20px;
}

</style>