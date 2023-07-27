import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem/ProductItem';
import Search from '../Search/Search';
import Sort from '../Sort/Sort';
import './productslist.css';
import loading_logo from '../../images/Loading_icon.gif';

const ProductsList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    axios
      .get('https://my-json-server.typicode.com/brankostancevic/products/products')
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  useEffect(() => {}, [trigger]);

  const searchedProducts = data.filter((product) => {
    return keyword
      .toLowerCase()
      .split(' ')
      .map((word) => {
        return product.title.toLowerCase().includes(word);
      })
      .every((i) => i);
  });

  const sortByPriceAsc = () => {
    data.sort((a, b) => a.price - b.price);
    setTrigger((prevState) => !prevState);
    console.log('asc', data);
  };

  const sortByPriceDsc = () => {
    data.sort((a, b) => b.price - a.price);
    setTrigger((prevState) => !prevState);
  };

  const sortByTitleAsc = () => {
    data.sort((a, b) => {
      const at = a.title.toLowerCase();
      const bt = b.title.toLowerCase();

      if (at > bt) {
        return 1;
      }
      if (bt > at) {
        return -1;
      }

      return 0;
    });
    //data.sort()
    setTrigger((prevState) => !prevState);
  };

  const sortByTitleDsc = () => {
    data.sort((a, b) => {
      const at = a.title.toLowerCase();
      const bt = b.title.toLowerCase();

      if (at < bt) {
        return 1;
      }
      if (bt < at) {
        return -1;
      }

      return 0;
    });
    //data.sort().reverse()
    setTrigger((prevState) => !prevState);
  };

  const handleKeyword = (title) => {
    setKeyword(title);
  };

  let content = (
    <div className='loading'>
      <img src={loading_logo} alt='loading'></img>
    </div>
  );

  if (!isLoading) {
    if (isError) {
      content = 'Something went wrong.';
    } else {
      content = (
        <>
          <Search keyword={handleKeyword} />
          <Sort
            clasName='sort'
            sort={{ sortByPriceAsc, sortByPriceDsc, sortByTitleAsc, sortByTitleDsc }}
          />
          <div className='blog-list'>
            {searchedProducts.map((data, index) => (
              <ProductItem product={data} key={index} />
            ))}
          </div>
        </>
      );
    }
  }

  return content;
};

export default ProductsList;
