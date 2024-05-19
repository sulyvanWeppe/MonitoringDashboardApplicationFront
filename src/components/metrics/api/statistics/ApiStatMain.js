import { useState, useEffect } from 'react';
import LastMinutesActivityChart from './LastMinutesActivityChart';
import LastMinutesActivityCard from './LastMinutesActivityCard';
import AvgStatsCard from './AvgStatsCard';

export default function ApiStatMain() {


    /**
     * Rendering
     */
    return (
        <>
            <LastMinutesActivityCard/>
            <AvgStatsCard/>
        </>
    )
}