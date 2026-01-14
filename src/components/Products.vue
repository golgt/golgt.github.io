<script>
import { useProductsStore } from '@/stores/counter'


export default {
  name: 'Products',
  props: {
    items: {
        type: Array,
        required: true,
    },
    headerTitle:{
        type: String,
        required: true,
    },
    headerName:{
        type: String,
        required: true,
    }
  },
  data() {
    return {
      productsStore: useProductsStore(),
      openIds: [],
    }
  },
  methods: {
    isOpen(id) {
      return this.openIds.includes(id)
    },
    toggle(id) {
      if (this.isOpen(id)) {
        this.openIds = this.openIds.filter(x => x !== id)
      } else {
        this.openIds.push(id)
      }
    },
    addItems(item) {
      this.productsStore.addItems(item)
    },
  },
}
</script>

<template>
  <main class="products">
    <section class="products-header">
      <p class="eyebrow">{{ headerTitle }}</p>
      <h1 class="product-title">{{ headerName }}</h1>
      
      <v-container class="products-container">
        <v-row dense justify="center">
          <v-col
            v-for="item in items"
            :key="item.id"
            cols="12"
            md="5"
          >
            <v-card class="mx-auto" max-width="650">
              <v-img
                height="400px"
                :src="item.src"
                cover
              ></v-img>

              <v-card-title>{{ item.name }}</v-card-title>

              <v-card-subtitle>
                {{ item.price.toFixed(2) }} € {{ item.packageSize }} 
              </v-card-subtitle>

              <v-card-actions>
                <v-btn
                  color="orange-lighten-2"
                  @click="addItems(item)"
                >
                  Pridať do košíka
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                  :icon="isOpen(item.id) ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                  @click="toggle(item.id)"
                ></v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="isOpen(item.id)">
                  <v-divider></v-divider>

                  <v-card-text>
                    {{ item.description }}
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <Cart />
  </main>
</template>

<style>
.products {
  display: grid;
  gap: 1.5rem;
  
}

.products-container {
  max-width: 1200px;
  margin: 0 auto;
}

.products-header {
  max-width: 1040px;
  margin: 0 auto 1.5rem;
  padding-top: 2rem;
}

.products-title {
  font-size: clamp(2rem, 3.4vw, 2.6rem);
  margin: 0.4rem 0 0.6rem;
  color: #2d2a32;
}

</style>
