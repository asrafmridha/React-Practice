import React, { use } from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const {data:news} = useLoaderData();
    // console.log(news);

    return (
        <div>
            <h2 className='font-semibold mb-3'>Dragon News Home</h2>
            <p>{news.length} Category New Found This Page</p>
            {
                news.map(singleNews=><NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
            }
        </div>
    );
};

export default CategoryNews;