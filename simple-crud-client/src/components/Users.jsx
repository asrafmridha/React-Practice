import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users= useLoaderData();
    console.log(users);
    return (
        <div>
            <h2>{users.legth}</h2>
            <div>
                {
                    users.map(user=><p>{user.name} : {user.email}</p>)
                }
            </div>
            
        </div>
    );
};

export default Users;