import Typography from '@mui/material/Typography';
import axios from "axios";
import { useState, useEffect } from 'react';
import ApiFilter from '../../common/ApiFilter';

export default function ApiAlertMain() {
    /**
     * State
     */
    const [alerts, setAlerts] = useState([]);
    const [hostFilter,setHostFilter] = useState([]);
    const [portFilter,setPortFilter] = useState([]);
    const [methodFilter,setMethodFilter] = useState([]);
    const [uriFilter,setUriFilter] = useState([]);

    /**
     * Effect
     */
    let requestInterval;

    useEffect(() => {       
        requestInterval = setInterval(() => {
            var request = {
                hosts: hostFilter,
                ports: portFilter,
                methods: methodFilter,
                uris: uriFilter
            };

            axios.post("http://localhost:8081/alerts/lookup",request)
            .then(response => {
                setAlerts(response.data);
            })
            .catch(err => alert("An error occured while trying to retrieve alerts"));
        
        },1000);
        
        // Cleanup function to clear interval when component unmounts or when selectedValue changes
        return () => clearInterval(requestInterval);

    }, [hostFilter,portFilter,methodFilter,uriFilter])

    /**
     * Auxilary Methods
     */
    const alertsData = () => {
        if(alerts) {
            return alerts.map((alert) => (
                {
                    id: alert.id,
                    timestampCreation: alert.timestampCreation,
                    timestampLastUpdate: alert.timestampLastUpdate,
                    duration: alert.duration,
                    threshold: alert.threshold,
                    host: alert.host,
                    port: alert.port,
                    uri: alert.uri,
                    method: alert.method
                }
            ))
        }
        
        return [];
    }

    function handleHostFilterChange(e) {
        setHostFilter(e.target.value);
    }

    function handlePortFilterChange(e) {
        setPortFilter(e.target.value);
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
            <ApiFilter handleHostChange={handleHostFilterChange}
                handlePortChange={handlePortFilterChange}
                handleMethodChange={handleMethodFilterChange}
                handleUriChange={handleUriFilterChange}/>
        </>
    );
}