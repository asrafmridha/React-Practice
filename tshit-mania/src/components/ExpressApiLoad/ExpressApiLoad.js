import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ExpressApiLoad = () => {
    const users= useLoaderData();
    return (
        <div>
            <h4>Express Api Load</h4>
             {
                users.map(user=><ol><Link to={`/user/${user.id}`}>{user.name}</Link></ol>)
             }
        </div>
    );
};

export default ExpressApiLoad;