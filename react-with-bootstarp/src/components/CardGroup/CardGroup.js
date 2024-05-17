import React from 'react';
import Card from '../Card/Card';


const CardGroup = () => {

    const products=[
        {id:1, name: "Mackbook Pro", price :145000},
        {id:1, name: "Mackbook Pro", price :155000},
        {id:1, name: "Mackbook Pro", price :165000},


    ]
    return (
        <div>
            <div className="card-group">
                {
                    products.map(product=><Card key={product.id} product={product}></Card>)
                }
            </div>
        </div>
    );
};

export default CardGroup;