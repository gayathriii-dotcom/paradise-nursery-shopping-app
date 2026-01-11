// src/components/ProductList.jsx
import React from 'react';

import monsteraImg from '../assets/images/monstera.jpg';
import snakePlantImg from '../assets/images/snake-plant.jpg';
import fiddleLeafImg from '../assets/images/fiddle-leaf.jpg';
import pothosImg from '../assets/images/pothos.jpg';
// Add more imports if you downloaded extra images

const plants = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    price: 29.99,
    image: monsteraImg,
    description: 'Large, iconic leaves with natural holes',
    category: 'Indoor'
  },
  {
    id: 2,
    name: 'Snake Plant',
    price: 19.99,
    image: snakePlantImg,
    description: 'Low-maintenance, air-purifying',
    category: 'Easy Care'
  },
  {
    id: 3,
    name: 'Fiddle Leaf Fig',
    price: 49.99,
    image: fiddleLeafImg,
    description: 'Dramatic, large leaves – statement plant',
    category: 'Trendy'
  },
  {
    id: 4,
    name: 'Pothos',
    price: 14.99,
    image: pothosImg,
    description: 'Trailing vines, very forgiving',
    category: 'Beginner'
  }
];

const ProductList = () => {
  return (
    <div className="product-list-page">
      <h2>Our Plants Collection</h2>
      <div className="products-grid">
        {plants.map((plant) => (
          <div key={plant.id} className="product-card">
            <img 
              src={plant.image} 
              alt={plant.name} 
              className="product-image" 
            />
            <h3>{plant.name}</h3>
            <p className="price">${plant.price.toFixed(2)}</p>
            <p className="description">{plant.description}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;