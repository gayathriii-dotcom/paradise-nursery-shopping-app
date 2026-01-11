// src/components/Cart.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart); // ← must be state.cart (your slice name)

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <h3 style={{ textAlign: 'center', color: '#555' }}>Your cart is empty</h3>;
  }

  return (
    <div className="cart-page">
      <h2>Shopping Cart ({cartItems.length} items)</h2>

      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />  // ← item is passed here!
      ))}

      <div className="cart-total">
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;