import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import JobCategoryList from '../JobCategoryList/JobCategoryList';

const Home = () => {
    return (
        <div className='mt-4 mx-56'>
            <HomeBanner></HomeBanner>
            <JobCategoryList></JobCategoryList>
        </div>
    );
};

export default Home;