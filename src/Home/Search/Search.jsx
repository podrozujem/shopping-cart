import React, { useState } from 'react';
import './search.css';

const Search = ({ keyword }) => {
  const handleOnChange = (e) => {
    keyword(e.target.value);
  };

  return (
    <div className='search'>
      <input
        type='text'
        placeholder='Search products'
        className='search__input'
        onChange={handleOnChange}
      ></input>
    </div>
  );
};

export default Search;
