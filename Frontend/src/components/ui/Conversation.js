import React from 'react'
import MarkDownConverter from './MarkDownConverter'
import '../../styles/conversation.css'
import Bot from './Bot'
import User from './User'

export default function Conversation(props) {

    console.log(props.chatHistory)
    return (
        // <div className="conversation">
        //     {props.chatHistory.map((chat, index) => {
        //         if (chat.type === 'bot') {
        //             return <Bot key={index} chat={chat.text} />
        //         } else {
        //             return <User key={index} chat={chat.text} />
        //         }
        //     })}
        // </div>
        <div></div>
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