import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const {cart}=props;
    console.log(cart);
    let total=0;
    let shipping=0;
    
    let quantity=0;

    for(const product of cart ){
        total+=product.price *product.quantity;
        shipping+=product.shipping;
        quantity+=product.quantity;
    }
    const tax=(total*0.1).toFixed(2);
    const grandTotal= parseFloat((total+shipping+parseFloat(tax)));
  
    return (
        <div className='cart'>
            <h3>Order Summary </h3>
            <p>Selected Item :{quantity}</p>
            <p>Total Price :${total}</p>
            <p>Total Shipping :{shipping}</p>
            <p>Tax :{tax}</p>
            <h5>Grand Total :{grandTotal}</h5>
        </div>
    );
};

export default Cart;