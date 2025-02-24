import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Online Marketplace
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/cart" className="text-white">Cart</Link>
          <Link to="/admin" className="text-white">Admin</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
