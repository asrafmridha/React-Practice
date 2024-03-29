import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() =>{
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
        }, []);

        const handleAddToCart =(product)=>{
            const newCart=[...cart,product];
            setCart(newCart);

     
        }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=><Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <p>Selected Item :{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;