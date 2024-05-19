import { Card, CardContent, Typography } from "@mui/material";
import AvgStatsChart from "./AvgStatsChart";

export default function AvgStatsCard() {
    /**
     * Rendering
     */
    return (
        <>
            <Card sx={{ margin:'auto', width:'25%'}}>
                <CardContent>
                    <AvgStatsChart/>
                </CardContent>
            </Card>
        </>
    )
}