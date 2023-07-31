import React from 'react';

import img from '../../assets/images/empty.gif';
import './emptylist.css';

const EmptyList = () => {
  return (
    <div className="empty-list">
      <img src={img} alt="empty" className="empty-list__img" />
      <div className="empty-list__text">Your cart is empty, add something in the shop.</div>
    </div>
  );
};

export default EmptyList;
