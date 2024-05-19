import { Box } from "@mui/material";
import React from "react";
import { DataGrid } from '@mui/x-data-grid';

export default function ApiDataGrid({data}) {
    const columns = [
        {field: 'id', headerName: 'ID', width:100, minWidth:100, maxWidth: 400},
        {field: 'timestamp', headerName: 'TIMESTAMP', width:250, minWidth:100, maxWidth: 400},
        {field: 'callerServerName', headerName: 'CALLER SERVER NAME', width:240, minWidth:100, maxWidth: 400},
        {field: 'callerServerPort', headerName: 'CALLER SERVER PORT', width:240, minWidth:100, maxWidth: 400},
        {field: 'method', headerName: 'METHOD', width:200, minWidth:100, maxWidth: 400},
        {field: 'requestUri', headerName: 'URI', width:260, minWidth:100, maxWidth: 400},
        {field: 'requestPayload', headerName: 'REQUEST PAYLOAD', width:270, minWidth:100, maxWidth: 400},
        {field: 'responsePayload', headerName: 'RESPONSE PAYLOAD', width:270, minWidth:100, maxWidth: 400}
    ];

    const rows = data;

    //Rendering
    return(
        <Box sx={{margin: 'auto', height: '100%', width: '96%'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                onRowSelectionModelChange={(rowId) => {
                        //alert("you selected row"+rowId)
                        //this.props.handleRowSelection(rowId)
                    }
                }
                pageSizeOptions={[5,10,20]}
            />

        </Box>
    );
}