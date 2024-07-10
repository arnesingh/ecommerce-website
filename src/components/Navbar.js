// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-xl">E-Shop</a>
        <div className="space-x-4">
          <a href="/" className="text-gray-300">Home</a>
          <a href="/cart" className="text-gray-300">Cart</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
