import React, { useEffect, useState } from 'react';
import { add } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
// import add from '../../utilities/calculate';


const Cosmetics = () => {
    // const first =10;
    // const second =20;
    // const total= add(first,second);
    const [cosmetics,setCosmetics] =useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then(response=>response.json())
        .then(data=>setCosmetics(data));

    },[]);
    return (
        <div>
            <h1>Welcome To My Cosmetics Store</h1>
            {
                cosmetics.map(cosmetic=><Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;