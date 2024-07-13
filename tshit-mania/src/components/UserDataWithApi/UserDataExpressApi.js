import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDataExpressApi = () => {
    const user= useLoaderData();
    console.log(user);
    return (
        <div>
            <h4>User Data Details</h4>
            <p>{user.name}</p>
        </div>
    );
};

export default UserDataExpressApi;