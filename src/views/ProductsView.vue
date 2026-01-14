<script>
import CtaBanner from '@/components/CtaBanner.vue';
import Footer from '@/components/Footer.vue';
import Products from '@/components/Products.vue';
import CartIcon from '@/components/CartIcon.vue'

export default{
  name: 'ProductView',
  components: {
    CtaBanner,
    Footer,
    Products,
    CartIcon
  },
  data() {
    return {
      productsForSale: [
        { id: 1, name: 'MAdFOX Brewery IPA', price: 12, packageSize:'/ 6 ks', src: '/img/ipa.jpg', description: 'Výrazná India Pale Ale s bohatou chmeľovou arómou citrusov a tropického ovocia. Príjemná horkosť je vyvážená plným telom a sviežim dozvukom, ktorý ocenia milovníci moderných craft pív.' },
        { id: 2, name: 'MAdFOX Brewery Radler', price: 9, packageSize:'/ 6 ks', src: '/img/radler.jpg', description: 'Osviežujúca kombinácia ľahkého piva a prírodnej citrusovej limonády. Ideálny spoločník na horúce dni, ktorý ponúka nízky obsah alkoholu a dokonale vyváženú sladko-kyslú chuť.' },
        { id: 3, name: 'MAdFOX Brewery Stout', price: 14, packageSize:'/ 6 ks', src: '/img/stout.jpg', description: 'Tmavé pivo s plnou, zamatovou textúrou a tónmi praženej kávy, horkej čokolády a jemného karamelu. Bohatá chuť a dlhý dozvuk robia zo stouta ideálnu voľbu pre pomalé vychutnávanie.' },
        { id: 4, name: 'MAdFOX Brewery Lager', price: 27, packageSize:'/ 30 ks', src: '/img/lager.jpg', description: 'Klasický spodne kvasený ležiak s čistou, vyváženou chuťou a jemnou chmeľovou horkosťou. Ľahko piteľný, osviežujúci a vhodný na každú príležitosť.' },
        { id: 5, name: 'MAdFOX Brewery Sour', price: 3.2, packageSize:'/ 4 ks', src: '/img/sour.jpg', description: 'Odvážne kyslé pivo s ovocnými tónmi a sviežou aciditou. Ľahké telo a netradičný chuťový profil z neho robia ideálnu voľbu pre tých, ktorí radi objavujú nové pivné zážitky.' },
        { id: 6, name: 'MAdFOX Brewery Radler 0.0%', price: 8.4, packageSize:'/ 6 ks', src: '/img/radler00.jpg', description: 'Moderný nealkoholický radler s osviežujúcou citrusovou chuťou a dokonale vyváženou sladko-kyslou harmóniou. Ideálna voľba pre každého, kto si chce vychutnať plnú chuť radlera bez alkoholu – kedykoľvek a bez kompromisov.' },
      ],
      productsForSale2: [
        { id: 7, name: '„Líška vo vreci - Basic“ ', price: 25, src: '/img/basic.jpg', description: 'Výber obľúbených pív MAdFOX Brewery v základnej edícii. Ideálna voľba pre tých, ktorí chcú ochutnať poctivé craftové pivá a nechať sa príjemne prekvapiť. Obsah môže zahŕňať: 3–4 druhy piva (Lager, IPA, Radler)'},
        { id: 8, name: '„Líška vo vreci - Premium“ ', price: 50, src: '/img/premium.jpg', description: 'Rozšírená verzia s pestrejším výberom a exkluzívnejšími kúskami. Skvelý darček pre pivných nadšencov, ktorí radi objavujú nové chute. Obsah môže zahŕňať: 5–6 pív (vrátane Stout alebo Sour), limitovaná alebo sezónna edícia' },
        { id: 9, name: '„Legendárna Líška vo vreci“ ', price: 100, src: '/img/legendary.jpg', description: 'Ultimátna pivná skúsenosť pre skutočných znalcov. Prémiový výber toho najlepšieho z MAdFOX Brewery, doplnený o jedinečné kúsky a prekvapenia. Obsah môže zahŕňať: 7–9 pív vrátane špeciálov, limitka alebo novinka, štýlový merch (napr. pohár, otvárač)' },
        { id: 10, name: 'Pivný kúpeľ', price: 37, src: '/img/beerBath.jpg', description: 'Zabudni na sprchu a nalej si kúpeľ! Pivný kúpeľ je poctivý relax pre každého pivára – plný chmeľu, sladu a pivných kvasníc. Uvoľní svaly, osvieži pokožku a vypne hlavu rovnako spoľahlivo ako dobre načapované pivo. Ideálny spôsob, ako si dopriať pivo… tentoraz bez krígľa v ruke.' },
        { id: 11, name: 'Malý Darčekový kôš', price: 18.57, src: '/img/mayKos.jpg', description: 'Kompaktný darček, ktorý poteší každého milovníka piva. Ideálny ako pozornosť alebo firemný dar. Obsah môže zahŕňať: 3 pivá podľa výberu, drobný pivný doplnok' },
        { id: 12, name: 'Veľký Darčekový kôš', price: 32.32, src: '/img/velkyKos.jpg', description: 'Bohato vyskladaný darčekový kôš plný pivných špecialít a štýlových doplnkov. Perfektný dar na oslavy, jubileá alebo výnimočné príležitosti. Obsah môže zahŕňať: 6–8 pív rôznych štýlov pivné poháre alebo merch tematické balenie' },
      ],
    }
  },
}

</script>

<template>
  <main>
    <div class="products-header-bar">
      <CartIcon />
    </div>
    <v-alert
      type="info"
      variant="tonal"
      class="mb-6">
      Na e-shope sa produkty predávajú výhradne ako balenia.
    </v-alert>
    <Products headerTitle="Ponuka pivovaru"
        headerName="Ponuka pív"
        :items="productsForSale" 
     />
     <Products headerTitle="Darčeková kolekcia"
        headerName="Poctivé darčeky z MAdFOX Brewery"
        :items="productsForSale2" 
      />
    <footer>
      <CtaBanner
        heading="Navštívte náš pivovar už tento víkend"
        body="Prehliadka, degustácia a čas s našimi sládkami. Rezervujte si termín online a my sa postaráme o zvyšok."
        :action="{ label: 'Rezervovať', to: { name: 'tours' } }"
      />
      <Footer/> 
    </footer>
  </main>
</template>

<style>
.products-header-bar {
  position: fixed;
  top: 80px;
  right: 20px;
  z-index: 1000;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
  
