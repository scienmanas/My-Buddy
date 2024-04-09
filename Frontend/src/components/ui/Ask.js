import React from 'react';
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { PiLinkSimpleBold } from "react-icons/pi";


export default function Ask(props) {

    const [userBehaviour, setUserBehaviour] = useState({
        mood: '',
    })

    const handleSubmit = () => {
        console.log(userBehaviour)
        props.configureUserBehaviour(userBehaviour)
    }


    return (
        <div className="ask-box z-50 absolute flex justify-center items-center w-full min-h-screen duration-200">
            <div className='w-fit h-fit px-9 py-10 bg-[#1A1D21] rounded-xl gap-1 flex flex-col'>
                <div className="heading-and-close-button flex items-center h-fit justify-between">
                    <div className="heading text-[18px] text-white font-semibold h-fit">
                        Hey Buddy, lets chat !
                    </div>
                    <div
                        className="close-button w-fit h-fit cursor-pointer text-white text-2xl"
                        onClick={props.handleClose}
                    >
                        <IoMdClose />
                    </div>
                </div>
                <div className="ask-mood">
                    <textarea
                        className='text-white'
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        value={userBehaviour.mood}
                        onChange={
                            (e) => {
                                setUserBehaviour({
                                    mood: e.target.value
                                })
                            }
                        }
                    />
                </div>
                <div
                    className="button-post-ask text-white p-3 bg-red-400 w-fit h-fit rounded-md cursor-pointer"
                    onClick={handleSubmit}
                >
                    feed
                </div>
            </div>
        </div>
    )
}