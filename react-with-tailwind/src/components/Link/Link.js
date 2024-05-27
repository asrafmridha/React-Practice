import React from 'react';

const Link = ({routes}) => {
    return (
        <li className='mr-7'>
            <a href={routes.path}>{routes.name}</a>
        </li>
       
    );
};

export default Link;