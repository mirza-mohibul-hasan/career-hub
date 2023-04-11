import React from 'react';
import './SingleCategory.css'
const SingleJobCategory = ({singlecatagory}) => {
    const {logo, name, jobs} = singlecatagory;
    return (
        <div className='single-category border rounded-md p-3 bg-[rgba(152, 115, 255, 0.05)]'>
            <img src={logo} alt="" />
            <h2>{name}</h2>
            <p>{jobs}+ Jobs Available</p>
        </div>
    );
};

export default SingleJobCategory;