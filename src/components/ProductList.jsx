// src/components/ProductList.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice';

import monsteraImg from '../assets/images/monstera.jpg';
import snakePlantImg from '../assets/images/snake-plant.jpg';
import fiddleLeafImg from '../assets/images/fiddle-leaf.jpg';
import pothosImg from '../assets/images/pothos.jpg';
import succulentImg from '../assets/images/succulent.jpg';     // NEW
import peaceLilyImg from '../assets/images/peace-lily.jpg';   // NEW
import zzPlantImg from '../assets/images/zz-plant.jpg';       // NEW
import rubberPlantImg from '../assets/images/rubber-plant.jpg'; // NEW

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
  },
  {
    id: 5,
    name: 'Succulent',
    price: 12.99,
    image: succulentImg,
    description: 'Compact, low-water desert beauty',
    category: 'Easy Care'
  },
  {
    id: 6,
    name: 'Peace Lily',
    price: 24.99,
    image: peaceLilyImg,
    description: 'Elegant white flowers, air-purifying',
    category: 'Flowering'
  },
  {
    id: 7,
    name: 'ZZ Plant',
    price: 34.99,
    image: zzPlantImg,
    description: 'Glossy dark leaves, extremely hardy',
    category: 'Indoor'
  },
  {
    id: 8,
    name: 'Rubber Plant',
    price: 39.99,
    image: rubberPlantImg,
    description: 'Shiny, bold leaves – classic houseplant',
    category: 'Trendy'
  }
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="product-list-page">
      <h2>Our Plants Collection (8 Varieties)</h2>
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
            <button 
              className="add-to-cart"
              onClick={() => dispatch(addItem(plant))}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;