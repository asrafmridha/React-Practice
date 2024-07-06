import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../TShirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = (tshirt) => {
        const existingCartItem = cart.find(ts => ts._id === tshirt._id);
        if (existingCartItem) {
            alert("Item Already Added In Cart");
        } else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    }
    const handleRemoveToCart=(tshirt)=>{
        const remainingItem= cart.filter(ts=>ts._id!==tshirt._id);
        setCart(remainingItem);
    }
    return (
        <div className='home-container'>
            <div className="t-shirt-container">
                {
                    tshirts.map(tshirt => <Tshirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleRemoveToCart={handleRemoveToCart}></Cart>
            </div>
        </div>
    );
};

export default Home;