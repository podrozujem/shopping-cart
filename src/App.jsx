import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import HomePage from './Pages/Home/HomePage';
import CartPage from './Pages/Cart/CartPage';

import Navbar from './Home/NavBar/Navbar';

import './app.css';

function App() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
