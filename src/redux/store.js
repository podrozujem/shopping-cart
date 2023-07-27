import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './reducers/cartReducers';
import { dropdownReducer } from './reducers/dropdownReducers';

const reducer = combineReducers({
  cart: cartReducer,
  dropdown: dropdownReducer,
});

const cartItems = localStorage.getItem('cart-items')
  ? JSON.parse(localStorage.getItem('cart-items'))
  : [];

const initialState = {
  cart: { cartItems },
  dropdown: { isDropdownOpen: false },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
