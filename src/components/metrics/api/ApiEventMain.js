import Typography from '@mui/material/Typography';
import axios from "axios";
import { useState, useEffect } from 'react';
import ApiEventFilter from './ApiEventFilter';
import MetricDataGrid from '../MetricDataGrid';

export default function ApiEventMain() {
    /**
     * State
     */
    const [apiMetrics, setApiMetrics] = useState([]);
    const [callerServerNameFilter,setCallerServerNameFilter] = useState([]);
    const [methodFilter,setMethodFilter] = useState([]);
    const [uriFilter,setUriFilter] = useState([]);

    /**
     * Effect
     */
    let requestInterval;

    useEffect(() => {       
        requestInterval = setInterval(() => {
            var request = {
                callerServerNames: callerServerNameFilter,
                methods: methodFilter,
                uris: uriFilter
            };

            axios.post("http://localhost:8081/apiMetrics/lookup",request)
            .then(response => {
                setApiMetrics(response.data);
            })
            .catch(err => alert("An error occured while trying to retrieve metrics"));
        
        },1000);
        
        // Cleanup function to clear interval when component unmounts or when selectedValue changes
        return () => clearInterval(requestInterval);

    }, [callerServerNameFilter,methodFilter,uriFilter])

    /**
     * Auxilary Methods
     */
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

    function handleCallerServerNameFilterChange(e) {
        setCallerServerNameFilter(e.target.value);
    }

    function handleMethodFilterChange(e) {
        setMethodFilter(e.target.value);
    }

    function handleUriFilterChange(e) {
        setUriFilter(e.target.value);
    }

    /**
     * Rendering
     */
    return (
        <>
            <ApiEventFilter handleCallerServerNameChange={handleCallerServerNameFilterChange}
                handleMethodChange={handleMethodFilterChange}
                handleUriChange={handleUriFilterChange}/>
            <MetricDataGrid data={apiMetricsData()}/>
        </>
    );
}