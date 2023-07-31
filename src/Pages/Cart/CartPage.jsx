import React from 'react';
import { useSelector } from 'react-redux';

import EmptyList from '../../shared/EmptyList/EmptyList';
import Cart from '../../Home/Cart/Cart';

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return <div>{!cartItems.length ? <EmptyList /> : <Cart cartItems={cartItems} />}</div>;
};

export default CartPage;
