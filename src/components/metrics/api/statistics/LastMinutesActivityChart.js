import { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function LastMinutesActivityChart() {
    /**
     * Rendering
     */
    return (
        <>
            <LineChart
            xAxis={[{ data: [1,2,3,4,5,6,7] }]}
            series={[
                {data: [2,4,2,4,6,4,5]}
            ]}
            height={300}/>        
        </>
    )
}