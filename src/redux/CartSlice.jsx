// src/redux/CartSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],  // array of items: [{ id, name, price, quantity, image }, ...]

  reducers: {
    // Required reducer 1: addItem
    addItem: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({
          ...action.payload,
          quantity: 1
        });
      }
    },

    // Required reducer 2: removeItem
    removeItem: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },

    // Required reducer 3: updateQuantity
    updateQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        // Optional: remove if quantity becomes 0
        if (item.quantity <= 0) {
          return state.filter(i => i.id !== action.payload.id);
        }
      }
    }
  }
});

// Export the actions (these will be used in components)
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export the reducer (this goes into the store)
export default cartSlice.reducer;