import React from 'react';
import './Grandpa.css';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

const Grandpa = () => {
    const house =7;
    const ring= 'Dimond Ring';
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <section className='flex'>
                <Father house={house} ring={ring}></Father>
                <Uncle  house={house}></Uncle>
                <Aunty  house={house}></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;