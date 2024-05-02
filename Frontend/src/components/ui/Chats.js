import React, { useState, useEffect } from 'react';
import '../../styles/chats.css';
import { useGlobalContext } from '../../Context/global_context';
import FetchChatListLoader from "../loaders/FetchChatListLoader";

export default function Chats(props) {
    const [browserHeight, setBrowserHeight] = useState(window.innerHeight);
    const { setselectechat } = useGlobalContext();

    useEffect(() => {
        const updateBrowserHeight = () => {
            setBrowserHeight(window.innerHeight);
        };

        window.addEventListener('resize', updateBrowserHeight);
        return () => {
            window.removeEventListener('resize', updateBrowserHeight);
        };
    }, []);

    return (
        <div className='chat-list flex flex-col gap-4'>
            <div className="heading text-[#686B6E] select-none sm:px-3 font-bold">
                <h2>Chats</h2>
            </div>
            {props.isFetching ? <FetchChatListLoader /> : null}
            {props.isFetching ? null : (
                <div className="chat-list text-[#E8E9E9] overflow-auto scroll-smooth hide-scrollbar" style={{ maxHeight: `${browserHeight - 280}px`, overflowY: 'auto' }}>
                    {props.chatList === null || props.chatList.length === 0 ? (
                        <div className="no-chats-available-window h-full flex items-center justify-center text-gray-400">
                            No chats available 🧐
                        </div>
                    ) : (
                        <ul className='flex flex-col gap-1'>
                            {props.chatList.slice().reverse().map(chat => (
                                <li
                                    onClick={() => {
                                        props.handleChangeChat(chat.id, chat.name, chat.desc, 'friend');
                                    }}
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
                    )}
                </div>
            )}
        </div>
    );
}
