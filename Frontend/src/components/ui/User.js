import React from 'react'
import MarkDownConverter from './MarkDownConverter';
import userLogo from '../../assets/users/man.png';
import '../../styles/user.css';

export default function User(props) {
    return (
        <div className="user w-full flex justify-end">
            <div className='user-box flex flex-row-reverse justify-center items-start  max-w-[75%] gap-[5px]'>
                <div className="bot-logo w-8">
                    <img
                        src={userLogo}
                        alt=""
                        className='w-8 h-8 rounded-full'
                    />
                </div>
                <div className="text-user-box px-2 py-1 bg-transparent bg-gradient-to-tr to-[#C33764] from-[#1D2671] text-sm sm:text-base">
                    <MarkDownConverter chat={props.text} />
                </div>
            </div>
        </div>

    )
}
