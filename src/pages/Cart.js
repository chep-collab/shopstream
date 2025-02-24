import React from 'react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={`./assets/${item.image}`} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && <button className="checkout-btn">Proceed to Checkout</button>}
    </div>
  );
}

export default Cart;

