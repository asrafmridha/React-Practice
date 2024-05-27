import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {
    const routes = [
        { id: 1, name: "Home", path: '/home' },
        { id: 2, name: "Products", path: '/product' },
        { id: 1, name: "Orders", path: '/orders' },
        { id: 1, name: "Contact", path: '/contact' },
        { id: 1, name: "About", path: '/about' }
    ];
    return (
        <nav>
            <ul className='md:flex justify-center'>
                {
                    routes.map(route=><Link key={route.id} routes={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;