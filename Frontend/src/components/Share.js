import React from 'react';
import { useState } from 'react';
import shareIcon from '../assets/icons/share_icon.png';
import { IoMdClose } from "react-icons/io";
import { PiLinkSimpleBold } from "react-icons/pi";


export default function Share(props) {

    


    return (
        <div className='z-40 absolute share w-[720px] h-fit px-9 py-10 bg-[#1A1D21] rounded-xl gap-1 flex flex-col'>
            <div className="heading-and-close-button flex items-center h-fit justify-between">
                <div className="heading text-[25px] text-white font-semibold h-fit">
                    Manage who can view this peoject
                </div>
                <div
                    className="close-button w-fit h-fit cursor-pointer text-white text-2xl"
                    onClick={props.handleCloseShare}
                >
                    <IoMdClose />
                </div>
            </div>
            <div className="share-discripting pr-4 py-4 text-[#9B9C9E] text-[17px]">
                Select which users can access and view this project. Only users with access can view and edit the project.
            </div>
            <div className="input-new-shares flex flex-row justify-between items-center">
                <div className="input-area">
                    <input type="text" placeholder="Enter name or email address" className="input-new-shares" />
                </div>
                <div
                    className="invite-button flex flex-row bg-[#B6F09C] px-4 py-3 rounded-xl w-fit h-fit items-center gap-2 hover:bg-[#93d883]">
                    <div className="svg text-black">
                        <img
                            className=''
                            src={shareIcon}
                            alt=""
                        />
                    </div>
                    <div className="button">
                        <button className='text-black'>
                            Invite
                        </button>
                    </div>
                </div>
            </div>
            <div className="share-list">

            </div>
            <div className="chnage-access-links flex flex-row bg-[#131619] px-4 py-5 rounded-xl">
                <div className="share-status">
                    <div className="svg">

                    </div>
                    <div className="text">

                    </div>
                </div>
                <div className="share-status-permission">
                    
                </div>
                <div className="copy-link-button flex flex-row items-center gap-2 text-[#9B9C9E] px-4 py-3 rounded-2xl bg-transparent bg-gradient-to-br from-[#D7EDED29] to-slate-800 font-semibold cursor-pointer">
                    <div className="svg">
                        <PiLinkSimpleBold />
                    </div>
                    <div className="text text-center select-none">
                        Copy Link
                    </div>
                </div>
            </div>

        </div>
    )
}
