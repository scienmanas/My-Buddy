import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import '../../styles/chats.css';


export default function Chats(props) {

    const [browserHeight, setBrowserHeight] = useState(window.innerHeight);

    useEffect(() => {

        const updateBrowserHeight = () => {
            setBrowserHeight(window.innerHeight);
        };

        window.addEventListener('resize', updateBrowserHeight);
        return () => {
            window.removeEventListener('resize', updateBrowserHeight);
        };
    }, [])


    return (
        <div className='chat-list flex flex-col gap-4'>
            <div className="heading text-[#686B6E] select-none sm:px-3 font-bold">
                <h2>Chats</h2>
            </div>
            <div className="chat-list text-[#E8E9E9] overflow-auto scroll-smooth hide-scrollbar" style={{ maxHeight: `${browserHeight - 280}px`, overflowY: 'auto' }}
 >
                <ul className='flex flex-col gap-1'>
                    {console.log(props.currentChat)}
                    {}
                    {props.chatList.map((chat, index) => (
                        <li
                            onClick={() => props.hanldeChangeChat(chat[0])}
                            className={`items flex flex-row items-center gap-4  select-none hover:bg-black  cursor-pointer rounded-lg duration-150 py-3 px-3 ${props.currentChat === chat[0] ? 'bg-black' : ''}`}
                            key={index}>
                            <div className="svg w-fit h-fit text-sm sm:text-base">
                                <img src={chat[2]} alt="" />
                            </div>
                            <div className="chat-name text-sm sm:text-base">
                                {chat[1]}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
