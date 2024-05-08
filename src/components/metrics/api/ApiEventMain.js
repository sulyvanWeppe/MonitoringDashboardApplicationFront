import Typography from '@mui/material/Typography';
import axios from "axios";
import { useState, useEffect } from 'react';
import ApiEventFilter from './ApiEventFilter';
import MetricDataGrid from '../MetricDataGrid';

export default function ApiEventMain() {
    //State
    const [apiMetrics, setApiMetrics] = useState([]);
    const [callerServerNameFilter,setCallerServerNameFilter] = useState([]);
    const [methodFilter,setMethodFilter] = useState([]);
    const [uriFilter,setUriFilter] = useState([]);

    let requestInterval;
    /*useEffect(() => {
        requestInterval = setInterval(() => {
                var request = {
                    callerServerNames: callerServerNameFilter,
                    methods: methodFilter,
                    uris: uriFilter
                };

                //console.log(request);

                axios.post("http://localhost:8081/apiMetrics/lookup",request)
                .then(response => {
                    //onsole.log(response);
                    setApiMetrics(response.data);
                })
                .catch(err => alert("An error occured while trying to retrieve metrics"));
            
        },500);
    }, []);

    useEffect(() => {
        console.log("change detected in filter");
        requestInterval = setInterval(() => {
            var request = {
                callerServerNames: callerServerNameFilter,
                methods: methodFilter,
                uris: uriFilter
            };

            //console.log(request);

            axios.post("http://localhost:8081/apiMetrics/lookup",request)
            .then(response => {
                //onsole.log(response);
                setApiMetrics(response.data);
            })
            .catch(err => alert("An error occured while trying to retrieve metrics"));
        
    },500);
    }, [callerServerNameFilter,methodFilter,uriFilter])*/

    useEffect(() => {
        console.log("titi")
        console.log(methodFilter);
    },[methodFilter])

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

    function handleCallerServerNameFilterChange(newCallerServerName) {
        setCallerServerNameFilter([]);
    }

    function handleMethodFilterChange(e) {
        console.log(e.target.value);
        setMethodFilter(e.target.value);
        console.log("toto");
        console.log(methodFilter);
    }

    function handleUriFilterChange(newUri) {
        //TODO
    }

    return (
        <>
            <ApiEventFilter handleCallerServerNameChange={handleCallerServerNameFilterChange}
                handleMethodChange={handleMethodFilterChange}
                handleUriChange={handleUriFilterChange}/>
            <MetricDataGrid data={apiMetricsData()}/>
        </>
    );
}