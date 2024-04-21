import React, { useEffect } from 'react'
import { useState } from 'react';
import { IoChatbubbleOutline } from "react-icons/io5";
import artificiumCvg from '../../assets/icons/artificium_icon.png';
import { MdOutlineFolderOpen } from "react-icons/md";
import { RiChatNewLine } from "react-icons/ri";
import currentIndicator from '../../assets/icons/current_indicator.png';
import { useGlobalContext } from '../../Context/global_context';

export default function InfoTop(props) {


  const { setmode, selectedchat, chattitle, chatdesc, mode } = useGlobalContext()


  const handleclick = (tool) => {
    setmode(() => tool)
  }


  return (
    <div className='m-2 sm:m-3 rounded-xl  content-side bg-[#0D0F10] h-fit pt-2 flex flex-col gap-6 sm:gap-4'>
      <div className="chat-info px-2 sm:px-4 sm:py-2 py-1 flex flex-row items-center justify-between">
        <div className="info flex flex-col p-2 gap-2">
          {props.currentChat === null ? null : (
            <>
              <div className="chat-name h-fit  text-sm sm:text-base text-white font-bold select-none">
                <h1>{chattitle}</h1>
              </div>
              <div className="chat-details text-sm sm:text-base text-[#9B9C9E] h-[20px] select-none">
                <p>{chatdesc}</p>
              </div>
            </>
          )}
        </div>

        <div className="actions text-white flex flex-row gap-1 items-center">
          <div
            className="new-chat-button cursor-pointer sm:text-2xl text-xl hover:bg-gray-800 duration-150 p-2 rounded-xl active:scale-90"
            onClick={props.handleNewChat}
          >
            <RiChatNewLine />
          </div>
          <div
            className={`open-side-pannel-for-sm flex w-fit cursor-pointer hover:bg-gray-800 p-2 rounded-lg border-[1px] border-transparent active:border-blue-400 duration-150 relative`}
            onClick={props.toggleSidebar}
          >
            <div className="lines flex flex-col gap-[3.7px] ">
              <div className={`line-2 h-[3px] w-[23px] bg-[#9B9C9E] rounded-full ${props.isOpen ? 'rotate-45' : ''} duration-100`}></div>
              <div className={`line-1 h-[3px] w-[23px] bg-[#9B9C9E] rounded-full ${props.isOpen ? 'hidden' : ''}`}></div>
              <div className={`line-3 h-[3px] w-[23px] bg-[#9B9C9E] rounded-full ${props.isOpen ? '-rotate-45' : ''} duration-100`}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="action-type flex flex-row items-center gap-1 text-white">
        <div
          className="friend text-sm flex flex-col items-center gap-4 group cursor-pointer "
          onClick={() => handleclick("friend")}
        >
          <div className="text-contents flex flex-row items-center gap-[9px]">
            <div className="svg">
              <img src={artificiumCvg} alt="" />
            </div>
            <div className="text-sm sm:text-base  w-fit text-[#E8E9E9] select-none">
              Friend
            </div>
          </div>
          <div className={`current-indicator ${mode === 'friend' ? 'visible' : 'invisible'}`}>
            <img
              src={currentIndicator}
              alt=""
              className=''
            />
          </div>
        </div>
        <div
          className="parent text-sm flex flex-col items-center gap-4 group cursor-pointer"
          onClick={() => handleclick("parent")}
        >
          <div className="text-contents flex flex-row items-center gap-[9px]">
            <div className="svg">
              <IoChatbubbleOutline />
            </div>
            <div className="text-sm sm:text-base  w-fit text-[#E8E9E9] select-none">
              Parent
            </div>
          </div>
          <div className={`current-indicator ${mode === 'parent' ? 'visible' : 'invisible'}`}>
            <img
              src={currentIndicator}
              alt=""
              className=''
            />
          </div>
        </div>
        <div
          className="councellor text-sm flex flex-col items-center gap-4  group cursor-pointer"
          onClick={() => handleclick("councellor")}
        >
          <div className="text-content flex flex-row items-center gap-[9px]">
            <div className="svg">
              <MdOutlineFolderOpen />
            </div>
            <div className="text-sm sm:text-base  w-fit text-[#E8E9E9] select-none">
              Counsellor
            </div>
          </div>
          <div className={`current-indicator ${mode === 'councellor' ? 'visible' : 'invisible'}`}>
            <img
              src={currentIndicator}
              alt=""
              className=''
            />
          </div>
        </div>
      </div>
    </div>
  )
}
