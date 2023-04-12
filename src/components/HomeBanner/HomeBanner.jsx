import React from 'react';
import banner from '../../assets/All Images/P3OLGJ1 copy 1.png'
// import './HomeBanner.css'
const HomeBanner = () => {
    return (
        <div className=' md:flex items-center'>
            <div>
                <h1 className='text-5xl font-bold my-3'>One Step <br />Closer To Your <br /><span style={{color:'#7E90FE'}}>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn-start-applying text-white mt-3'>Get Started</button>
            </div>
            <div>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default HomeBanner;