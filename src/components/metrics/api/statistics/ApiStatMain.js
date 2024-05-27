import { useState, useEffect } from 'react';
import axios from "axios";
import { Grid } from '@mui/material';
import LastMinutesActivityCard from './LastMinutesActivityCard';
import AvgStatsCard from './AvgStatsCard';
import NrCallsInPeriodCard from './NrCallsInPeriodCard';

export default function ApiStatMain() {
    const [statistics,setStatistics] = useState(null);
    
    /**
     * Effect
     */
    useEffect(() => {
        //First execution/request
        axios.get("http://localhost:8081/statistics")
        .then(response => {setStatistics(response.data)})
        .catch(err => alert("An error occured while trying to retrieve statistics"));

        //Excutions/requests following the set interval
        setInterval(()=> {
            axios.get("http://localhost:8081/statistics")
            .then(response => {setStatistics(response.data)})
            .catch(err => alert("An error occured while trying to retrieve statistics"));
        },10000);
    },[]);

    /**
     * Rendering
     */
    var average;
    if(statistics) {
        average = {
            get: statistics.avgGetReqPerDay,
            put: statistics.avgPutReqPerDay,
            post: statistics.avgPostReqPerDay,
            Delete: statistics.avgDeleteReqPerDay
        }
    };
    var activityLastMinutes;
    if(statistics) {
        activityLastMinutes = [
            statistics.nrReqFrom9To10Min,
            statistics.nrReqFrom8To9Min,
            statistics.nrReqFrom7To8Min,
            statistics.nrReqFrom6To7Min,
            statistics.nrReqFrom5To6Min,
            statistics.nrReqFrom4To5Min,
            statistics.nrReqFrom3To4Min,
            statistics.nrReqFrom2To3Min,
            statistics.nrReqFrom1To2Min,
            statistics.nrReqFrom0To1Min
        ]
    }

    return (
        <>
            <Grid container direction="row" alignItems="center" sx={{ margin:'auto', width:'96%' }} spacing={2}>
                <Grid item xs={12}><LastMinutesActivityCard activityData={activityLastMinutes}/></Grid>
                <Grid item xs={4} sx={{ marginTop:'2%' }}><AvgStatsCard values={average}/></Grid>
                <Grid container xs={8} direction="column" alignItems="center">
                    <Grid item xs={11}  sx={{ marginTop:'2%', width:'80%' }}><NrCallsInPeriodCard value={statistics ? statistics.nrReqToday : ''} text="today"/></Grid>
                    <Grid item xs={11} sx={{ marginTop:'2%', width:'80%' }}><NrCallsInPeriodCard value={statistics ? statistics.nrReqLastHour : ''} text="in the last hour"/></Grid>
                </Grid>
            </Grid>
        </>
    )
}   