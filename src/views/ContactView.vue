<script>
    import ContactForm from '@/components/ContactForm.vue';
    import Footer from '@/components/Footer.vue';
    import CtaBanner from '@/components/CtaBanner.vue';
  

    export default{
        name: 'ContactView',
        components: {
            ContactForm,
            Footer,
            CtaBanner,

        }
    }
</script>

<template>
    <ContactForm/>

    <footer>
    <CtaBanner
      heading="Navštívte náš pivovar už tento víkend"
      body="Prehliadka, degustácia a čas s našimi sládkami. Rezervujte si termín online a my sa postaráme o zvyšok."
      :action="{ label: 'Rezervovať', to: { name: 'tours' } }"
    />
    <Footer/> 
  </footer>   
</template>