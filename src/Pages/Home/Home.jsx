import React from 'react';
import ProductsList from '../../Home/ProductsList/ProductsList';
import './home.css';
import { useSelector } from 'react-redux';

const Home = () => {
  const { isDropdownOpen } = useSelector((state) => state.dropdown);

  return (
    <main className={`${isDropdownOpen ? 'dropdown-open' : ''}`}>
      <ProductsList />
    </main>
  );
};

export default Home;
