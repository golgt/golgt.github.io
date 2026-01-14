<script>
import { useProductsStore } from '@/stores/counter'
import Cart from '@/components/Cart.vue'
import Order from '@/components/Order.vue'

export default {
  name: 'CartIcon',
  components: {
    Cart,
    Order,
  },
  data() {
    return {
      productsStore: useProductsStore(),
      showCart: false,
      showOrderForm: false,
    }
  },
  computed: {
    cartItemsCount() {
      return this.productsStore.cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)
    },
  },
  methods: {
    toggleCart() {
      this.showCart = !this.showCart
      if (!this.showCart) {
        this.showOrderForm = false
      }
    },
    closeCart() {
      this.showCart = false
      this.showOrderForm = false
    },
    goToOrder() {
      this.showOrderForm = true
    },
    backToCart() {
      this.showOrderForm = false
    },
  },
}
</script>

<template>
  <div class="cart-icon-wrapper">
    <v-btn
      icon="mdi-cart"
      variant="text"
      @click="toggleCart"
      class="cart-button"
      size="large"
    >
      <v-badge
        :content="cartItemsCount"
        :model-value="cartItemsCount > 0"
        color="error"
        overlap
      >
        <v-icon icon="mdi-cart" size="32"></v-icon>
      </v-badge>
    </v-btn>

    <v-dialog
      v-model="showCart"
      max-width="900"
      scrollable
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-card-title class="cart-dialog-header">
          <span class="text-h6">
            <v-icon 
              :icon="showOrderForm ? 'mdi-file-document-edit' : 'mdi-cart'" 
              class="mr-2"
            ></v-icon>
            {{ showOrderForm ? 'Objednávka' : 'Košík' }}
            <span v-if="!showOrderForm && cartItemsCount > 0" class="item-count">
              ({{ cartItemsCount }} {{ cartItemsCount === 1 ? 'položka' : 'položiek' }})
            </span>
          </span>
          <v-spacer></v-spacer>
          <v-btn
            v-if="showOrderForm"
            icon="mdi-arrow-left"
            variant="text"
            @click="backToCart"
            class="mr-2"
          ></v-btn>
          <v-btn
            icon="mdi-close"
            variant="text"
            @click="closeCart"
          ></v-btn>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text class="cart-dialog-content">
          <Cart 
            v-if="!showOrderForm" 
            :hide-header="true"
            @go-to-order="goToOrder"
          />
          <Order v-else />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<style>
.cart-icon-wrapper {
  position: relative;
}

.cart-button {
  color: inherit;
}

.cart-dialog-header {
  display: flex;
  align-items: center;
  padding: 1.25rem 1.5rem;
  background: #f5f5f5;
}

.item-count {
  font-size: 0.9rem;
  font-weight: 400;
  color: #7b7a86;
  margin-left: 0.5rem;
}

.cart-dialog-content {
  padding: 0;
  max-height: 70vh;
  overflow-y: auto;
}
</style>
