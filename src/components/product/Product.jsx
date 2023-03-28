import React from 'react';
import './Product.css'

const Product = (pro) => {
  const {name, price, img, seller,ratings} = pro.product
  // console.log(pro.product);
  return (
    <div className='product'>
      <img src={img} alt="" />
     <div className="product-info">
     <h6 className='p-name'>{name}</h6>
      <p className='p-price'>Price:${price}</p>
      <p>Manufacturer: {seller}</p>
      <p>Ratings: {ratings}</p>
     </div>
        <button className='btn'>Add to Cart</button>
    </div>
  );
};

export default Product;