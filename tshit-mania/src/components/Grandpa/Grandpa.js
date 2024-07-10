import React, { createContext, useState } from 'react';
import './Grandpa.css';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

export const RingContext = createContext('Gold Ring');

const Grandpa = () => {
    const [house,setHouse] = useState(1);
    const ring = 'Dimond Ring';
    return (
        <RingContext.Provider value={[house,setHouse]}>
            <div className='grandpa'>
                <h2>Grandpa</h2>
                <section className='flex'>
                    <Father house={house} ring={ring}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;