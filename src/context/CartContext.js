import React, { createContext, useContext, useState } from 'react';

// Create CartContext
const CartContext = createContext();

// Custom hook to use the cart
export const useCart = () => {
  return useContext(CartContext);
};

// Cart Provider to wrap around your app and share cart state
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

