import React, { useState } from 'react'
import logo from '../../assets/logo/logo.png'
import { FaEdit } from "react-icons/fa";

export default function NewChatOption () {


    const handleChatNow = () => {
        console.log("Chat Now")
    }


    return (
        <div className='project-team flex flex-row justify-between items-center px-2 py-4 hover:bg-slate-800 cursor-pointer rounded-xl active:scale-[0.97] duration-100'>
            <div className="project-team-info flex flex-row gap-2 items-center">
                <div className="logo w-7">
                    <img
                        className=''
                        src={logo}
                        alt=""
                    />
                </div>
                <div className="chat text-white select-none">
                    New Chat
                </div>
            </div>
            <div className="actions text-[#686B6E] text-2xl cursor-pointer group relative">
                <div
                    className="button hover:bg-black px-3 py-2 rounded-2xl flex items-center"
                    onClick={handleChatNow}
                >
                    <FaEdit />
                </div>
                <div className='text invisible group-hover:visible absolute text-sm w-24 h-fit -left-8 top-11  text-center flex items-center rounded-xl px-4 py-2 bg-black'>
                    Chat Now
                </div>
            </div>
        </div>
    )
}
