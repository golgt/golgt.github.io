import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore("cart", () => {
  const cartItems = ref([]);
  
  //getter
  const sortItems = computed(() =>
  [...cartItems.value].sort((a, b) => b.id - a.id ));
  
  // computed pre celkovú cenu
  const totalPrice = computed(() => {
    return cartItems.value.reduce((total, item) => {
      const quantity = item.quantity || 1;
      return total + (item.price * quantity);
    }, 0);
  });
  
  //actions
  const addItems = (item) => {
    const existingItem = cartItems.value.find((x) => x.id === item.id);
    if (existingItem) {
      // Ak produkt už existuje, zvýš množstvo
      existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
      // Ak produkt neexistuje, pridaj ho s množstvom 1
      cartItems.value.push({ ...item, quantity: 1 });
    }
  };
  
  const removeItems = (id) => {
    cartItems.value = cartItems.value.filter((x) => x.id !== id);
  };
  
  const increaseQuantity = (id) => {
    const item = cartItems.value.find((x) => x.id === id);
    if (item) {
      item.quantity = (item.quantity || 1) + 1;
    }
  };
  
  const decreaseQuantity = (id) => {
    const item = cartItems.value.find((x) => x.id === id);
    if (item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        // Ak je množstvo 1, odstráň produkt z košíka
        removeItems(id);
      }
    }
  };
  
  const cleanCart = () => {
    cartItems.value  = []
  }

  return {
    cartItems, 
    sortItems, 
    totalPrice,
    addItems, 
    removeItems,
    increaseQuantity,
    decreaseQuantity,
    cleanCart,
  };
});