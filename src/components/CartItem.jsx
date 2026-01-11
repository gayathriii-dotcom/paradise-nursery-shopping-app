// src/components/CartItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  // Safety check in case item is undefined
  if (!item) return null;

  return (
    <div className="cart-item">
      <img 
        src={item.image} 
        alt={item.name || 'Plant'} 
        className="cart-item-image" 
      />

      <div className="cart-item-info">
        <h4>{item.name || 'Unnamed Plant'}</h4>
        <p>${(item.price || 0).toFixed(2)} × {item.quantity || 1}</p>
        <p className="subtotal">
          Subtotal: ${(item.price * (item.quantity || 1)).toFixed(2)}
        </p>
      </div>

      <div className="cart-controls">
        <button
          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: (item.quantity || 1) - 1 }))}
        >
          -
        </button>
        <span>{item.quantity || 1}</span>
        <button
          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: (item.quantity || 1) + 1 }))}
        >
          +
        </button>
        <button
          className="remove-btn"
          onClick={() => dispatch(removeItem({ id: item.id }))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;