import React from 'react'
import Alert from '@mui/material/Alert';

const capitalize = (word) => {
    const lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}

export default function GeneralAlert(props) {
    return (
        props.alert &&
        <div className={`alert fixed ${props.alert.type === 'success'? 'bg-green-300' : 'bg-red-300'} rounded-xl top-20 -left-[290px] ${props.alertAnimation} transition-transform transform  duration-200`}>
            <div id="alert-1" className={`w-fit flex items-center p-3 text-blue-800 rounded-lg ${props.alert.type}`} role="alert">
                <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div className="ms-3 text-sm font-medium">
                    <span className='font-bold'>{capitalize(props.alert.type)}</span> :{props.alert.msg}
                </div>
            </div>
        </div>
    )
}
