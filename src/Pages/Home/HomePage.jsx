import React from 'react';
import { useSelector } from 'react-redux';

import ProductsList from '../../Home/ProductsList/ProductsList';

const HomePage = () => {
  const { isDropdownOpen } = useSelector((state) => state.dropdown);

  return (
    <main className={`${isDropdownOpen ? 'dropdown-open' : ''}`}>
      <ProductsList />
    </main>
  );
};

export default HomePage;
