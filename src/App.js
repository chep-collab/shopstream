import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Home from "./pages/Home"; // Your Home component
import Cart from "./pages/Cart"; // Your Cart component
import AdminDashboard from "./pages/AdminDashboard"; // Your AdminDashboard component
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer"; 

function App() {
  return (
    <CartProvider>
      <Router>
        {/* Global Navigation Links */}
        <div className="navigation">
          <nav>
            <ul style={{ display: "flex", listStyleType: "none", padding: "1rem", gap: "1rem" }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/admin">Admin Dashboard</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer /> 
      </Router>
    </CartProvider>
  );
}

export default App;






