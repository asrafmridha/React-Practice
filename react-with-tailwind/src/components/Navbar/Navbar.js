import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: "Home", path: '/home' },
        { id: 2, name: "Products", path: '/product' },
        { id: 1, name: "Orders", path: '/orders' },
        { id: 1, name: "Contact", path: '/contact' },
        { id: 1, name: "About", path: '/about' }
    ];
    return (
        <nav className='bg-purple-200 w-full h-6'>
            <div className="md:hidden size-6 text-blue-500" onClick={() => setOpen(!open)}>
                {
                    open ? <XMarkIcon></XMarkIcon>  : <Bars3Icon/>
                }
            </div>
            <ul className={`md:flex justify-center absolute duration-500 ease-in md:static  bg-purple-200 w-full ${open ? 'top-6' :'top-[-120px]'}`}>
                {
                    routes.map(route => <Link key={route.id} routes={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;