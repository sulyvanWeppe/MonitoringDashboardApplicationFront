import Typography from '@mui/material/Typography';
import axios from "axios";
import { useState, useEffect } from 'react';
import ApiEventFilter from './ApiEventFilter';
import MetricDataGrid from '../MetricDataGrid';

export default function ApiEventMain() {
    const [apiMetrics, setApiMetrics] = useState([]);
    const initialFilter = {callerServerNames: ["toto"], methods: [], uris: []};
    const [filter, setFilter] = useState(initialFilter);

    useEffect(() => {
        setInterval(() => {
                var request = {
                    callerServerNames: filter.callerServerNames,
                    methods: filter.methods,
                    uris: filter.uris
                };

                axios.get("http://localhost:8081/apiMetrics",{params: request})
                .then(response => {
                    console.log(response);
                    setApiMetrics(response.data);
                })
                .catch(err => alert("An error occured while trying to retrieve metrics"));
            
        },500);
    }, []);

    const apiMetricsData = () => {
        if(apiMetrics) {
            return apiMetrics.map((apiMetric) => (
                {
                    id: apiMetric.metricId,
                    timestamp: apiMetric.timestamp,
                    callerServerName: apiMetric.callerServerName,
                    callerServerPort: apiMetric.callerServerPort,
                    method: apiMetric.method,
                    requestUri: apiMetric.requestUri,
                    requestPayload: apiMetric.requestPayload,
                    responsePayload: apiMetric.responsePayload
                }
            ))
        }
        
        return [];
    }

    function handleFilterChange(newCallerServerNameValue,newMethodValue,newUriValue) {
        console.log("change detected in filter");
        const newFilter = {callerServerNames: newCallerServerNameValue, methods: newMethodValue, uris: newUriValue};
        setFilter(newFilter);
    }

    return (
        <>
            <ApiEventFilter handleChange={handleFilterChange}/>
            <MetricDataGrid data={apiMetricsData()}/>
        </>
    );
}