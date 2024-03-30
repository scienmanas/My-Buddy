import React from 'react';
import { useState } from 'react';
import userImage from '../assets/users/man.png';
import { IoSettingsOutline } from "react-icons/io5";

export default function AccountDownSettings() {

    const [name, setName] = useState("Ryann Lee");
    const [userType, setUserType] = useState("Premium");
    const [isOnline, setIsOnline] = useState(true);


    return (
        <div className='account w-full'>
            <div className="account-card px-3 py-5 cursor-pointer bg-transparent bg-gradient-to-br from-slate-700 to-gray-950 rounded-xl shadow-sm shadow-slate-600  flex flex-row justify-between items-center">
                <div className="account-button flex flex-row items-center gap-2">
                    <div className="photo relative">
                        <img
                            className='w-[40px] h-[40px] rounded-xl'
                            src={userImage} alt=""
                        />
                        <div className="onlinestatus absolute top-0 right-0">
                            <div className={`w-[10px] h-[10px] rounded-full ${isOnline ? 'bg-[#00FF00]' : 'bg-[#FF0000]'} `}> </div>
                        </div>

                    </div>

                    <div className="content flex flex-col select-none">
                        <div className="name text-[#FFFFFF] font-bold">
                            {name}
                        </div>
                        <div className="plan text-[#B6F09C]">
                            {userType}
                        </div>
                    </div>
                </div>
                <div className="setting-button text-[#686B6E] text-xl">
                    <IoSettingsOutline />
                </div>
 
            </div>
        </div>
    )
}
