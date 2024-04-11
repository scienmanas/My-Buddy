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
                {props.chatList === null ? null :
                    (
                        <ul className='flex flex-col gap-1'>
                            {props.chatList.slice().reverse().map(chat => (
                                <li
                                    onClick={() => {
                                        props.handleChangeChat(chat.id)
                                    }
                                    }
                                    className={`items flex flex-row items-center gap-4  select-none hover:bg-black  cursor-pointer rounded-lg duration-150 py-3 px-3 ${props.currentChat === chat.id ? 'bg-black' : ''}`}
                                    key={chat.id}
                                >
                                    <div className="svg w-fit h-fit text-sm sm:text-base">
                                        <img src={chat.icon} alt="" />
                                    </div>
                                    <div className="chat-name text-sm sm:text-base text-wrap max-w-60">
                                        {chat.name}
                                    </div>
                                </li>
                            ))}
                        </ul>

                    )
                }
            </div>
        </div>
    )
}
