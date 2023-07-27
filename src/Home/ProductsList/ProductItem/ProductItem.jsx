import React from 'react';
import './productitem.css';
import { addToCart } from '../../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const ProductItem = ({ product }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const quantity = 0;
  const { id, title, price, description, image } = product;
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className='blog-item'>
      <img className='blog-item__img' src={image} alt='img' />
      {/* <table>
        <tbody>
          <tr>
            <td className='blog-item__title'>{title}</td>
            <td className='blog-item__price'>{price}$</td>
          </tr>
        </tbody>
      </table>
      <p className='blog-item__description'>{description}</p> */}

      <div className='blog-item__details'>
        <div className='blog-item__title'>{title}</div>
        <div className='blog-item__price'>{price}$</div>
      </div>
      <p className='blog-item__description'>{description}</p>
      <div className='button'>
        <button className='button button--add' onClick={() => handleAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
