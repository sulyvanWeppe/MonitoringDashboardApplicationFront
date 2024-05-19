import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { Divider, Grid, Paper } from "@mui/material";
import ApiEventFilterField from './ApiEventFilterField';




export default function ApiEventFilter({ handleCallerServerNameChange, handleMethodChange, handleUriChange }) {
    const callerServerNameValues = ['localhost'];
    const methodValues = ['POST','DELETE','GET','PUT'];
    const uriValues = ['/ping'];


    /**
     * Rendering
     */
    return (
        <div>
            <Paper sx={{margin: 'auto', marginLeft: '2%', marginRight:'2%', marginBottom:'2%'}} elevation={6}>
                <Grid container spacing={2} direction="row" alignItems="center" sx={{maxWidth: '100%'}}>
                    <Grid item xs={4}>
                        <ApiEventFilterField filterName="Caller Server Name" filterValues={callerServerNameValues} handleFilterChange={handleCallerServerNameChange}/>
                    </Grid>
                    <Grid item xs={4}>
                        <ApiEventFilterField filterName="Method" filterValues={methodValues} handleFilterChange={handleMethodChange}/>
                    </Grid>
                    <Grid item xs={4}>
                        <ApiEventFilterField filterName="URI" filterValues={uriValues} handleFilterChange={handleUriChange}/>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}