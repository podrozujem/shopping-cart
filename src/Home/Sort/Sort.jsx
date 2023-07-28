import React, { useState } from 'react';
import './Sort.css';

const Sort = ({ sort }) => {
  const [trigger, setTrigger] = useState(false);

  return (
    <>
      <div className='sort-container'>
        <div className='sort__buttons'>
          <div className='button button--sort'>
            <button onClick={sort.sortByPriceAsc}>Price ↑</button>
          </div>
          <div className='button button--sort'>
            <button onClick={sort.sortByPriceDsc}>Price ↓</button>
          </div>
          <div className='button button--sort'>
            <button onClick={sort.sortByTitleAsc}>Title ↑</button>
          </div>
          <div className='button button--sort'>
            <button onClick={sort.sortByTitleDsc}>Title ↓</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sort;
