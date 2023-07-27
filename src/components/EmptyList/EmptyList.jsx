import React from 'react';
import './emptylist.css';

const EmptyList = () => {
  return (
    <div className='emptyList-wrap'>
      <img src='/assets/images/13525-empty.gif' alt='empty' />
      <div className='empty-text'>Your cart is empty, add something in the shop.</div>
    </div>
  );
};

export default EmptyList;
