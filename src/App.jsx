// src/App.jsx
import { useState } from 'react'
import AboutUs from './components/AboutUs';
import { useSelector } from 'react-redux'  // ← NEW: to show cart count
import './App.css'
import background from './assets/images/plants.jpg'
import ProductList from './components/ProductList'
import Cart from './components/Cart'  // ← make sure this import is there

function App() {
  const [showProducts, setShowProducts] = useState(false)
  const [showCart, setShowCart] = useState(false)  // NEW state for cart visibility

  const cartItems = useSelector(state => state.cart)  // ← gets current cart from Redux

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <div
      className="landing"
      style={{
        backgroundImage: `url("${background}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0
      }}
    >
      {showCart ? (
        <div className="cart-container">
          <button 
            className="back-button"
            onClick={() => setShowCart(false)}
          >
            ← Back to Products
          </button>
          <Cart />
        </div>
      ) : showProducts ? (
        <div className="products-container">
          {/* Cart button with count */}
          <button 
            className="cart-button"
            onClick={() => setShowCart(true)}
          >
            🛒 View Cart {cartCount > 0 && `(${cartCount})`}
          </button>

          {/* Back to home */}
          <button 
            className="back-button"
            onClick={() => setShowProducts(false)}
          >
            ← Back to Home
          </button>

          <ProductList />
        </div>
      ) : (
        <div className="welcome-box">
          <h1>Welcome to Paradise Nursery</h1>
          <p>Discover a world of beautiful plants for your home</p>
          <AboutUs />  {}
          <button
            className="get-started"
            onClick={() => setShowProducts(true)}
          >
            Get Started
          </button>
        </div>
      )}
    </div>
  )
}

export default App