// src/pages/Home.js
import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: 'assests/1.jpg' },
  { id: 2, name: 'Product 2', price: 39.99, image: 'assests/dummy4.jpg' },
  // Add more products as needed
];

const Home = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
