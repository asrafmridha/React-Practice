import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friendDetail = useLoaderData();
    const {name,phone} =friendDetail;
    return (
        <div>
            <h1>Details About : {name}</h1>
            <p>Call Him/Her :{phone}</p>
        </div>
    );
};

export default FriendDetails;