<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'CtaBanner',
  components: { RouterLink },
  props: {
    heading: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    action: {
      type: Object,
      required: true,
      validator: (link) => link?.label && link?.to,
    },
  },
}
</script>

<template>
  <section class="cta">
    <div>
      <p class="eyebrow">Pripravte sa na návštevu</p>
      <h2>{{ heading }}</h2>
      <p class="body">
        {{ body }}
      </p>
    </div>
    <RouterLink class="btn" :to="action.to">
      {{ action.label }}
    </RouterLink>
  </section>
</template>

<style>
.cta {
  margin: 1.5rem 1.5rem 0;
  padding: 1.5rem;
  border-radius: 16px;
  background: linear-gradient(135deg, #aab8e6, #7e8a57);
  color: white;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.eyebrow {
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #7e8a57;
  font-weight: 700;
  font-size: 0.75rem;
  margin: 0 0 0.2rem;
}

.cta h2 {
  margin: 0 0 0.35rem;
}

.body {
  margin: 0;
  max-width: 520px;
  line-height: 1.6;
}

.btn {
  background: white;
  color: #2d2a32;
  padding: 0.65rem 1.4rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.15s ease, box-shadow 0.2s ease;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
}

.btn:hover {
  transform: translateY(-2px);
}
</style>
