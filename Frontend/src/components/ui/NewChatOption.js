import React, { useState } from 'react'
import logo from '../../assets/logo/logo.png'
import { RiChatNewLine } from "react-icons/ri";

export default function NewChatOption(props) {

    return (
        <div className='project-team flex flex-row justify-between items-center px-2 py-4 hover:bg-slate-800 cursor-pointer rounded-xl active:scale-[0.97] duration-100 gap-4 text-nowrap flex-nowrap'>
            <div className="logo-show flex flex-row gap-2 items-center text-nowrap">
                <div className="logo w-7">
                    <img
                        className=''
                        src={logo}
                        alt=""
                    />
                </div>
                <div className="chat text-white select-none text-sm  sm:text-base font-bold text-nowrap whitespace-nowrap">
                    My Buddy
                </div>
            </div>
            <div className="actions text-[#686B6E] text-2xl cursor-pointer group relative text-nowrap">
                <div
                    className="button hover:bg-black px-3 py-2 rounded-2xl flex items-center"
                    onClick={props.handleNewChat}
                >
                    <RiChatNewLine />
                </div>
                <div className='text invisible group-hover:visible absolute text-sm w-24 h-fit -left-8 top-11  text-center flex items-center rounded-xl px-4 py-2 bg-black'>
                    Chat Now
                </div>
            </div>
        </div>
    )
}
