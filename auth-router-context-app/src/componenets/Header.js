import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <Link className="btn btn-ghost text-xl" to='/'>My Awesome</Link>
                <Link className="btn btn-ghost text-xl"  to='/home'>Home</Link>
                <Link className="btn btn-ghost text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost text-xl" to='/Register'>Register</Link>
            </div>
            
        </div>
    );
};

export default Header;