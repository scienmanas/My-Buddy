import React from 'react'
import '../../styles/fetchchatlistloader.css'

export default function FetchChatListLoader() {
    return (
        <div className="fetch-chatlist-loader absolute flex inset-0 justify-center items-center">
            <div className='fetch-loader-chatlist fetch-chatlist-loading-roller '>
            </div>
        </div>
    )
}
