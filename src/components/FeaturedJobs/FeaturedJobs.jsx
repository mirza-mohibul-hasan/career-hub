import React, { useEffect, useState } from 'react';
import SingleFeaturedJobs from '../SingleFeaturedJobs/SingleFeaturedJobs';

const FeaturedJobs = ({ jobs }) => {
    // const [featuredJobs, SetFeaturedJobs] = useState([]);
    // useEffect(()=>{
    //     fetch('jobs.json')
    //     .then(res => res.json())
    //     .then(data => SetFeaturedJobs(data));
    // },[])
    // useEffect(()=>{
    //     fetch('jobs.json')
    //     .then(res => res.json())
    //     .then(data => SetFeaturedJobs(data));
    // },[])
    const allJobs = jobs;
   const fourJobs =  allJobs.slice(0,4)
   const [featuredJobs, setFeaturedJobs] = useState(fourJobs);
   
    const handleShowAll = () =>{
        setFeaturedJobs(allJobs);
    }

    return (
        <div className='mt-10'>
            <h2 className='text-center text-5xl font-bold'>Featured Jobs</h2>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    featuredJobs.map(featuredJob =>
                        <SingleFeaturedJobs key={featuredJob.id} featuredJob={featuredJob}></SingleFeaturedJobs>
                    )
                }
            </div>
            <div className='flex justify-center'>
                <button onClick={handleShowAll} className='btn-start-applying mt-10 text-white'>See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;