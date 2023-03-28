import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'


const shop = () => {
  let [products, setProducts] = useState([])

  useEffect(()=> {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

  let [cart, setCart] = useState([])


  const handleAddtoCart = (product) => {
    let newCart = [...cart, product]
    setCart(newCart)
    // console.log(newCart.length);
  }


  return (
    <div className='shop-container'>
      <div className="product-container">
      {

        products.map((product => {
          return <Product 
          key={product.id} 
          product={product}
          handleAddtoCart={handleAddtoCart}
          />
        }))
      }
      </div>
      <div className="cart-container">
       <Cart Cart={cart} cartNum={cart.length}/>
      </div>
      
    </div>
  );
};

export default shop;