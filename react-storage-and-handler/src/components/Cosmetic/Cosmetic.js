import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;
    const addCart = (id) => {
        console.log('Added To Cart', id);
    }

    const purchase = (id) => {
        console.log('Purchase For Product Id', id);
    }

    const addToCartWithParam = () => addCart(id);

    return (
        <div className='product'>
            <h2>Buy This :{name}</h2>
            <p>Only for ${price}</p>
            <p>It Has Id : {id}</p>
            <button onClick={() => addCart(id)}>Add To Cart :shortCut</button> <br />
            <button onClick={addToCartWithParam}>Add To Cart</button> <br />
            <button onClick={() => purchase(id)}>Purchase</button>
        </div>
    );
};

export default Cosmetic;