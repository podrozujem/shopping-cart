import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../shared/Button/Button';

import DropdownElement from './DropdownElement/DropdownElement';

import './dropdown.css';

const Dropdown = ({ cartItems, openCart }) => {
  const navigate = useNavigate();

  const navigateToCart = () => {
    navigate('/cart');
  };

  const navigateHome = () => {
    navigate('/');
  };

  return (
    <div className={`${openCart ? 'outlook cart-items outlook--animation' : 'outlook cart-items'}`}>
      {!cartItems.length ? (
        <div>
          <div className='empty-cart'>Your cart is empty.</div>

          <div>
            <Button onClick={navigateHome} className='button--go-home' textContent='Add items' />
          </div>
        </div>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <DropdownElement item={item} key={index} />
          ))}

          <div>
            <Button
              onClick={navigateToCart}
              className='button--go-cart'
              textContent='Go to Checkout'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
