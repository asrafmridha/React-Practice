import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Cousin = () => {
    const[house,setHouse] =useContext(RingContext)
    return (
        <div>
            <h4>Cousin</h4>
            <p><small>{house}</small></p>
            <button onClick={()=> setHouse(house-1)}>Decrease</button>
        </div>
    );
};

export default Cousin;