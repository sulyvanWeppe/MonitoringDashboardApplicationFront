import { useState, useEffect } from 'react';
import axios from "axios";
import { Grid } from '@mui/material';
import LastMinutesActivityChart from './LastMinutesActivityChart';
import LastMinutesActivityCard from './LastMinutesActivityCard';
import AvgStatsCard from './AvgStatsCard';
import NrCallsInPeriodCard from './NrCallsInPeriodCard';

export default function ApiStatMain() {
    const [statistics,setStatistics] = useState(null);

    useEffect(() => {
        setInterval(()=> {
            axios.get("http://localhost:8081/statistics")
            .then(response => {setStatistics(response.data)})
            .catch(err => alert("An error occured while trying to retrieve statistics"));
        },1000);
    },[]);

    /**
     * Rendering
     */
    return (
        <>
            <Grid container direction="row" alignItems="center" sx={{ margin:'auto', width:'96%' }} spacing={2}>
                <Grid item xs={12}><LastMinutesActivityCard/></Grid>
                <Grid item xs={4} sx={{ marginTop:'2%' }}><AvgStatsCard/></Grid>
                <Grid container xs={8} direction="column" alignItems="center">
                    <Grid item xs={11}  sx={{ marginTop:'2%', width:'80%' }}><NrCallsInPeriodCard/></Grid>
                    <Grid item xs={11} sx={{ marginTop:'2%', width:'80%' }}><NrCallsInPeriodCard/></Grid>
                </Grid>
            </Grid>
        </>
    )
}   