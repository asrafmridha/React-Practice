import React from 'react';
import { add, multiPly } from '../../utilities/calculate';

const Shoes = () => {
    const first=15;
    const second=72;
    const result =multiPly(first,second);
    const sum =add(first,second);
    return (
        <div>
            <h3>This is Shoes Componenets </h3>
            <p>Result : {result} and total : {sum}</p>
        </div>
    );
};

export default Shoes;