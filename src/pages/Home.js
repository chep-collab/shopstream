import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Home = () => {
  const { addToCart } = useCart(); // Get addToCart function from context

  const products = [
    { id: 1, name: "Bodycon Dress", price: 49.99, image: "/images/bodycon-dress.jpg" },
    { id: 2, name: "Evening Gown", price: 129.99, image: "/images/evening-gown.jpg" },
    { id: 3, name: "Floral Dress", price: 39.99, image: "/images/floral-dress.jpg" },
    { id: 4, name: "Little Black Dress", price: 59.99, image: "/images/little-black-dress.jpg" },
    { id: 5, name: "Maxi Dress", price: 99.99, image: "/images/maxi-dress.jpg" },
    { id: 6, name: "Sun Dress", price: 69.99, image: "/images/sun-dress.jpg" },
  ];

  return (
    <div className="home-container">
      <h1>Ladies' Dresses Collection</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <div className="actions">
              <button onClick={() => addToCart(product)} className="add-to-cart-btn">
                Add to Cart
              </button>
              <Link to={`/product/${product.id}`} className="details-link">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
