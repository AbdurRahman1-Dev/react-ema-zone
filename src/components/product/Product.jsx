import React, { useState } from 'react';
import './Product.css'

const Product = (pro) => {
  const {name, price,id, img, seller,ratings} = pro.product

  return (
    <div className='product'>
      <img src={img} alt="" />
     <div className="product-info">
     <h6 className='p-name'>{name}</h6>
      <p className='p-price'>Price:${price}</p>
      <p>Manufacturer: {seller}</p>
      <p>Ratings: {ratings}</p>
     </div>
        <button onClick={() => pro.handleAddtoCart(pro.product)} className='btn'>Add to Cart</button>
    </div>
  );
};

export default Product;