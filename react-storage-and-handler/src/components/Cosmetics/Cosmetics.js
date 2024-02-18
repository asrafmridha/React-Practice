import React from 'react';
import { add } from '../../utilities/calculate';
// import add from '../../utilities/calculate';


const Cosmetics = () => {
    const first =10;
    const second =20;
    const total= add(first,second);
    return (
        <div>
            <h1>Welcome To My Cosmetics Store</h1>
            <p>Total Product {total}</p>
        </div>
    );
};

export default Cosmetics;