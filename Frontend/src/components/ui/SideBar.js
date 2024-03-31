import React from 'react'
import NewChatOption from './NewChatOption '
import Chats from './Chats'
import Account from './Account'
import '../../styles/side_bar.css'

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function SideBar(props) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`side-bar side-bar-height bg-[#1f2325] flex flex-col justify-between py-4 pl-2 pr-[6px] rounded-2xl m-2 ${isOpen ? 'open' : 'closed'}`}>
            <div className="toggle-button" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={isOpen ? faChevronLeft : faChevronRight} />
            </div>
            <div className="top-items flex flex-col gap-8">
                <div className="project-setting">
                    <NewChatOption />
                </div>
                <div className="chats">
                    <Chats chatList={props.chatList}/>
                </div>
            </div>
            <div className="down-items">
                <div className="account-settings">
                    <Account />
                </div>
            </div>
        </div>
    );
}
