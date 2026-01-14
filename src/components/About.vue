<script>
  export default {
    name: 'About',
  }
</script>

    <template>
      <main class="about">
        <section class="about__header">
          <p class="eyebrow">Náš príbeh</p>
          <h1>Za každým pivom stojí príbeh</h1>
          <p class="lede">
            MAdFOX Brewery vznikol z lásky k remeselnému pivu, čistým surovinám
            a poctivému procesu. Varíme malé várky, aby sme mali úplnú kontrolu
            nad chuťou, aromatikou a kvalitou.
          </p>
        </section>
    
        <section class="about__content">
          <div class="about__block">
            <h2>Od garáže k pivovaru</h2>
            <p>
              Začínali sme ako domáci sládkovia, ktorí skúšali prvé recepty
              v malých nádobách. Postupne pribúdali várky, skúsenosti a prví
              stáli zákazníci. Dnes máme vlastnú varňu, pivnicu a degustačný bar,
              no princíp ostal rovnaký – každá várka je osobná.
            </p>
          </div>
    
          <div class="about__block">
            <h2>Naša filozofia</h2>
            <p>
              Veríme v lokálne suroviny, transparentný proces a ľudský prístup.
              Každý, kto k nám príde, môže vidieť celý proces – od sladu a chmeľu
              až po hotový pohár piva. Radi vysvetlíme, poradíme a podelíme sa
              o naše know-how.
            </p>
          </div>
    
          <div class="about__block">
            <h2>Prečo MAdFOX?</h2>
            <p>
              Líška pre nás symbolizuje zvedavosť, hravosť a inteligenciu.
              Chceme, aby naše pivá boli presne také – zvedavé v chutiach,
              hravé v štýloch a premyslené v detailoch.
            </p>
          </div>
        </section>
    
        <section class="about__facts">
          <div class="fact-card">
            <span class="fact-card__label">Rok založenia</span>
            <span class="fact-card__value">1998</span>
          </div>
          <div class="fact-card">
            <span class="fact-card__label">Štýly piva</span>
            <span class="fact-card__value">IPA, lager, stout, sour</span>
          </div>
          <div class="fact-card">
            <span class="fact-card__label">Kapacita varne</span>
            <span class="fact-card__value">10 hl</span>
          </div>
          <div class="fact-card">
            <span class="fact-card__label">Prehliadky týždenne</span>
            <span class="fact-card__value">3+</span>
          </div>
        </section>  
        <section class="team">
            <div class="get_known">
                <p class="eyebrow">Vedenie pivovaru</p>
                <h2>Spoznajte náš hlavný tým</h2>
            </div>
        </section>
      </main>
    </template>
    
    <style>
    .about {
      padding: 2rem 1.5rem 3rem;
      display: grid;
      gap: 2rem;
    }
    
    .about__header h1 {
      font-size: clamp(2rem, 3.4vw, 2.6rem);
      margin: 0.4rem 0 0.6rem;
      color: #2d2a32;
    }
    
    .about__header .lede {
      color: #4a4754;
      max-width: 720px;
      line-height: 1.7;
    }
    
    .eyebrow {
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #7e8a57;
      font-weight: 700;
      font-size: 0.75rem;
      margin: 0;
    }
    
    .about__content {
      display: grid;
      gap: 1.75rem;
    }
    
    .about__block h2 {
      margin: 0 0 0.4rem;
      color: #2d2a32;
    }
    
    .about__block p {
      margin: 0;
      color: #4a4754;
      line-height: 1.6;
    }
    
    .about__facts {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 1rem;
    }
    
    .fact-card {
      background: white;
      border: 1px solid #e5e7ef;
      border-radius: 14px;
      padding: 1rem 1.2rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
      display: grid;
      gap: 0.2rem;
    }
    
    .fact-card__label {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #7b7a86;
    }
    
    .fact-card__value {
      font-weight: 600;
      color: #2d2a32;
    }
    
    @media (min-width: 1024px) {
      .about {
        min-height: 100vh;
        max-width: 1040px;
        margin: 0 auto;
      }
    
      .about__content {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
    </style>