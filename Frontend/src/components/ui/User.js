import React from 'react'
import MarkDownConverter from './MarkDownConverter';
import userLogo from '../../assets/users/man.png';
import '../../styles/user.css';

export default function User(props) {
    return (
        <div className="user w-full flex justify-end">
            <div className='user-box flex flex-row-reverse items-center max-w-[75%] '>
                <div className="bot-logo w-4">
                    <img src={userLogo} alt="" />
                </div>
                <div className="text-user-box px-2 py-1 bg-transparent bg-gradient-to-tr to-[#C33764] from-[#1D2671] text-sm sm:text-base lg:text-lg">
                    <MarkDownConverter chat={props.text} />
                </div>
            </div>
        </div>

    )
}
