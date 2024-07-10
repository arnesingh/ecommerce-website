// src/components/ProductCard.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded-t-lg"/>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="mt-2 text-gray-600">Rs.{product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}

export default ProductCard;
