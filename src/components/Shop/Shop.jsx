import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css'
const shop = () => {
  let [products, setProducts] = useState([])

  useEffect(()=> {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

  return (
    <div className='shop-container'>
      <div className="product-container">
      {

        products.map((product => {
          return <Product key={product.id} product={product}/>
        }))
      }
      </div>
      <div className="cart-container">
        <h1>order summery</h1>
      </div>
      
    </div>
  );
};

export default shop;