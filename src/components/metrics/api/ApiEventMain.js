import Typography from '@mui/material/Typography';
import axios from "axios";
import { useState, useEffect } from 'react';
import ApiEventFilter from './ApiEventFilter';

export default function ApiEventMain() {
    const [apiMetrics, setApiMetrics] = useState();

    useEffect(() => {
        axios.get("http://localhost:8081/apiMetrics")
            .then(response => {
                console.log(response);
                setApiMetrics(response.data);
            })
            .catch(err => alert("An error occured while trying to retrieve metrics"));
        }, []
    );

    const apiMetricsDisplay = () => {
        if(apiMetrics) {
            return apiMetrics.map(apiMetric => <li key={apiMetric.metricId}>{JSON.stringify(apiMetric)}</li>)
        }
    }

    return (
        <>
            <ApiEventFilter/>
            <ul >{apiMetricsDisplay()}</ul>
        </>
    );
}