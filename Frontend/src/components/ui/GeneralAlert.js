import React from 'react'
import Alert from '@mui/material/Alert';

export default function GeneralAlert(props) {
    return (
        <Alert severity={`${props.type}`} color={`${props.color}`} >
            {props.message}
        </Alert>
    );
}
