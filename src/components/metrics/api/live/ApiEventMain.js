import Typography from '@mui/material/Typography';
import axios from "axios";
import { useState, useEffect } from 'react';
import ApiDataGrid from './ApiDataGrid';
import ApiFilter from '../../../common/ApiFilter';

export default function ApiEventMain() {
    /**
     * State
     */
    const [apiMetrics, setApiMetrics] = useState([]);
    const [hostNameFilter,setHostNameFilter] = useState([]);
    const [methodFilter,setMethodFilter] = useState([]);
    const [uriFilter,setUriFilter] = useState([]);

    /**
     * Effect
     */
    let requestInterval;

    useEffect(() => {       
        requestInterval = setInterval(() => {
            var request = {
                hostNames: hostNameFilter,
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

    }, [hostNameFilter,methodFilter,uriFilter])

    /**
     * Auxilary Methods
     */
    const apiMetricsData = () => {
        if(apiMetrics) {
            return apiMetrics.map((apiMetric) => (
                {
                    id: apiMetric.metricId,
                    timestamp: apiMetric.timestamp,
                    hostName: apiMetric.hostName,
                    hostPort: apiMetric.hostPort,
                    method: apiMetric.method,
                    requestUri: apiMetric.requestUri,
                    requestPayload: apiMetric.requestPayload,
                    responsePayload: apiMetric.responsePayload
                }
            ))
        }
        
        return [];
    }

    function handleHostNameFilterChange(e) {
        setHostNameFilter(e.target.value);
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
            <ApiFilter handleHostNameFilterChange={handleHostNameFilterChange}
                handleMethodChange={handleMethodFilterChange}
                handleUriChange={handleUriFilterChange}/>
            <ApiDataGrid data={apiMetricsData()}/>
        </>
    );
}