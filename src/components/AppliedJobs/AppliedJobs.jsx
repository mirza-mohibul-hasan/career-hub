import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import SingleApppliedJob from '../SignleAppliedJob/SingleApppliedJob';
import './AppliedJobs.css'
const AppliedJobs = () => {
    const storedAppliedJobsId = getShoppingCart();
    const [allJobs, setAllJobs] = useState([])
    const [appliedJobs, setAppliedJobs] = useState([])
    const [savedJobs, setSavedJobs] = useState([])
    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => setAllJobs(data))
    }, [])
    useEffect(() => {
        const getAppliedJobs = [];
        for (const id in storedAppliedJobsId) {
            const appliedJob = allJobs.find(job => job.id == id)
            if (appliedJob) {
                getAppliedJobs.push(appliedJob)
            }
        }
        setAppliedJobs(getAppliedJobs);
        setSavedJobs(getAppliedJobs);
    }, [allJobs])
    // console.log(appliedJobs)

    const remoteJobhandler = () =>{
        const remoteJob = savedJobs.filter(saved => saved.type ==='Remote')
        setAppliedJobs(remoteJob);
    }
    const onsiteJobhandler = () =>{
        const onsiteJob = savedJobs.filter(saved => saved.type ==='Onsite')
        setAppliedJobs(onsiteJob);
    }
    return (
        <div className='mt-4 mx-3 md:mx-56'>
            
        </div>
    );
};

export default AppliedJobs;