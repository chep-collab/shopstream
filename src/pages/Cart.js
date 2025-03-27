import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, IconButton, Button, Snackbar, Alert } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setSnackbarOpen(true);
    clearCart();
  };

  return (
    <Box sx={{ p: 3, bgcolor: '#f5f5f5' }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1" textAlign="center">
          Your cart is empty.
        </Typography>
      ) : (
        <>
          <List>
            {cartItems.map((item) => (
              <ListItem
                key={item.id}
                secondaryAction={
                  <IconButton edge="end" onClick={() => removeFromCart(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText
                  primary={`${item.name} (x${item.quantity})`}
                  secondary={`$${item.price.toFixed(2)} each | Total: $${(item.price * item.quantity).toFixed(2)}`}
                />
              </ListItem>
            ))}
          </List>
          <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
            Total: ${totalPrice.toFixed(2)}
          </Typography>
          <Box textAlign="center" sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" onClick={handleCheckout} sx={{ mr: 2 }}>
              Checkout
            </Button>
            <Button variant="contained" color="secondary" onClick={clearCart}>
              Clear Cart
            </Button>
          </Box>
        </>
      )}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success">
          Thank you for your purchase! Your order has been placed.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Cart;

