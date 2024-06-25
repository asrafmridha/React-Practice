import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>

            <a href="/home">Home</a>
            <a href="/about">About</a>
        </div>
    );
};

export default Header;