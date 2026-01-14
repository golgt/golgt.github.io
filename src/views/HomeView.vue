<script>
import HeroSection from '../components/HeroSection.vue'
import FeatureGrid from '../components/FeatureGrid.vue'
import CtaBanner from '../components/CtaBanner.vue'
import Footer from '../components/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    FeatureGrid,
    CtaBanner,
    Footer,
  },
  data() {
    return {
      features: [
        {
          title: 'Degustačný bar',
          copy: 'Ochutnávka limitovaných váriek priamo z tanku so someliérom.',
          icon: '🍺',
        },
        {
          title: 'Prehliadky pivovaru',
          copy: 'Pozrite si varňu, tanky a celý proces výroby krok po kroku.',
          icon: '🏭',
        },
        {
          title: 'Farmárske suroviny',
          copy: 'Chmeľ z vlastných záhrad a lokálne slady pre čistú chuť.',
          icon: '🌿',
        },
        {
          title: 'Darčeky a merch',
          copy: 'Fľaše, poháre a tričká pre fanúšikov MAdFOX Brewery.',
          icon: '🎁',
        },
      ],
    }
  },
}
</script>

<template>
  <main class="home">
    <HeroSection
      title="Objavte MAdFOX Brewery"
      subtitle="Remeselný pivovar zameraný na čisté suroviny, vyvážené chute a otvorené prehliadky pre každého."
      :primary="{ label: 'Rezervovať tour', to: { name: 'tours' } }"
      :secondary="{ label: 'Pozrieť produkty', to: { name: 'products' } }"
    />

    <FeatureGrid :features="features" />
  </main>
  <footer>
    <CtaBanner
      heading="Navštívte náš pivovar už tento víkend"
      body="Prehliadka, degustácia a čas s našimi sládkami. Rezervujte si termín online a my sa postaráme o zvyšok."
      :action="{ label: 'Rezervovať', to: { name: 'tours' } }"
    />
    <Footer/> 
  </footer>
    
</template>

<style>
.home {
  display: grid;
  gap: 1.5rem;
}
</style>