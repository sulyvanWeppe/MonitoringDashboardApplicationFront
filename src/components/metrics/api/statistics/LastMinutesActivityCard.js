import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import LastMinutesActivityChart from "./LastMinutesActivityChart";


export default function LastMinutesActivityCard() {
    /**
     * Rendering
     */
    return(
        <>
            <Card sx={{ margin:'auto', width:'96%'}}>
                <CardContent>
                    <Typography color="text.secondary" textAlign="right">Activity of the last 10 minutes</Typography>
                    <LastMinutesActivityChart/>
                </CardContent>
            </Card>
        </>
    )
}