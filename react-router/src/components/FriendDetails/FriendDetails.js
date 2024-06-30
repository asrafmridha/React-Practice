import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friendDetail = useLoaderData();
    console.log(friendDetail);
    return (
        <div>
            <h3>Friend Everything You need To Know</h3>
        </div>
    );
};

export default FriendDetails;