import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, TextField, CircularProgress, Snackbar, Alert } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion'; // Import framer-motion

const products = [
  { id: 1, name: 'Laptop', price: 999.99, description: 'High-performance laptop for work and gaming.', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a0a6?w=150' },
  { id: 2, name: 'Smartphone', price: 699.99, description: 'Latest smartphone with advanced features.', image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=150' },
  { id: 3, name: 'Headphones', price: 99.99, description: 'Noise-cancelling headphones for immersive audio.', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150' },
];

const Home = () => {
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState({});
  const [loading, setLoading] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);

  useEffect(() => {
    // Simulate fetching products from an API
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleQuantityChange = (productId, value) => {
    setQuantities((prev) => ({ ...prev, [productId]: parseInt(value) || 1 }));
  };

  const handleAddToCart = (product) => {
    addToCart(product, quantities[product.id] || 1);
    setAddedProduct(product);
    setSnackbarOpen(true);
  };

  // Animation variants for the product cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Staggered animation for each card
        duration: 0.5,
      },
    }),
    hover: {
      scale: 1.05,
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Shop Now Banner */}
      <Box
        sx={{
          bgcolor: '#2E7D32',
          color: 'white',
          p: 3,
          mb: 3,
          textAlign: 'center',
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Welcome to Online Shopping!
        </Typography>
        <Typography variant="body1" paragraph>
          Discover amazing products at great prices.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Shop Now
        </Button>
      </Box>

      <Typography variant="h4" gutterBottom textAlign="center">
        Our Products
      </Typography>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <motion.div
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={cardVariants}
              >
                <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2, boxShadow: 1 }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
                  />
                  <Typography variant="h6" sx={{ mt: 1 }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                    ${product.price.toFixed(2)}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    <TextField
                      label="Quantity"
                      type="number"
                      value={quantities[product.id] || 1}
                      onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                      inputProps={{ min: 1 }}
                      sx={{ width: '100px', mr: 1 }}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleAddToCart(product)}
                      sx={{ mr: 1 }}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      component={Link}
                      to={`/product/${product.id}`}
                    >
                      View Details
                    </Button>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      )}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success">
          {addedProduct ? `${addedProduct.name} added to cart!` : 'Product added to cart!'}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Home;
