import React from 'react'
import Lottie from 'react-lottie'
import chatLoadingAnimationFile from '../../assets/animations/chat_loading.json'
import logo from '../../assets/logo/logo_transparent.png'


const chatLoadingAnimation = {
    loop: true,
    autoplay: true,
    animationData: chatLoadingAnimationFile,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    },
};


export default function ChatAnswerLoader() {




    return (
        <div className="loading-conetents flex flex-row items-start">
            <div className="bot-logo-animation w-8 flex justify-center items-center">
                <img
                    src={logo}
                    alt=""
                    className='w-8 h-8 rounded-full bg-white p-1'
                />
            </div>
            <div className="chat-loading-animation pointer-events-none flex items-center justify-center w-fit">
                <Lottie options={chatLoadingAnimation}
                    height={40}
                    width={40}
                    isClickToPauseDisabled={true}
                />
            </div>
        </div>

    )
}
