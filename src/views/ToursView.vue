<script>
  import CtaBanner from '@/components/CtaBanner.vue';
  import Footer from '@/components/Footer.vue';
  import Products from '@/components/Products.vue';
  import CartIcon from '@/components/CartIcon.vue';

  export default{
    name: 'ToorView',
    components: {
      CtaBanner,
      Footer,
      Products,
      CartIcon
    },
    data(){
      return {
        tours: [
          { id: 13, name: 'Základná prehliadka', price: 20, packageSize:'na osobu', src: '/img/zaklad.jpg', description: 'Nahliadnite do zákulisia výroby piva a spoznajte celý proces od sladu až po pohár. Ideálna voľba pre tých, ktorí chcú zažiť pivovar po prvýkrát.' },
          { id: 14, name: 'Degustačná prehliadka', price: 26, packageSize:'na osobu', src: '/img/degustacia.jpg', description: 'Prehliadka pivovaru spojená s riadenou degustáciou vybraných pív MAdFOX Brewery. Objavíte rozdiely medzi jednotlivými štýlmi a naučíte sa, ako si pivo správne vychutnať.' },
          { id: 15, name: 'Sládková prehliadka', price: 35, packageSize:'na osobu', src: '/img/sladkova.jpg', description: 'Exkluzívna prehliadka vedená naším sládkom, ktorý vám prezradí detaily výroby, zaujímavosti a pivné tajomstvá. Zážitok pre skutočných nadšencov a zvedavcov.' },
          { id: 16, name: 'Zážitková prehliadka', price: 45, packageSize:'na osobu', src: '/img/zazitkova.jpg', description: 'Kompletný relaxačný balík spájajúci prehliadku pivovaru, degustáciu a originálny pivný kúpeľ. Ideálna voľba pre výnimočné príležitosti a darčekové zážitky.' },
        ]
      }
    }
  }
</script>

<template>
  <main>
    <div class="products-header-bar">
      <CartIcon/>
    </div>
    <v-alert
      type="info"
      variant="tonal"
      class="mb-6">
      Prehliadky sú obmedzené na dni štvrtok 10:00 a sobota 10:30.
    </v-alert>
  <Products header-title="Ponuka prehliadok pivovaru"
    headerName="Aktuálne prehliadky"
    :items="tours"/>


  <footer>
    <CtaBanner
      heading="Navštívte náš pivovar už tento víkend"
      body="Zaujíma vás, ako to chodí v našom pivovare alebo čo vás čaká počas prehliadky? Napíšte nám a líška vám rada poradí."
      :action="{ label: 'Mám otázku', to: { name: 'contact' } }"
    />
    <Footer/> 
  </footer>
  </main>

</template>

<style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  
