import React from 'react';

import CartItem from './CartItems/CartItem';

import './cart.css';

const Cart = ({ cartItems }) => {
  const total = cartItems.length > 0 ? cartItems.reduce((acc, product) => acc + product.price * product.quantity, 0) : 0;

  return (
    <div className="cart-list">
      <div className="cart-list__title">
        <h2>Your Cart</h2>
      </div>

      {cartItems.map((cartItems, index) => (
        <CartItem product={cartItems} key={index} />
      ))}

      <div className="cart-list__total-pricing">
        <div className="cart-list__total-word">Total</div>
        <div className="cart-list__total-number">${total}</div>
      </div>
    </div>
  );
};

export default Cart;
