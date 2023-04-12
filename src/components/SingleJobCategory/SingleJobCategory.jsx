import React from 'react';
import './SingleCategory.css'
const SingleJobCategory = ({singlecatagory}) => {
    const {logo, name, jobs} = singlecatagory;
    return (
        <div className='single-category border rounded-md p-5 bg-[rgba(152, 115, 255, 0.05)]'>
            <img className='w-10 h-10 my-2' src={logo} alt="" />
            <h2 className='text-xl font-bold my-2'>{name}</h2>
            <p className='text-slate-700'>{jobs}+ Jobs Available</p>
        </div>
    );
};

export default SingleJobCategory;