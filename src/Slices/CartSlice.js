import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price
      }
      else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.images,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        })

      }
      state.totalQuantity += 1
      state.totalAmount += newItem.price
    },
    removeFromCart(state, action) {
      const id = action.payload
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        state.totalQuantity -= existingItem.totalQuantity
        state.totalAmount -= existingItem.totalPrice
        state.items = state.items.filter(item => item.id != id)

      }
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) { 
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price
        state.totalAmount += existingItem.totalPrice
      }
    },
    removeItem(state, action){
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        existingItem.totalPrice -= newItem.price;
        state.totalAmount -= newItem.price;
      }
    }
  }
})
export const { addToCart, removeFromCart, addItem,removeItem } = cartSlice.actions
export default cartSlice.reducer