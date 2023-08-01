import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../../shared/Button/Button';

import { addToCart } from '../../../redux/actions/cartActions';

import './productitem.css';

const ProductItem = ({ product }) => {
  const { title, price, description, image } = product;
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className='product-item'>
      <img className='product-item__img' src={image} alt='img' />
      {/* <table>
        <tbody>
          <tr>
            <td className='product-item__title'>{title}</td>
            <td className='product-item__price'>{price}$</td>
          </tr>
        </tbody>
      </table>
      <p className='product-item__description'>{description}</p> */}

      <div className='product-item__details'>
        <div className='product-item__title'>{title}</div>
        <div className='product-item__price'>{price}$</div>
      </div>

      <p className='product-item__description'>{description}</p>

      <div className='button'>
        <Button
          className='button button--add'
          onClick={() => handleAddToCart(product)}
          textContent='Add to Cart'
        />
      </div>
    </div>
  );
};

export default ProductItem;
