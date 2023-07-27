import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EmptyList from '../../components/EmptyList/EmptyList';
import './blog.css';
import Cart from '../../Home/Cart/cart';

const Blog = () => {
  const { id } = useParams();

  const { cartItems, total } = useSelector((state) => state.cart);

  return <div>{!cartItems.length ? <EmptyList /> : <Cart cartItems={cartItems} />}</div>;
};

export default Blog;
