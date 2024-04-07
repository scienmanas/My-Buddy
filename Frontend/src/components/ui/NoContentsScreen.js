import React from 'react'
import Lottie from 'react-lottie';
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

export default function NoContentsScreen() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-6 p-2'>
      <div className="animation pointer-events-none w-fit h-fit">
        <Lottie
          className=''
          options={noContentScreenAnimation}
          height={window.innerHeight - 265}
          isClickToPauseDisabled={true}
        />
      </div>
      <div className="select-different-card-user flex flex-row flex-wrap items-center gap-5 text-sm sm:text-base lg:text-xl  justify-self-auto justify-center w-full h-fit ">
        <div
          className='select-card user-options px-3 py-2 border-2 border-white border-opacity-20 rounded-xl cursor-pointer glow hover:bg-gray-800 hover:border-gray-700 duration-200 hover:scale-105 active:scale-95'
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
          className='select-card user-options px-3 py-2 border-2 border-white border-opacity-20 rounded-xl cursor-pointer glow hover:bg-gray-800 hover:border-gray-700 duration-200 hover:scale-105 active:scale-95'
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
          className='select-card user-options px-3 py-2 border-2 border-white border-opacity-20 rounded-xl cursor-pointer glow hover:bg-gray-800 hover:border-gray-700 duration-200 hover:scale-105 active:scale-95'
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
          className='select-card user-options px-3 py-2 border-2 border-white border-opacity-20 rounded-xl cursor-pointer glow hover:bg-gray-800 hover:border-gray-700 duration-200 hover:scale-105 active:scale-95'
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
      </div>
      <div className="start-chat-button">
        <button
          className="btn w-40 h-16"
        >
          <svg
            className='sparkle'
            height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1
          ">
            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
          </svg>
          <span class="text">Start Chat</span>
        </button>
      </div>
    </div>
  )
}
