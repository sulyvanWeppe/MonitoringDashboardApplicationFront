import Typography from '@mui/material/Typography';
import axios from "axios";

export default function ApiEventMain() {
    axios.get("http://localhost:8081/ping")
    .then(response => {
        console.log(response);
        console.log(response.data);
    })
    .catch(err => alert("error"));

    return (
        <div>
            <Typography>This is a test</Typography>
        </div>
    );
}