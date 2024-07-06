import React from 'react';

const Cart = ({cart,handleRemoveToCart}) => {
    return (
        <div>
            <h3>Order Summary</h3>
            <h3>Order Quantity :{cart.length}</h3>
            {
                cart.map(cart=><p key={cart._id}>{cart.name}  <button onClick={()=>handleRemoveToCart(cart)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;