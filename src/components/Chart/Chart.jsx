import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './Chart.css'
const Chart = ({title,data,dataKey,parameters}) => {
    
    return (
        <div className='chart'>
        <h3>{title}</h3>
        <ResponsiveContainer width='100%' aspect={4}>
        <LineChart   data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey={parameters} />
        <YAxis />
        <Tooltip />
      </LineChart>
        </ResponsiveContainer>
        </div>
    );
}

export default Chart;
