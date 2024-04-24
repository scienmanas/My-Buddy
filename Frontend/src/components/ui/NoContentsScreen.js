import React from 'react'
import { useState } from 'react';
import Lottie from 'react-lottie';
import Ask from './Ask';
import '../../styles/nocontentscreen.css';
import noContentScreenAnimationFile from '../../assets/animations/NoContentRobotAniination.json'


const noContentScreenAnimation = {
  loop: true,
  autoplay: true,
  animationData: noContentScreenAnimationFile,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid meet'
  }
}

export default function NoContentsScreen(props) {

  // Window configuration
  const [askWindow, setAskWindow] = useState(false)

  // Configure user behaviour
  const userBehaviour1 = {
    title: 'Hurray !',
    description: 'Yayy !, I won a prize ! Yayyy...!',
    mood: 'happy',
    bothering: '',
    relationshipStatus: 'single',
    mode: 'friend',
  }

  const userBehaviour2 = {
    title: 'Heart Break',
    description: 'I broke up with my girlfriend.',
    mood: 'sad',
    bothering: 'breakup',
    relationshipStatus: 'complicated',
    mode: 'friend',
  }

  const userBehaviour3 = {
    title: 'Isolation',
    description: 'I am feeling lonely.',
    mood: 'lonely',
    bothering: 'loneliness',
    relationshipStatus: 'single',
    mode: 'friend',
  }

  const userBehaviour4 = {
    title: 'Discussing professional life',
    description: 'I am not happy with my job',
    mood: 'serious',
    bothering: 'career',
    relationshipStatus: 'single',
    mode: 'friend',
  }


  // Handle predefined chat on clicking
  const handlePredefinedChat = (behaviour) => {
    props.configureUserBehaviour(behaviour)
  }

  return (
    <>
      {askWindow &&
        <Ask configureUserBehaviour={props.configureUserBehaviour} handleClose={() => {
          setAskWindow(() => false)
        }}
        />
      }
      <div className='w-full h-full flex flex-col items-center justify-center gap-6 p-2'>
        <div className="animation pointer-events-none w-fit h-fit">
          <Lottie
            className=''
            options={noContentScreenAnimation}
            height={window.innerHeight - 280}
            isClickToPauseDisabled={true}
          />
        </div>
        {/* <div className="select-different-card-user flex flex-row flex-wrap items-center gap-5 text-sm sm:text-base lg:text-xl  justify-self-auto justify-center w-full h-fit ">
          <div
            onClick={() => handlePredefinedChat(userBehaviour1)}
            className='option-1 select-card user-options px-3 py-2 border-2 border-white border-opacity-20 rounded-xl cursor-pointer glow hover:bg-gray-800 hover:border-gray-700 duration-200 hover:scale-105 active:scale-95'
          >
            <div className="contents-text w-fit h-fit">
              <div className="heading-user-select">
                Prize Won
              </div>
              <div className="text-description-user-select">
                Talk with a friend who 
              </div>
            </div>
          </div>
          <div
            onClick={() => handlePredefinedChat(userBehaviour2)}
            className='option-2 select-card user-options px-3 py-2 border-2 border-white border-opacity-20 rounded-xl cursor-pointer glow hover:bg-gray-800 hover:border-gray-700 duration-200 hover:scale-105 active:scale-95'
          >
            <div className="contents-text w-fit h-fit">
              <div className="heading-user-select">
                How are you?
              </div>
              <div className="text-description-user-select">
                I am fine hehehehe
              </div>
            </div>
          </div>
          <div
            onClick={() => handlePredefinedChat(userBehaviour3)}
            className='option-3 select-card user-options px-3 py-2 border-2 border-white border-opacity-20 rounded-xl cursor-pointer glow hover:bg-gray-800 hover:border-gray-700 duration-200 hover:scale-105 active:scale-95'
          >
            <div className="contents-text w-fit h-fit">
              <div className="heading-user-select">
                How are you?
              </div>
              <div className="text-description-user-select">
                I am fine  hehehehe
              </div>
            </div>
          </div>
          <div
            onClick={() => handlePredefinedChat(userBehaviour4)}
            className='option-4 select-card user-options px-3 py-2 border-2 border-white border-opacity-20 rounded-xl cursor-pointer glow hover:bg-gray-800 hover:border-gray-700 duration-200 hover:scale-105 active:scale-95'
          >
            <div className="contents-text w-fit h-fit">
              <div className="heading-user-select">
                How are you?
              </div>
              <div className="text-description-user-select">
                I am fine hehehehe
              </div>
            </div>
          </div>
        </div> */}
        <div className="start-chat-button">
          <button
            className="btn w-40 h-16"
            onClick={() => {
              setAskWindow(true);
            }}
          >
            <svg
              className='sparkle'
              height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1
          ">
              <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
            </svg>
            <span className="text">Start Chat</span>
          </button>
        </div>
      </div>
    </>
  )
}
