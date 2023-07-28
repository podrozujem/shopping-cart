import React, { useState } from 'react';
import './Sort.css';

const Sort = ({ sort }) => {
  const [trigger, setTrigger] = useState(false);

  return (
    <>
      <div className='sort-container'>
        <div className='button button--sort'>
          <button onClick={sort.sortByPriceAsc}>Price ↑</button>
          <button onClick={sort.sortByPriceDsc}>Price ↓</button>
          <button onClick={sort.sortByTitleAsc}>Title ↑</button>
          <button onClick={sort.sortByTitleDsc}>Title ↓</button>
        </div>
      </div>
    </>
  );
};

export default Sort;
