import React from 'react';
import './Cart.css'


const Cart = (cart) => {
  const {Cart, cartNum} = cart

  let totalPrice = 0;
  let totalShipping = 0;

  for(let price of Cart){
    totalPrice += price.price;
    totalShipping += price.shipping;
  }
  let tax = (totalPrice * 7) / 100;
  let grandtotal = totalPrice + totalShipping + tax

  return (
    <div className='stic'>
      <h3>Order Summary</h3>
      <p>selected Item: {cartNum}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping:$ {totalShipping} </p>
      <p>Tax:$ {tax.toFixed(2)} </p>
      <h4>Grand Total:$ {grandtotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;