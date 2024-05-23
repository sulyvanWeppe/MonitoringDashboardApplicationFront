import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import LastMinutesActivityChart from "./LastMinutesActivityChart";


export default function LastMinutesActivityCard({activityData}) {
    /**
     * Rendering
     */
    return(
        <>
            <Card sx={{ margin:'auto' }}>
                <CardContent>
                    <Typography color="text.secondary" textAlign="right">Activity of the last 10 minutes</Typography>
                    <LastMinutesActivityChart activityData={activityData}/>
                </CardContent>
            </Card>
        </>
    )
}