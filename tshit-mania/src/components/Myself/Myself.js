import React, { useContext } from 'react';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';
import Special from '../Special/Special';
import { RingContext } from '../Grandpa/Grandpa';

const Myself = ({ring}) => {
    const [house,setHouse] =useContext(RingContext);
    return (
        <div>
            <h4>Myself</h4>
            <p><small>House: {house}</small></p>
            <Special ring={ring}></Special>
            <button onClick={()=>setHouse(house+1)} >Increase</button>
   
        </div>
    );
};

export default Myself;