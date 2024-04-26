import React, { useState, useEffect, useRef } from 'react';
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import '../../styles/account.css';
import { useGlobalContext } from '../../Context/global_context';
import useLogout from '../../hooks/uselogout';
import boyImage from '../../assets/users/boy.png';
import girlImage from '../../assets/users/girl.png';
import GeneralSmallLoader from '../loaders/GeneralSmallLoader';

export default function AccountDownSettings() {

    const [wait, setWait] = useState(false)

    const { logout } = useLogout()
    const [isOnline, setIsOnline] = useState(true);
    const { authUser } = useGlobalContext()
    const [accountSettingPopup, setAccountSettingPopup] = useState(false);
    const popupRef = useRef(null); // Reference to the popup element

    // Configure display photo
    const userPhoto = authUser?.gender === 'male' ? boyImage : girlImage;

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

    const handleOnClickLogout = () => {
        logout();
    }

    const user = "User"
    return (
        <div className='account w-full relative'>
            <div
                className="account-card account-box px-3 py-5 cursor-pointer  bg-[#0d0f10] rounded-xl  flex flex-row justify-between items-center"
                onClick={handleAccountPopUp}
            >
                <div className="account-button flex flex-row items-center gap-2">
                    <div className="photo relative">
                        <img
                            className='w-[40px] h-[40px] rounded-2xl'
                            src={userPhoto}
                            alt=""
                        />
                        <div className="onlinestatus absolute top-0 right-0">
                            <div className={`w-[10px] h-[10px] rounded-full ${isOnline ? 'bg-[#00FF00]' : 'bg-[#FF0000]'} `}> </div>
                        </div>

                    </div>

                    <div className="content flex flex-col select-none">
                        <div className="name text-[#FFFFFF] font-bold">
                            {authUser?.fullName}
                        </div>
                        <div className="plan text-[#B6F09C]">
                            {authUser?.profession || user}
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
                        <div
                            className='logout flex flex-row items-center gap-[6px] hover:bg-slate-800 rounded-md px-2 py-2 cursor-pointer duration-150'
                            onClick={() => {
                                setWait(() => true)
                                handleOnClickLogout()
                            }}
                        >
                            {wait ? <GeneralSmallLoader /> : (
                                <div className="svg">
                                    <IoLogOutOutline />
                                </div>
                            )}
                            <div
                                className="text select-none w-full flex flex-row items-center gap-2"
                            >
                                <div className="text-logout">
                                    Log out
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div >
    )
}
