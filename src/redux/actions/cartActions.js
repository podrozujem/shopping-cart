import { ADD_CART_ITEM, REMOVE_CART_ITEM, TOGGLE_QUANTITY } from '../constants/cartConstants';

export const addToCart = (product) => (dispatch, getState) => {
  const { id, title, price, description, image } = product;
  dispatch({
    type: ADD_CART_ITEM,
    payload: { id, title, price, description, image, quantity: 1 },
  });

  localStorage.setItem('cart-items', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (product) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: product,
  });

  localStorage.setItem('cart-items', JSON.stringify(getState().cart.cartItems));
};

export const toggleQuantity = (id, toggle) => (dispatch, getState) => {
  dispatch({
    type: TOGGLE_QUANTITY,
    payload: { id, toggle },
  });
  console.log('1');
  localStorage.setItem('cart-items', JSON.stringify(getState().cart.cartItems));
};
