import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/products'>Products</Link>
            <Link to='/posts'>Posts</Link>
            <Link to='/friends'>Friends</Link>
            <Link to='/countries'>Countries</Link>

            {/* <a href="/home">Home</a>
            <a href="/about">About</a> */}
        </div>
    );
};

export default Header;