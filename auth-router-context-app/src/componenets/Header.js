import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './contexts/UserContext';

const Header = () => {
    const {user}=useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <Link className="btn btn-ghost text-xl" to='/'>My Awesome</Link>
                <Link className="btn btn-ghost text-xl"  to='/home'>Home</Link>
                <Link className="btn btn-ghost text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost text-xl" to='/Register'>Register</Link>
                {user?.email && <span>Welcome, {user.email}</span> }
            </div>
            
        </div>
    );
};

export default Header;