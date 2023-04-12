import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {

    const marks = [
        {
            id: 1,
            assignment: "Assignment-01",
            mark: 60
        },
        {
            id: 2,
            assignment: "Assignment-02",
            mark: 60
        },
        {
            id: 3,
            assignment: "Assignment-03",
            mark: 60
        },
        {
            id: 4,
            assignment: "Assignment-04",
            mark: 60
        },
        {
            id: 5,
            assignment: "Assignment-05",
            mark: 59
        },
        {
            id: 6,
            assignment: "Assignment-06",
            mark: 60
        },
        {
            id: 7,
            assignment: "Assignment-07",
            mark: 60
        },
        {
            id: 8,
            assignment: "assignment 8",
            mark: 60
        }
    ];

    return (
        <div className='md:my-10'>
            <h2 className='mb-10 font-bold text-center text-2xl'>Marks Chart</h2>
            <AreaChart className='mx-auto'
                width={1200}
                height={500}
                data={marks}>
                
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="assignment"></XAxis>
                <YAxis dataKey="mark"></YAxis>
                <Tooltip></Tooltip>
                <Area type="monotone" dataKey="mark" stroke="#d584d883" fill="#8884d8" />

            </AreaChart>
        </div>
    );
};

export default Statistics;