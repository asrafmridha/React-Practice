import React from 'react';
import  './Product.css'

const Product = (product) => {
    console.log(product);
    const {name,img,seller,price,ratings} =product.product;

    return (
        <div className='product'>
            <img src={img} alt="imgnai" />
            <p>{name}</p>
        </div>
    );
};

export default Product;