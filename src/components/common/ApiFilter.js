import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { Divider, Grid, Paper } from "@mui/material";
import ApiFilterField from './ApiFilterField';




export default function ApiFilter({ handleHostChange, handlePortChange, handleMethodChange, handleUriChange }) {
    const hostValues = ['localhost'];
    const portValues = ['1111','2222'];
    const methodValues = ['POST','DELETE','GET','PUT'];
    const uriValues = ['/ping'];


    /**
     * Rendering
     */
    return (
        <div>
            <Paper sx={{margin: 'auto', marginLeft: '2%', marginRight:'2%', marginBottom:'2%'}} elevation={6}>
                <Grid container spacing={2} direction="row" alignItems="center" sx={{maxWidth: '100%'}}>
                    <Grid item xs={3}>
                        <ApiFilterField filterName="Host" filterValues={hostValues} handleFilterChange={handleHostChange}/>
                    </Grid>
                    <Grid item xs = {3}>
                        <ApiFilterField filterName="Port" filterValues={portValues} handleFilterChange={handlePortChange}/>
                    </Grid>
                    <Grid item xs={3}>
                        <ApiFilterField filterName="Method" filterValues={methodValues} handleFilterChange={handleMethodChange}/>
                    </Grid>
                    <Grid item xs={3}>
                        <ApiFilterField filterName="URI" filterValues={uriValues} handleFilterChange={handleUriChange}/>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}