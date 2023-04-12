import React from 'react';
import { Link } from 'react-router-dom';

const SingleFeaturedJobs = ({featuredJob}) => {
    // console.log(featuredJob)
    const {id, logo, title, company, type, time, location, salary} = featuredJob;
    return (
        <div className='border p-4 mt-10'>
            <img className='w-32 h-16' src={logo} alt="" />
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <h4>{company}</h4>
            <p><span>{type}</span><span>{time}</span></p>
            <p>
                <span>{location}</span>
                <span>{salary}</span>
            </p>
            <Link to={ `/jobdetails/${id}`}><button className='btn-start-applying text-white mt-3'>View Details</button></Link>
        </div>
    );
};

export default SingleFeaturedJobs;