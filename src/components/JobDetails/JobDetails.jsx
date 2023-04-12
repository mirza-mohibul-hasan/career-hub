import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css'

import salaryIcon from '../../assets/Icons/salary.png'
import jobIcon from '../../assets/Icons/jobtitle.png'
import phoneIcon from '../../assets/Icons/phone.png'
import emailIcon from '../../assets/Icons/email.png'
import locationIcon from '../../assets/Icons/location.png'
import { addToDb } from '../../utilities/fakedb';
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
    const { desescription, responsibility, requirements, experience, salary, title, phone, email , address, location} = details;

    const addAppliedJobs = () =>{
        // console.log(id, email);
        addToDb(id, email);
    }
    return (
        <div className='mt-4 mx-56'>
            <h2 className='text-5xl text-center font-bold my-20'>Job details</h2>
            {/* <div className='job-details-container'> */}
            <div className='flex gap-10'>
                <div>
                    <p className='mb-6'><span className='font-bold'>Job Description:</span> {desescription}</p>
                    <p className='mb-6'><span className='font-bold'>Job Responsibility:</span> {responsibility}</p>
                    <p className='mb-6'><span className='font-bold mb-4'>Educational Requirements: <br /></span>{requirements}</p>
                    <p className='mb-6'><span className='font-bold mb-4'>Experiences: <br /></span>{experience}</p>
                </div>
                <div >
                    <div className='job-details-section'>
                        <h2 className='text-xl font-bold mb-3'>Job Details</h2>
                        <hr />
                        <p className='flex gap-2'>
                            <img src={salaryIcon} alt="" />
                            <span className='font-semibold'>Salary:</span> {salary}
                        </p>
                        <p className='flex gap-2 my-2'>
                            <img src={jobIcon} alt="" />
                            <span className='font-semibold'>Job Title:</span> {title}
                        </p>
                        <h2 className='text-xl font-bold my-5 '>
                            Contact information
                        </h2>
                        <p className='flex gap-2'>
                            <img src={phoneIcon} alt="" />
                            <span className='font-semibold'>Phone:</span>{phone}
                        </p>
                        <p className='flex gap-2 my-2'>
                            <img src={emailIcon} alt="" />
                            <span className='font-semibold'>Email:</span>{email}
                        </p>
                        <p className='flex gap-2 my-2'>
                            <img src={locationIcon} alt="" />
                            <span className='font-semibold'>Address:</span> <span className='text-sm'>{address}</span>
                        </p>
                    </div>
                    <div>
                        <button onClick={()=>addAppliedJobs(id, email)} className='btn-start-applying mt-5 w-full text-white'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;