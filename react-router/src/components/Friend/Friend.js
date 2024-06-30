import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name,email,id,username} =friend;
    return (
        <div className='friend'>
            <h3>Name :  {name}</h3>
            <p>Email :  {email}</p>
            <p>UserName : <Link to={`/friend/${id}`}>{username}</Link></p>
        </div>
    );
};

export default Friend;