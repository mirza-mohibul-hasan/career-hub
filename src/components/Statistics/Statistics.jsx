import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
    {
        name: 'Assignment 01', mark: 60
    },
    {
        name: 'Assignment 02', mark: 60
    },
    {
        name: 'Assignment 03', mark: 60
    },
    {
        name: 'Assignment 04', mark: 60
    },
    {
        name: 'Assignment 05', mark: 59
    },
    {
        name: 'Assignment 06', mark: 60
    },
    {
        name: 'Assignment 07', mark: 60
    },
    {
        name: 'Assignment 08', mark: 60
    },
]

const Statistics = () => {
    return (
        <div className='mt-20'>
            <LineChart width={1000} height={500} data={data} margin={{ top: 5, right: 50, bottom: 5, left: 0 }} className='mx-auto'>
            <Line type="monotone" dataKey="mark" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="8 8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </LineChart>
        </div>
    );
};

export default Statistics;