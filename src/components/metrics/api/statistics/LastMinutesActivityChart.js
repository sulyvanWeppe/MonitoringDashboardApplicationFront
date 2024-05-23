import { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function LastMinutesActivityChart({activityData}) {
    /**
     * Rendering
     */
    const dataToDisplay = activityData ? activityData : [0,0,0,0,0,0,0,0,0,0];
    return (
        <>
            <LineChart
            xAxis={[{ data: [1,2,3,4,5,6,7,8,9,10] }]}
            series={[
                {data: dataToDisplay}
            ]}
            height={300}/>        
        </>
    )
}