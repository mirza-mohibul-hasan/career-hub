import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav className='mt-4 mx-3 md:mx-56 md:flex justify-between items-center'>
            <div>
                <h1 className='text-3xl font-bold'>Career Starter</h1>
            </div>
            <div className='font-semibold sm:grid grid-cols-2'>
                <Link to='/' className='mx-5 hover:text-[#7E90FE]'>Home</Link>
                <Link to='/statistics' className='mx-5 hover:text-[#7E90FE]'>Statistics</Link>
                <Link to='appliedjobs' className='mx-5 hover:text-[#7E90FE]'>Applied Jobs</Link>
                <Link to='/blog' className='mx-5 hover:text-[#7E90FE]'>Blog</Link>
            </div>
            <div>
                <button className='btn-start-applying text-white'>Start Applying</button>
            </div>
        </nav>
    );
};

export default Header;