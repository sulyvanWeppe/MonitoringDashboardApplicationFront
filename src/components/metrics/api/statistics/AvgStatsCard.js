import { Card, CardContent, Typography } from "@mui/material";
import AvgStatsChart from "./AvgStatsChart";

export default function AvgStatsCard() {
    const data = [
        { id: 0, value: 10, label: 'series A' },
        { id: 1, value: 15, label: 'series B' },
        { id: 2, value: 20, label: 'series C' },
    ];
    
    /**
     * Rendering
     */
    return (
        <>
            <Card>
                <CardContent>
                    <Typography textAlign="right" color="text.secondary" sx={{ marginBottom:'2%' }}>Daily average request split per type</Typography>
                    <AvgStatsChart data={data}/>
                </CardContent>
            </Card>
        </>
    )
}