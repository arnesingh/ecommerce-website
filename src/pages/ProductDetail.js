// src/pages/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Fetch product details using id
  const product = { id, name: 'Product 1', price: 29.99, description: 'Product description', image: 'path/to/image.jpg' };

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src={product.image} alt={product.name} className="w-full"/>
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="mt-4 text-gray-600">${product.price}</p>
          <p className="mt-4">{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
