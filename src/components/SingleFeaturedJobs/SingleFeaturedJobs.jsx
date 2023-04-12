import React from 'react';
import { Link } from 'react-router-dom';
import salaryIcon from '../../assets/Icons/salary.png'
import locationIcon from '../../assets/Icons/location.png'
const SingleFeaturedJobs = ({ featuredJob }) => {
    // console.log(featuredJob)
    const { id, logo, title, company, type, time, location, salary } = featuredJob;
    return (
        <div className='border p-4 mt-10 rounded'>
            <img className='w-32 h-16' src={logo} alt="" />
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <h4>{company}</h4>
            <p className='my-3 text-[#7E90FE]'><span className='mr-5 border border-[#7E90FE] p-2 rounded'>{type}</span><span className='mr-5 border border-[#7E90FE] p-2 rounded'>{time}</span></p>
            <div className='flex gap-5'>
                <p className='flex'>
                    <img src={locationIcon} alt="" />
                    <span>{location}</span>
                </p>
                <p className='flex'>
                    <img src={salaryIcon} alt="" />
                    <span>{salary}</span>
                </p>
            </div>
            <Link to={`/jobdetails/${id}`}><button className='btn-start-applying text-white mt-3'>View Details</button></Link>
        </div>
    );
};

export default SingleFeaturedJobs;