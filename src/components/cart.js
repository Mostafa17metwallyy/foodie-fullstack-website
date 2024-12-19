// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  // Calculate the total price of items in the cart
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
          <button onClick={clearCart} className="secondary-button">Clear Cart</button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
