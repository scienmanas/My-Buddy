import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';


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
        <div className='chat-list flex flex-col gap-4' >
            <div className="heading text-[#686B6E] select-none px-3 font-bold">
                <h2>Chats</h2>
            </div>
            <div className="chat-list text-[#E8E9E9] overflow-auto" style={{ maxHeight: `${browserHeight - 280}px`, overflowY: 'auto' }}
 >
                <ul>
                    {props.chatList.map((chat, index) => (
                        <li
                            className='items flex flex-row items-center gap-4 select-none hover:bg-black cursor-pointer rounded-lg duration-150 py-3 px-3'
                            key={index}>
                            <div className="svg w-fit h-fit">
                                <img src={chat[1]} alt="" />
                            </div>
                            <div className="chat-name">
                                {chat[0]}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
