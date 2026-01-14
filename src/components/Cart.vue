<script>
import { useProductsStore } from '@/stores/counter'

export default {
  name: 'Cart',
  props: {
    hideHeader: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      productsStore: useProductsStore(),
    }
  },
  computed: {
    totalPrice() {
      return this.productsStore.totalPrice
    },
  },
  methods: {
    removeItems(id) {
      this.productsStore.removeItems(id)
    },
    increaseQuantity(id) {
      this.productsStore.increaseQuantity(id)
    },
    decreaseQuantity(id) {
      this.productsStore.decreaseQuantity(id)
    },
    handleContinueToOrder() {
      // Ak je v dialógu (hideHeader), emitni event
      if (this.hideHeader) {
        this.$emit('go-to-order')
      } else {
        // Inak použij router
        this.$router.push({ name: 'order' })
      }
    },
  },
}
</script>

<template>
  <section class="cart-section">
    <div v-if="!hideHeader" class="cart-header">
      <h2 class="section-title">
        <v-icon icon="mdi-cart" class="mr-2"></v-icon>
        Košík
        <span v-if="productsStore.cartItems.length > 0" class="item-count">
          ({{ productsStore.cartItems.length }})
        </span>
      </h2>
    </div>

    <div v-if="productsStore.cartItems.length === 0" class="empty-cart">
      <v-icon icon="mdi-cart-off" size="64" color="grey-lighten-1"></v-icon>
      <p class="empty-text">Váš košík je prázdny</p>
      <p class="empty-subtext">Pridajte produkty do košíka a vráťte sa sem na dokončenie objednávky.</p>
    </div>

    <v-card v-else class="cart-card mx-auto" max-width="900" elevation="2">
      <v-card-title class="cart-card-title">
        <span>Produkty v košíku</span>
      </v-card-title>
      
      <v-divider></v-divider>

      <div class="cart-items">
        <div
          v-for="item in productsStore.sortItems"
          :key="item.id"
          class="cart-item"
        >
          <div class="item-image">
            <v-img
              v-if="item.src"
              :src="item.src"
              cover
              height="100"
              width="100"
              class="rounded"
            ></v-img>
            <v-icon v-else icon="mdi-beer" size="48" color="grey-lighten-1"></v-icon>
          </div>

          <div class="item-details">
            <h3 class="item-name">{{ item.name }}</h3>
            <p class="item-price-unit">{{ item.price.toFixed(2) }} € / ks</p>
          </div>

          <div class="item-quantity">
            <div class="quantity-controls">
              <v-btn
                icon="mdi-minus"
                size="small"
                variant="outlined"
                @click="decreaseQuantity(item.id)"
                :disabled="(item.quantity || 1) <= 1"
              ></v-btn>
              <span class="quantity-value">{{ item.quantity || 1 }}</span>
              <v-btn
                icon="mdi-plus"
                size="small"
                variant="outlined"
                @click="increaseQuantity(item.id)"
              ></v-btn>
            </div>
          </div>

          <div class="item-total">
            <p class="item-price-total">{{ ((item.price || 0) * (item.quantity || 1)).toFixed(2) }} €</p>
          </div>

          <div class="item-actions">
            <v-btn
              icon="mdi-delete-outline"
              size="small"
              variant="text"
              color="error"
              @click="removeItems(item.id)"
            ></v-btn>
          </div>
        </div>
      </div>
      
      <v-divider class="mt-4"></v-divider>
      
      <v-card-actions class="cart-summary">
        <div class="summary-content">
          <div class="summary-row">
            <span class="summary-label">Celkom položiek:</span>
            <span class="summary-value">{{ productsStore.cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0) }} ks</span>
          </div>
          <v-divider class="my-2"></v-divider>
          <div class="summary-row total">
            <span class="summary-label">Celková cena:</span>
            <span class="summary-value total-price">{{ totalPrice.toFixed(2) }} €</span>
          </div>
        </div>
      </v-card-actions>

      <v-card-actions class="cart-actions">
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          size="large"
          variant="flat"
          prepend-icon="mdi-arrow-right"
          @click="handleContinueToOrder"
        >
          Pokračovať k objednávke
        </v-btn>
      </v-card-actions>
    </v-card>
  </section>
</template>

<style>
.cart-section {
  margin-top: 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
}

.cart-header {
  margin-bottom: 1.5rem;
}

.section-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  color: #2d2a32;
}

.item-count {
  font-size: 1rem;
  font-weight: 400;
  color: #7b7a86;
  margin-left: 0.5rem;
}

.empty-cart {
  text-align: center;
  padding: 4rem 2rem;
  background: #fafafa;
  border-radius: 12px;
  border: 2px dashed #e0e0e0;
}

.empty-text {
  margin: 1rem 0 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: #4a4754;
}

.empty-subtext {
  margin: 0;
  color: #7b7a86;
  font-size: 0.95rem;
}

.cart-card {
  overflow: hidden;
}

.cart-card-title {
  padding: 1.25rem 1.5rem;
  background: #f5f5f5;
  font-weight: 600;
}

.cart-items {
  padding: 1rem 0;
}

.cart-item {
  display: grid;
  grid-template-columns: 100px 1fr auto auto auto;
  gap: 1rem;
  align-items: center;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #f0f0f0;
}

.cart-item:last-child {
  border-bottom: none;
}

.item-image {
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.item-name {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d2a32;
}

.item-price-unit {
  margin: 0;
  font-size: 0.9rem;
  color: #7b7a86;
}

.item-quantity {
  display: flex;
  justify-content: center;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 0.25rem;
}

.quantity-value {
  min-width: 2.5rem;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  color: #2d2a32;
}

.item-total {
  text-align: right;
}

.item-price-total {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #2d2a32;
}

.item-actions {
  display: flex;
  justify-content: flex-end;
}

.cart-summary {
  padding: 1.5rem;
  background: #fafafa;
  flex-direction: column;
  align-items: stretch;
}

.summary-content {
  width: 100%;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
}

.summary-row.total {
  padding-top: 0.75rem;
  border-top: 2px solid #e0e0e0;
  margin-top: 0.5rem;
}

.summary-label {
  font-size: 1rem;
  color: #4a4754;
}

.summary-row.total .summary-label {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d2a32;
}

.summary-value {
  font-size: 1rem;
  font-weight: 600;
  color: #2d2a32;
}

.summary-value.total-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e88e5;
}

.cart-actions {
  padding: 1rem 1.5rem;
  background: #ffffff;
}

@media (max-width: 768px) {
  .cart-item {
    grid-template-columns: 80px 1fr;
    gap: 0.75rem;
  }

  .item-quantity,
  .item-total,
  .item-actions {
    grid-column: 2;
    justify-content: flex-start;
    margin-top: 0.5rem;
  }

  .item-total {
    text-align: left;
  }
}
</style>
