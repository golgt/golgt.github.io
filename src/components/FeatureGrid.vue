<script>
export default {
  name: 'FeatureGrid',
  props: {
    title: {
      type: String,
      default: 'Čo nájdete v našom pivovare',
    },
    features: {
      type: Array,
      required: true,
    },
  },
}
</script>

<template>
  <section class="grid">
    <div class="grid__header">
      <p class="eyebrow">Zažite pivovar</p>
      <h2>{{ title }}</h2>
      <p class="lede">
        Od selekcie surovín po degustácie v našej pivnici – všetko na jednom
        mieste.
      </p>
    </div>
    <div class="grid__items">
      <article
        v-for="feature in features"
        :key="feature.title"
        class="card"
      >
        <div class="card__icon" aria-hidden="true">{{ feature.icon }}</div>
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.copy }}</p>
      </article>
    </div>
  </section>
</template>

<style>
.grid {
  padding: 0 1.5rem 1.5rem;
  display: grid;
  gap: 1.5rem;
}

.grid__header h2 {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  margin: 0.2rem 0 0.5rem;
  color: #2d2a32;
}

.grid__header .lede {
  color: #4a4754;
  max-width: 640px;
  line-height: 1.6;
}

.eyebrow {
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #7e8a57;
  font-weight: 700;
  font-size: 0.75rem;
  margin: 0;
}

.grid__items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.card {
  background: white;
  border: 1px solid #e5e7ef;
  border-radius: 14px;
  padding: 1.25rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  display: grid;
  gap: 0.6rem;
}

.card__icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: #eef0fb;
  color: #6d82c7;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
}

.card h3 {
  margin: 0;
  color: #2d2a32;
}

.card p {
  margin: 0;
  color: #4a4754;
  line-height: 1.5;
}
</style>
