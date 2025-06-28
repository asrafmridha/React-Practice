import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import JobCard from './JobCard';

const LatestJob = () => {
    const [jobs,setJobs]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/jobs`)
        .then(res=>res.json())
        .then(data=>{
            setJobs(data);
        })
    },[])
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                jobs.map(job=><JobCard key={job._id} job={job}></JobCard>)
            }
        </div>
    );
};

export default LatestJob;