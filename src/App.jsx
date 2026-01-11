import { useState } from 'react'
import './App.css'
import background from './assets/images/plants.jpg'
import ProductList from './components/ProductList'   // ← add this import

function App() {
  const [showProducts, setShowProducts] = useState(false)

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
        alignItems: 'center'
      }}
    >
      {showProducts ? (
        <ProductList />   // ← show the real component here
      ) : (
        <div className="welcome-box">
          <h1>Welcome to Paradise Nursery</h1>
          <p>Discover a world of beautiful plants for your home</p>
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