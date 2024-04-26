import Typography from '@mui/material/Typography';
import axios from "axios";
import { useState, useEffect, useLayoutEffect } from 'react';

export default function ApiEventMain() {
    const [apiMetrics, setApiMetrics] = useState();

    var apiMetricsDisplay;
    useEffect(() => {
        axios.get("http://localhost:8081/apiMetrics")
            .then(response => {
                setApiMetrics(response.data);
                apiMetricsDisplay = apiMetrics.map(apiMetric => <li key={apiMetric.metricId}>
                    toto
                </li>);
                apiMetricsDisplay = "TOTO";
            })
            .catch(err => alert("An error occured while trying to retrieve metrics"));
        }
    );



    return (
        <div>
            <Typography><ul>{apiMetricsDisplay}toto</ul></Typography>
        </div>
    );
}