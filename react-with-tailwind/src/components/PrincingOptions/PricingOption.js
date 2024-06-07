import React from 'react';
import Feature from '../Features/Feature';


const PricingOption = ({ option }) => {
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-3'>
            <div>
                <h3> <span className='text-6xl font-bold text-white'>{option.price}</span> <span className='text-2xl text-gray-200'>/mon</span>
                </h3>
                <p className='text-3xl'>{option.name}</p>
            </div>
            {
                option.features.map((feature,index) => <Feature key={index} feature={feature}></Feature>)
            }

        </div>
    );
};

export default PricingOption;