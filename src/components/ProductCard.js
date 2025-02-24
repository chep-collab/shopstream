import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>
      <Link
        to={`/product/${product.id}`} // Ensure this matches the route in App.js
        className="text-blue-500 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;



