import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { Divider, Grid, Paper } from "@mui/material";
import ApiEventFilterField from './ApiEventFilterField';

const values = [
    'value1','value2','value3'
]

export default function ApiEventFilter({handleChange}) {

    function handleCallerServerNameChange(newCallerServerNameValue) {
        handleChange(newCallerServerNameValue,null,null);
    }

    function handleMethodChange(newMethodValue) {
        handleChange(null,newMethodValue,null);
    }

    function handleUriChange(newUriValue) {
        handleChange(null,null,newUriValue);
    }

    return (
        <>
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
        </>
    )
}