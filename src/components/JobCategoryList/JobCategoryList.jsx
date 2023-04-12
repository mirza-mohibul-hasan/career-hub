import React, { useEffect, useState } from 'react';
import SingleJobCategory from '../SingleJobCategory/SingleJobCategory';

const JobCategoryList = () => {
    const [jobcatgory, setJobcategory] = useState([]);
    useEffect(() => {
        fetch('jobcategory.json')
            .then(res => res.json())
            .then(data => setJobcategory(data));
    }, [])
    return (
        <div>
            <h1 className='text-center text-4xl font-bold my-5'>Job Category List</h1>
            <p className='text-center mb-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='md:flex mx-auto gap-4 justify-around'>
            {
                jobcatgory.map(singlecatagory =>
                    <SingleJobCategory key={singlecatagory.id} singlecatagory={singlecatagory}></SingleJobCategory>
                )
            }
            </div>
        </div>
    );
};

export default JobCategoryList;