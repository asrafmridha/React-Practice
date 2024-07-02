import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const postDetail = useLoaderData();
    const {id,title,body}=postDetail;
    const navigate =useNavigate();

    const handleNavigate =()=>{
        navigate(`/friend/${id}`);
    }
    return (
        <div>
            <h3>Details About Post : {id}</h3>
            <p>{title}</p>
            <p> <span>{body}</span></p>
            <button onClick={handleNavigate}>Get The Author</button>
        </div>
    );
};

export default PostDetails;