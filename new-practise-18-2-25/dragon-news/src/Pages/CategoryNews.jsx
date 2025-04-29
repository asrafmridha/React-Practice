import React, { use } from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryNews = () => {
    const {data} = useLoaderData();

    return (
        <div>
            <p>{data.length} Category New Found This Page</p>
        </div>
    );
};

export default CategoryNews;