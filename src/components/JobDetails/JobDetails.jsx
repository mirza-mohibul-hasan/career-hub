import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css'
const JobDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    const allDetails = useLoaderData();
    // console.log(allDetails)
    useEffect(() => {
        const newDetails = allDetails.find(job => job.id == id)
        setDetails(newDetails)
    }, [allDetails])
    // console.log(details)
    // console.log(details.desescription);
    const { desescription, responsibility, requirements, experience, salary, title, phone, email } = details;
    return (
        <div className='mt-4 mx-56'>
            <h2 className='text-5xl text-center font-bold my-20'>Job details</h2>
            {/* <div className='job-details-container'> */}
            <div className='flex gap-10'>
                <div>
                    <p><span className='font-bold'>Job Description:</span> {details.desescription}</p>
                    <p><span>Job Responsibility:</span> {responsibility}</p>
                    <p><span>Educational Requirements:</span>{requirements}</p>
                    <p><span>Experiences: </span>{experience}</p>
                </div>
                <div >
                    <div className='bg-purple-100'>
                        <h2>Job Details</h2>
                        <hr />
                        <p>Salary: {salary}</p>
                        <p>Job Title: {title}</p>
                        <h2>Contact information</h2>
                        <p>Phone:{phone}</p>
                        <p>Email:{email}</p>
                    </div>
                    <div>
                        <button className='btn-start-applying mt-5 w-full text-white'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;