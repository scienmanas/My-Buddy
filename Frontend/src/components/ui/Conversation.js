import React from 'react'
import MarkDownConverter from './MarkDownConverter'


export default function Conversation(props) {

    console.log(props.chatHistory)
    return (
       <>
        <div
            className='text-white'
        >
            {props.chatHistory.map((chat, index) => (
                <div
                    key={index}
                    className=''
                >
                    {<MarkDownConverter chat={chat} />}
                </div>
                
            ))}
        </div>
        
        </>
    )
}
