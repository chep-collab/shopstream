import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Button, TextField, Snackbar, Alert } from '@mui/material';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion'; // Import framer-motion

const products = [
  { id: 1, name: 'Laptop', price: 999.99, description: 'High-performance laptop for work and gaming.', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a0a6?w=150' },
  { id: 2, name: 'Smartphone', price: 699.99, description: 'Latest smartphone with advanced features.', image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=150' },
  { id: 3, name: 'Headphones', price: 99.99, description: 'Noise-cancelling headphones for immersive audio.', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150' },
];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h5">Product not found</Typography>
      </Box>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setSnackbarOpen(true);
  };

  // Animation for the product details
  const detailVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={detailVariants}
    >
      <Box sx={{ p: 3, maxWidth: 600, mx: 'auto' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
        />
        <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
          {product.name}
        </Typography>
        <Typography variant="body1" paragraph>
          {product.description}
        </Typography>
        <Typography variant="h5" color="primary" sx={{ mb: 2 }}>
          ${product.price.toFixed(2)}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <TextField
            label="Quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            inputProps={{ min: 1 }}
            sx={{ width: '100px', mr: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </Box>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={() => setSnackbarOpen(false)}
        >
          <Alert onClose={() => setSnackbarOpen(false)} severity="success">
            {`${product.name} added to cart!`}
          </Alert>
        </Snackbar>
      </Box>
    </motion.div>
  );
};

export default ProductDetail;


