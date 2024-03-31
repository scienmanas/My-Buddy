import React, { useState } from 'react'
import Share from './ui/Share'
import SideBar from './ui/SideBar'
import ContentSide from './ui/ContentSide'
import ChatInput from './ui/ChatInput'

export default function Chat() {

    document.body.style.backgroundColor = "#131619"

    const [shareWindow, setShareWindow] = useState(false)


    const handleShare = () => {
        setShareWindow(true)
    }

    const handleCloseShare = () => {
        setShareWindow(false)
    }


    return (
        <div className="app flex flex-row">
            {shareWindow && <div className="share-button absolute w-full h-full flex justify-center items-center opacity-80  bg-slate-600">
                <Share handleCloseShare={handleCloseShare} />
            </div>
            }
            <div className="in-contents flex flex-row w-full">
                <div className="sidebar min-w-72 min-h-screen">
                    <SideBar />
                </div>
                <div className="content-side w-full flex flex-col justify-between">
                    <div className="user-options-bar">
                        <ContentSide handleShare={handleShare} />
                    </div>
                    <div className="text-area">
                    </div>
                    <div className="chat-area text-white">
                        <ChatInput />
                    </div>
                </div>
            </div>
        </div>
        // <div>chat</div>
    )
}
