import React from 'react';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';
import Special from '../Special/Special';

const Myself = ({house,ring}) => {
    return (
        <div>
            <h4>Myself</h4>
            <p><small>House: {house}</small></p>
            <Special ring={ring}></Special>
   
        </div>
    );
};

export default Myself;