import React from 'react'
import '../../styles/features.css';
import { SiRobotframework } from "react-icons/si";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { LiaUserFriendsSolid } from "react-icons/lia";

export default function Features() {
  return (
    <div className='feautures-area my-9 w-full h-fit flex flex-col gap-11 sm:gap-y-12 lg:gap-y-14 xl:gap-y-24 py-10 px-10 lg:p-14 xl:px-36  xl:py-14'>
      <div className="up-banner-text flex w-full flex-col gap-1 items-center h-fit">
        <div className="head-text-features landing-body-heading">
          Our Extra-Ordinary Features
        </div>
        <div className="below-text landing-normal-body-text text-xl text-gray-600">
          Talk with the chat bot like you talk with your friends, families, etc.
        </div>
      </div>
      <div className="features-display flex flex-row gap-6 flex-wrap items-center justify-around w-full h-fit">
        <div className="feature-1 flex w-fit h-fit rounded-lg flex-col items-center">
          <div className="svg-features">
            <SiRobotframework />
          </div>
          <div className="text-features">
            Personal friend
          </div>
        </div>
        <div className="feature-2 flex w-fit h-fit rounded-lg flex-col items-center">
          <div className="svg-features">
            <IoChatbubblesOutline />
          </div>
          <div className="text-features">
            Multiple modes
          </div>
        </div>
        <div className="feature-3 flex w-fit h-fit rounded-lg flex-col items-center">
          <div className="svg-features">
            <MdOutlineDashboardCustomize />
          </div>
          <div className="text-features">
            Customizable
          </div>
        </div>
        <div className="feature-4 flex w-fit h-fit rounded-lg flex-col items-center">
          <div className="svg-features">
            <LiaUserFriendsSolid />
          </div>
          <div className="text-features">
            Emotional Support
          </div>
        </div>
      </div>
    </div>
  )
}
