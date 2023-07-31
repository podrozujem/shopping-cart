import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

export default store;
