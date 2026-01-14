<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'HeroSection',
  components: { RouterLink },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    primary: {
      type: Object,
      required: true,
      validator: (link) => link?.label && link?.to,
    },
    secondary: {
      type: Object,
      required: false,
      validator: (link) => link?.label && link?.to,
    },
  },
}
</script>

<template>
  <section class="hero">
    <div class="hero__content">
      <p class="eyebrow">Remeselné pivo z dedičstva</p>
      <h1>{{ title }}</h1>
      <p class="subtitle">
        {{ subtitle }}
      </p>
      <div class="actions">
        <RouterLink class="btn btn--primary" :to="primary.to">
          {{ primary.label }}
        </RouterLink>
        <RouterLink
          v-if="secondary"
          class="btn btn--ghost"
          :to="secondary.to"
        >
          {{ secondary.label }}
        </RouterLink>
      </div>
    </div>

  </section>
  <div class="hero__image" aria-hidden="true">
    <img class="homePic" src="/img/HomeObr.png"></img>
      <div class="badge">
        <span class="badge__title">MAdFOX Brewery</span>
        <span class="badge__meta">Est. 1998</span>
      </div>
    </div>
</template>

<style>
.hero {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: center;
  padding: 2rem 1.5rem 1rem;
  text-align: center;
}

.hero__content h1 {
  font-size: clamp(2.3rem, 4vw, 3rem);
  margin: 0.25rem 0 0.75rem;
  color: #2d2a32;
  
}

.homePic {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.subtitle {
  font-size: 1.05rem;
  color: #4a4754;
  margin-bottom: 1.25rem;
  line-height: 1.6;
}

.eyebrow {
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(49, 50, 47, 1);
  font-weight: 700;
  font-size: 0.75rem;
  margin: 0;
}

.actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}

.btn {
  border-radius: 999px;
  padding: 0.65rem 1.5rem;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.15s ease, box-shadow 0.2s ease, background 0.2s;
}

.btn--primary {
  background-color: #000;
  background-image: none;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(126, 138, 87, 1);
  color: white;
  box-shadow: 0 10px 30px rgba(109, 130, 199, 0.25);
}

.btn--ghost {
  border: 1px solid #7e8a57;
  color: #2d2a32;
  background: white;
}

.btn:hover {
  transform: translateY(-2px);
}

.hero__image {
  width: 100%;
  height: 100%;
  min-height: 220px;
  background: radial-gradient(circle at 30% 30%, #f1f4ff, #d9e1ff);
  border-radius: 18px;
  position: relative;
  overflow: hidden;
}

.badge {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  background: #2d2a32;
  color: #f5f6f8;
  padding: 1rem 1.25rem;
  border-radius: 14px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16);
  text-align: right;
}

.badge__title {
  display: block;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.badge__meta {
  display: block;
  color: #c7c9d3;
  font-size: 0.85rem;
}
</style>
