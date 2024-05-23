import { Card, CardContent, Typography } from "@mui/material";
import AvgStatsChart from "./AvgStatsChart";

export default function AvgStatsCard({values}) {
    const data = [
        { id: 0, value: values ? values.get : 0, label: 'Get requests' },
        { id: 1, value: values ? values.put : 0, label: 'Put requests' },
        { id: 2, value: values ? values.post : 0, label: 'Post requests' },
        { id: 3, value: values ? values.delete : 0, label: 'Delete requests' },
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