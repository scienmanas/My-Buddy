import React from 'react';
import MarkDownConverter from './MarkDownConverter';
import userLogo from '../../assets/users/man.png';
import '../../styles/user.css';

export default function User(props) {
    return (
        <div className="user w-full flex justify-end">
            <div className='user-box flex items-start max-w-[75%] gap-[5px]'>
                <div className="text-user-box px-2 py-1 bg-transparent bg-gradient-to-tr to-[#C33764] from-[#1D2671] text-sm sm:text-base">
                    <MarkDownConverter chat={props.text} />
                </div>
                <div className="user-logo flex-shrink-0 h-8 w-8">
                    <img
                        src={userLogo}
                        alt=""
                        className='h-full w-full rounded-full'
                    />
                </div>
            </div>
        </div>
    );
}
