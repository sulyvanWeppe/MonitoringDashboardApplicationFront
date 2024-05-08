import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { Divider, Grid, Paper } from "@mui/material";
import ApiEventFilterField from './ApiEventFilterField';




export default function ApiEventFilter({ handleCallerServerNameChange, handleMethodChange, handleUriChange }) {
handleMethodChange= handleMethodChange.bind(this);
    const values = [
        'value1','value2','value3'
    ]

    return (
        <div>
            <Paper sx={{margin: 'auto', marginLeft: '2%', marginRight:'2%', marginBottom:'2%'}} elevation={6}>
                <Grid container spacing={2} direction="row" alignItems="center" sx={{maxWidth: '100%'}}>
                    <Grid item xs={4}>
                        <ApiEventFilterField filterName="Caller Server Name" filterValues={values} handleFilterChange={handleCallerServerNameChange}/>
                    </Grid>
                    <Grid item xs={4}>
                        <ApiEventFilterField filterName="Method" filterValues={values} handleFilterChange={handleMethodChange}/>
                    </Grid>
                    <Grid item xs={4}>
                        <ApiEventFilterField filterName="URI" filterValues={values} handleFilterChange={handleUriChange}/>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}