import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from './context/CartContext';

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import AdminDashboard from "./pages/AdminDashboard";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";

// Create a new component to use the useCart hook
const AppContent = () => {
  const { cartItems } = useCart(); // Now this will work because AppContent is inside CartProvider

  return (
    <Router>
      {/* Navigation */}
      <AppBar position="static" sx={{ bgcolor: '#2E7D32' }}>
        <Toolbar>
          <ShoppingCartIcon sx={{ mr: 1 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Online Shopping
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/cart">
            Cart ({cartItems.length})
          </Button>
          <Button color="inherit" component={Link} to="/admin">
            Admin Dashboard
          </Button>
        </Toolbar>
      </AppBar>

      {/* Page Routes */}
      <Box sx={{ minHeight: 'calc(100vh - 112px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
};

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;






