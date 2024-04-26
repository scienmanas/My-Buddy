import React from 'react'
import '../../styles/fetchchatloader.css'

export default function FetchChatLoader() {
    return (
        <div className="fetch-chat-loader absolute flex inset-0 justify-center items-center">
            <div className='fetch-loader fetch-loading-roller '>
            </div>
        </div>
    )
}
