import React, { useState } from 'react';
import { IoMicOutline } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import '../../styles/chat_input.css';

export default function ChatInput() {
  const [textareaHeight, setTextareaHeight] = useState('auto');

  const handleTextareaChange = (event) => {
    const element = event.target;
    element.style.height = 'auto'; // Reset the height to auto to calculate the correct scrollHeight
    element.style.height = `${element.scrollHeight}px`; // Set the height to the scrollHeight
    setTextareaHeight(`${element.scrollHeight}px`); // Update the state with the new height
  };

  return (
    <div className='chat-section flex flex-row items-center justify-between bg-[#0D0F10] m-2 rounded-2xl p-2'>
      <div className="left flex flex-row items-center w-full ">
        <div className="mic-button text-2xl cursor-pointer hover:bg-slate-800 px-3 py-3 rounded-xl text-slate-500 hover:text-slate-300">
          <IoMicOutline />
        </div>
        <div className="text-area-to-chat w-full text-sm ">
          <textarea
            id="chat-input"
            className="sm:h-16 h-10 w-full resize-none px-5 py-4 bg-[#0D0F10] active:border-none focus:outline-none text-white placeholder:text-wrap placeholder:text-sm"
            placeholder='Up for a chat?'
            style={{ height: textareaHeight }}
            onChange={handleTextareaChange}
            rows={1}
          />

        </div>
      </div>
      <div className="right flex flex-row items-center gap-1 ">
        <div className="send-button text-lg cursor-pointer hover:bg-slate-800 px-3 py-3 rounded-xl text-slate-500 hover:text-slate-300">
          <LuSend />
        </div>
      </div>
    </div>
  );
}
