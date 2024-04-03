import React from 'react'
import '../../styles/conversation.css'
import Bot from './Bot'
import User from './User'

export default function Conversation(props) {

    return (
        <>
        <div className="converation-container text-white flex flex-col gap-5 w-full flex-wrap">
            {props.chats.map((message, index) => {
                if (message.role === 'user') {
                    return (
                        <User key={index} text={message.parts[0].text} />
                    );
                }
                else if (message.role === 'model') {
                    return (
                        <Bot key={index} text={message.parts[0].text} />
                    )
                }
                else {
                    return null; // error handling
                }
            })}
        </div>
        </>
    )
}


{/* <>
<div
    className='text-white gap-4 flex flex-col '
>
    {props.chatHistory.map((chat, index) => (
        <div
            key={index}
            className='p-1 bg-gray-700 rounded-lg'
        >
            {<MarkDownConverter chat={chat} />}
        </div>
        
    ))}
</div>

</> */}