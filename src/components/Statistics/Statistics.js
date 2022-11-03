import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const questionNumber = useLoaderData();
    
    console.log(questionNumber.data[0]);
    return (
        <div className='statistics'>
            <h2>Statistics: Number of Questions for Each Topic</h2>
            <div className="chart">
            <LineChart width={500} height={400} data={questionNumber.data}>
                <Line type='monotone' dataKey='total' stroke='#82ca9d'/>
                <XAxis dataKey='name'/>
                <YAxis/>
            </LineChart>
            </div>
        </div>
    );
};

export default Statistics;