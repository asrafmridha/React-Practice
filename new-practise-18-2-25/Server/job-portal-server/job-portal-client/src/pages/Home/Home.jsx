import React from 'react';
import Banner from './Banner';
import JobCategory from './JobCategory';
import LatestJob from './LatestJob';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <LatestJob></LatestJob>
        </div>
    );
};

export default Home;