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
        <div>
            {
                jobs.map(job=><JobCard key={job._id} job={job}></JobCard>)
            }
        </div>
    );
};

export default LatestJob;