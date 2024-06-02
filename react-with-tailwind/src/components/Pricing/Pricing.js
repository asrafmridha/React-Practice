import React from 'react';
import PricingOption from '../PrincingOptions/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        { id: 1, name: 'free', price: 0 , features:[
            'Accounting Formulas',
            'Commerce Abbreviations List',
            'First Impression',
            'Profit Maximisation',
            'Sales Promotion',
        ] },
        { id: 2, name: 'Medium', price: 9.99 , features:[
            'Accounting Formulas',
            'Commerce Abbreviations List',
            'First Impression',
            'Profit Maximisation',
            'Sales Promotion',
        ] },
        { id: 3, name: 'Premium', price: 19.99 , features:[
            'Sales Promotion',
            'Accounting Formulas',
            'Commerce Abbreviations List',
            'First Impression',
            'Profit Maximisation',
        ] },
    ];
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-300 p-12 text-white'>Best Deal of The Town</h2>
         <div className='grid grid-cols-3 gap-3'>
         {
                pricingOptions.map(option=><PricingOption key={option.id} option={option}></PricingOption>)
            }
         </div>
        </div>
    );
};

export default Pricing;