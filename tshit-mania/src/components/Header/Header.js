import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/order'>Order</Link>
            <Link to='/grandpa'>Grandpa</Link>
            <Link to='/expressApi'>Express Api</Link>
        </div>
    );
};

export default Header;