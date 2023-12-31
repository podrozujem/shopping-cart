import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../../shared/Button/Button';

import { removeFromCart, toggleQuantity } from '../../../redux/actions/cartActions';

import './cartItem.css';

function CartItem({ product }) {
  const { id, title, price, description, image } = product;
  const { quantity } = useSelector((state) => state.cart.cartItems.find((item) => item.id === product.id));

  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleLess = () => {
    if (quantity === 1) {
      dispatch(removeFromCart(product));
    } else {
      dispatch(toggleQuantity(id, 'less'));
    }
  };

  const handleMore = () => {
    console.log('handle more');
    dispatch(toggleQuantity(id, 'more'));
  };
  return (
    <>
      <div className="cart-item">
        <div className="cart-item__image">
          <img className="cart-item__image-position" src={image} alt="Cart item" />
        </div>

        <div className="cart-item__details">
          <div className="cart-item__title">{title}</div>
          <div className="cart-item__description">{description}</div>
        </div>

        <div className="cart-item__actions">
          <div className="cart-item__price">${price * quantity}</div>

          <div className="cart-item__toggle-quantity">
            <Button className="button--minus" onClick={handleLess} textContent="-" />
            <span className="cart-item__quantity"> {quantity} </span>
            <Button className="button--plus" onClick={handleMore} textContent="+" />
          </div>

          <Button className="button--remove" onClick={() => handleRemoveFromCart(product)} textContent="Remove" />
        </div>
      </div>

      <div>
        <hr />
      </div>
    </>
  );
}

export default CartItem;
