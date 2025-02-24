import React from "react";
import { useParams } from "react-router-dom"; // This will get the dynamic params from the URL

const ProductDetail = () => {
  const { id } = useParams();  // Get product ID from the URL

  // Hardcoded products for demonstration purposes
  const products = [
    { id: 1, name: "Bodycon Dress", price: 49.99, image: "/images/bodycon-dress.jpg" },
    { id: 2, name: "Evening Gown", price: 129.99, image: "/images/evening-gown.jpg" },
    { id: 3, name: "Floral Dress", price: 39.99, image: "/images/floral-dress.jpg" },
    { id: 4, name: "Little Black Dress", price: 59.99, image: "/images/little-black-dress.jpg" },
    { id: 5, name: "Maxi Dress", price: 99.99, image: "/images/maxi-dress.jpg" },
    { id: 6, name: "Sun Dress", price: 69.99, image: "/images/sun-dress.jpg" },
  ];

  // Find the product with the corresponding ID
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="product-detail-container">
    <div className="product-detail">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">${product.price}</p>
        <p>{product.description}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
    </div>
    </div>
    </div>
  );
};

export default ProductDetail;


