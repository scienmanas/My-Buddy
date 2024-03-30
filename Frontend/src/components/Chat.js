import React, { useState } from 'react';
import { IoMicOutline } from "react-icons/io5";
import { ImAttachment } from "react-icons/im";
import sendMessage from '../assets/icons/send_message.png';
import { LuSend } from "react-icons/lu";

export default function Chat() {
    const [textareaHeight, setTextareaHeight] = useState('auto');


    return (
        <div className='chat-section flex flex-row items-center justify-between bg-[#0D0F10] m-3 rounded-2xl p-3'>
            <div className="left flex flex-row items-center w-full ">
                <div className="mic-button text-2xl cursor-pointer hover:bg-slate-800 px-3 py-3 rounded-xl text-slate-500 hover:text-slate-300">
                    <IoMicOutline />
                </div>
                <div className="text-area-to-chat w-full">
                    <textarea
                        id="chat-input"
                        className="h-16 w-full resize-none px-5 py-4 bg-[#0D0F10] active:border-none focus:outline-none text-white text-lg"
                        placeholder='You can ask me anything! I am here to help you...'
                    />
                </div>
            </div>
            <div className="right flex flex-row items-center gap-1 ">
                <div className="attachment-area text-xl cursor-pointer hover:bg-slate-800 px-3 py-3 rounded-xl text-slate-500 hover:text-slate-300">
                    <ImAttachment />
                </div>
                <div className="send-button text-lg cursor-pointer hover:bg-slate-800 px-3 py-3 rounded-xl text-slate-500 hover:text-slate-300">
                    <LuSend />
                </div>
            </div>
        </div>
    );
}
