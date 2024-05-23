import { Card, CardContent, Grid, Typography } from "@mui/material";
import ApiIcon from '@mui/icons-material/Api';

export default function NrCallsInPeriodCard({value,text}) {

    /**
     * Rendering
     */
    return (
        <>
            <Card>
                <CardContent>
                    <Grid container sx={{ margin:'auto', width:'90%' }}>
                        <Grid item xs={6}>
                            <Grid container direction='column' textAlign='left'>
                                <Grid item><Typography textAlign="left" fontSize={40} color='#57bab4' fontWeight='Bold'>{value}</Typography></Grid>
                                <Grid item><Typography color="text.secondary">Requests {text}</Typography></Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} textAlign='right' color='#57bab4'><ApiIcon sx={{ fontSize:80 }}/></Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
}