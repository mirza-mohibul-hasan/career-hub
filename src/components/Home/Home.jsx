import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const jobs = useLoaderData();
    // console.log(jobs)
    return (
        <div className='mt-4 mx-56'>
            <HomeBanner></HomeBanner>
            <JobCategoryList></JobCategoryList>
            <FeaturedJobs jobs={jobs}></FeaturedJobs>
        </div>
    );
};

export default Home;