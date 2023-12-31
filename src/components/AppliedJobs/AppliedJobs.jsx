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

    const remoteJobhandler = () => {
        const remoteJob = savedJobs.filter(saved => saved.type === 'Remote')
        setAppliedJobs(remoteJob);
    }
    const onsiteJobhandler = () => {
        const onsiteJob = savedJobs.filter(saved => saved.type === 'Onsite')
        setAppliedJobs(onsiteJob);
    }
    return (
        <div>
            <div className='appliedjobs flex items-center justify-center mx-0'>
                <h2 className='text-3xl text-center font-bold my-20'>Applied Jobs</h2>
            </div>
            <div  className='mt-2 mx-3 md:mx-56'>
                <div className='flex justify-end'>
                    <div>
                        <button onClick={onsiteJobhandler} className='btn-applied mr-5'>Onsite</button>
                        <button onClick={remoteJobhandler} className='btn-applied'>Remote</button>
                    </div>
                </div>
                <div>
                    {
                        appliedJobs.map(job => <SingleApppliedJob key={job.id} job={job}></SingleApppliedJob>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;