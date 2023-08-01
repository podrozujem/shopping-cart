import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';

import Dropdown from '../DropdownMenu/Dropdown';

import { openDropdown, closeDropdown } from '../../redux/actions/dropdownActions';

import logo from '../../assets/images/logo.png';

import './navbar.css';

function Navbar() {
  const { cartItems } = useSelector((state) => state.cart);
  const [openCart, setOpenCart] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (openCart) {
      dispatch(openDropdown(true));
    } else {
      dispatch(closeDropdown(false));
    }
  }, [openCart, dispatch]);

  useEffect(() => {
    let handler = () => {
      setOpenCart(false);
    };
  });

  return (
    <NavbarBs className='navigation'>
      <Container>
        <Nav>
          <NavLink to='/' as={NavLink} className='navigation__button navigation__button--logo'>
            <img src={logo} alt='logo'></img>
          </NavLink>

          <NavLink to='/cart' as={NavLink} className='navigation__button'>
            Shop
          </NavLink>

          <Button
            className='navigation__cart-icon'
            onClick={() => {
              setOpenCart(!openCart);
            }}
          >
            <svg
              className='w-10 h-10'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
              />
            </svg>
            <div className='navigation__cart-number'> {cartItems.length}</div>
          </Button>
        </Nav>

        {openCart && <Dropdown openCart={openCart} cartItems={cartItems} />}
      </Container>
    </NavbarBs>
  );
}
export default Navbar;
