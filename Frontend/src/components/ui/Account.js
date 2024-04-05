import React, { useState, useEffect, useRef } from 'react';
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import '../../styles/account.css';

export default function AccountDownSettings() {
    const [name, setName] = useState("Manas Poddar");
    const [userType, setUserType] = useState("Student");
    const [isOnline, setIsOnline] = useState(true);
    const [accountSettingPopup, setAccountSettingPopup] = useState(false);
    const popupRef = useRef(null); // Reference to the popup element

    useEffect(() => {
        const updateOnlineStatus = () => {
            setIsOnline(navigator.onLine);
        }
        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);
        return () => {
            window.removeEventListener('online', updateOnlineStatus);
            window.removeEventListener('offline', updateOnlineStatus);
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                // Clicked outside of the popup, close it
                setAccountSettingPopup(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [popupRef]);

    const handleAccountPopUp = () => {
        setAccountSettingPopup(!accountSettingPopup);
    }

    return (
        <div className='account w-full relative'>
            <div
                className="account-card account-box px-3 py-5 cursor-pointer bg-transparent bg-gradient-to-br from-[#0d0f10] to-gray-900 rounded-xl  flex flex-row justify-between items-center"
                onClick={handleAccountPopUp}
            >
                <div className="account-button flex flex-row items-center gap-2">
                    <div className="photo relative">
                        <img
                            className='w-[40px] h-[40px] rounded-2xl'
                            // src={userImage}
                            src='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            alt=""
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
            </div>
            {accountSettingPopup &&
                <div ref={popupRef} className="account-popup absolute -top-[11.5rem] sm:-top-[12.3rem] bg-[#131619] px-2 py-2 rounded-lg w-full z-50">
                     <div className="content-account-list flex flex-col text-white gap-[2px]">
                        <div className='customize-again flex items-center gap-[6px] hover:bg-slate-800 rounded-md px-2 py-2 cursor-pointer duration-150'>
                            <div className="svg">
                                <MdOutlineDashboardCustomize />
                            </div>
                            <div className="text select-none">
                                Customize Again
                            </div>
                        </div>
                        <div className='help-and-faq flex flex-row items-center gap-[6px] hover:bg-slate-800 rounded-md px-2 py-2 cursor-pointer duration-150'>
                            <div className="svg">
                                <FiExternalLink />
                            </div>
                            <div className="text select-none">
                                Help & FAQ
                            </div>
                        </div>
                        <div className='setting flex flex-row items-center gap-[6px] hover:bg-slate-800 rounded-md px-2 py-2 cursor-pointer duration-150'>
                            <div className="svg">
                                <IoSettingsOutline />
                            </div>
                            <div className="text select-none">
                                Settings
                            </div>
                        </div>
                        <div className="line m-1 ">
                            <div className="line bg-gray-600 h-[1px] w-full"></div>
                        </div>
                        <div className='logout flex flex-row items-center gap-[6px] hover:bg-slate-800 rounded-md px-2 py-2 cursor-pointer duration-150'>
                            <div className="svg">
                                <IoLogOutOutline />
                            </div>
                            <div className="text select-none">
                                Log out
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
