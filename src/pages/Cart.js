// src/pages/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      <div className="mt-4">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mt-4">
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-gray-600">${item.price}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 bg-red-500 text-white py-2 px-4 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
              <button
                onClick={clearCart}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
