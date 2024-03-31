import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function CloseBar(props) {


    return (
        <div
            onClick={props.toggleSidebar}
            className='bg-slate-800 rounded-full p-3 -mx-2 hover:bg-slate-700 cursor-pointer z-20 duration-150'>
            <div className="toggle-button">
                <FontAwesomeIcon icon={props.isOpen ? faChevronLeft : faChevronRight} />
            </div>
        </div>
    )
}
