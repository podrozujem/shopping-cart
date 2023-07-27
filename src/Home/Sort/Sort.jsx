import React, { useState } from 'react';
import './Sort.css';

const Sort = ({ sort }) => {
  const [trigger, setTrigger] = useState(false);

  return (
    <>
      <div className='sort-container'>
        <div className='button button--sort'>
          <button onClick={sort.sortByPriceAsc}>Price asc</button>
          <button onClick={sort.sortByPriceDsc}>Price dsc</button>
          <button onClick={sort.sortByTitleAsc}>Title asc</button>
          <button onClick={sort.sortByTitleDsc}>Title dsc</button>
        </div>
      </div>
    </>
  );
};

export default Sort;
