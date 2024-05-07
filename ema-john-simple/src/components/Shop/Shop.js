import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);


    useEffect(() => {
       const storedCart = getShoppingCart();
       const savedCart=[];
        for (const id in storedCart) {
            const addededProduct=products.find(product=>product.id===id);
            if(addededProduct){
                const quantity=storedCart[id];
                addededProduct.quantity=quantity;
                savedCart.push(addededProduct);
            } 
        }
        setCart(savedCart);
    },[products]);

    const handleAddToCart = (selectedProduct) => {
        let newCart=[];
        const exist= cart.find(product=>product.id===selectedProduct.id); 
        if(!exist){
            selectedProduct.quantity=1;
            newCart=[...cart,selectedProduct];
        }else{
            const rest= cart.filter(product =>product.id!==selectedProduct.id);
            selectedProduct.quantity+=1;
            newCart=[...rest,selectedProduct];
        }
        // const newCart = [...cart, product];
        setCart(newCart);
        addToDb(selectedProduct.id);


    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;