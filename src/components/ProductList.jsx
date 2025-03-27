import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

const products = [
  { id: 1, name: 'Laptop', price: 999.99, description: 'High-performance laptop for work and gaming.' },
  { id: 2, name: 'Smartphone', price: 699.99, description: 'Latest smartphone with advanced features.' },
  { id: 3, name: 'Headphones', price: 99.99, description: 'Noise-cancelling headphones for immersive audio.' },
];

const ProductList = ({ addToCart }) => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                ${product.price.toFixed(2)}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => addToCart(product)}
                sx={{ mt: 2 }}
              >
                Add to Cart
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;