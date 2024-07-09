import React from 'react';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Myself = ({house}) => {
    return (
        <div>
            <h4>Myself</h4>
            <p><small>House: {house}</small></p>
   
        </div>
    );
};

export default Myself;