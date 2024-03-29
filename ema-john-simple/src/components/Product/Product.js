import React from 'react';
import  './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name,img,seller,price,ratings} =props.product;
    return (
        <div className='product'>
            <img src={img} alt="imgnai" />
            <div className='product-info'>
                <p>{name}</p>
                <p>Price :{price}</p>
                <p><small>Seller :{seller}</small></p>
                <p><small>Ratings :{ratings}</small></p>
            </div>
            <button className='btn-cart' onClick={() =>props.handleAddToCart(props.product)}>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;