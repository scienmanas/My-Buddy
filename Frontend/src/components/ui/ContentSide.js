import React from 'react'
import { useState } from 'react';
import { IoChatbubbleOutline } from "react-icons/io5";
import artificiumCvg from '../../assets/icons/artificium_icon.png';
import { MdOutlineFolderOpen } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import currentIndicator from '../../assets/icons/current_indicator.png';

export default function ContentSide(props) {


  const [currentTool, setCurrentTool] = useState("friend")

  const handleTool = (tool) => {
    console.log(tool)
    setCurrentTool(tool)
  }

  return (
    <div className='m-3 rounded-xl  content-side bg-[#0D0F10] h-fit  pt-2 flex flex-col gap-2 sm:gap-4'>
      <div className="chat-info px-2 sm:px-4 sm:py-2 py-1 flex flex-row items-center justify-between">
        <div className="info flex flex-col p-2">
          <div className="chat-name h-[32px]  text-sm sm:text-base text-white font-bold select-none">
            <h1>{props.chatList[props.currentChat - 1][1]}</h1>
          </div>
          <div className="chat-details text-sm sm:text-base text-[#9B9C9E] h-[20px] select-none">
            <p>{props.chatList[props.currentChat - 1][1]}</p>
          </div>
        </div>
        <div className="actions text-white flex flex-row gap-7 items-center">
          <div
            onClick={props.handleShare}
            className="edit-option bg-[#1e2125] py-[14px] px-[12px] sm:py-[18px] sm:px-[16px] rounded-lg cursor-pointer text-sm sm:text-lg"
          >
            <MdOutlineEdit />
          </div>
        </div>
      </div>
      <div className="action-type flex flex-row items-center gap-2 text-white">
        <div
          className="friend text-sm flex flex-col items-center gap-4 group cursor-pointer "
          onClick={() => handleTool("friend")}
        >
          <div className="text-contents flex flex-row items-center gap-[9px]">
            <div className="svg">
              <img src={artificiumCvg} alt="" />
            </div>
            <div className="text h-20px w-fit text-[#E8E9E9] select-none">
              Friend
            </div>
          </div>
          <div className={`current-indicator ${currentTool === 'friend' ? 'visible' : 'invisible'}`}>
            <img
              src={currentIndicator}
              alt=""
              className=''
            />
          </div>
        </div>
        <div
          className="parent text-sm flex flex-col items-center gap-4 group cursor-pointer"
          onClick={() => handleTool("parent")}
        >
          <div className="text-contents flex flex-row items-center gap-[9px]">
            <div className="svg">
              <IoChatbubbleOutline />
            </div>
            <div className="text h-20px w-fit text-[#E8E9E9] select-none">
              Parent
            </div>
          </div>
          <div className={`current-indicator ${currentTool === 'parent' ? 'visible' : 'invisible'}`}>
            <img
              src={currentIndicator}
              alt=""
              className=''
            />
          </div>
        </div>
        <div
          className="bff text-sm flex flex-col items-center gap-4  group cursor-pointer"
          onClick={() => handleTool("femaalebestfriend")}
        >
          <div className="text-content flex flex-row items-center gap-[9px]">
            <div className="svg">
              <MdOutlineFolderOpen />
            </div>
            <div className="text h-20px w-fit text-[#E8E9E9] select-none">
              Bff
            </div>
          </div>
          <div className={`current-indicator ${currentTool === 'femaalebestfriend' ? 'visible' : 'invisible'}`}>
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
