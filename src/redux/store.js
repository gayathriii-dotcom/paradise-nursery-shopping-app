// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';  // ← import the slice reducer

const store = configureStore({
  reducer: {
    cart: cartReducer  // cart slice manages the cart state
  }
});

export default store;