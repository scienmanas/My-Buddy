import React from 'react';
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import '../../styles/ask.css';

export default function Ask(props) {

    // Need to make more robust so that all input from user is received 

    const [userBehaviour, setUserBehaviour] = useState({
        title: '',
        description: '',
        mood: 'happy',
        bothering: '',
        relationshipStatus: 'single',
        mode: 'friend',
    })
    const [wait, setWait] = useState(false);

    const handleSubmit = () => {
        props.configureUserBehaviour(userBehaviour)
        setWait(() => false)
    }

    const handleMoodSelect = (mood) => {
        setUserBehaviour(prevState => ({
            ...prevState,
            mood: mood,
        }))
    };

    const handleRelationshipStatus = (status) => {
        setUserBehaviour(prevState => ({
            ...prevState,
            relationshipStatus: status,
        }))
    }

    const handleConversationMode = (mode) => {
        setUserBehaviour(prevState => ({
            ...prevState,
            mode: mode,
        }))
    }


    return (
        <div className="ask-box z-50 absolute flex justify-center items-center w-full h-full duration-200">
            <div className=' w-[21rem] sm:w-fit h-fit px-8 py-7 bg-[#2c3137] rounded-xl gap-5 flex flex-col'>
                <div className="heading-and-close-button flex items-center h-fit justify-between">
                    <div className="heading text-[18px] text-white font-semibold h-fit">
                        Let's know about you &#129488;
                    </div>
                    <div
                        className="close-button w-fit h-fit cursor-pointer text-white text-2xl"
                        onClick={props.handleClose}
                    >
                        <IoMdClose />
                    </div>
                </div>
                <div className="title-description flex flex-col gap-4">
                    <div className="chat-title flex flex-col gap-1">
                        <div className="text-title text-gray-100 text-sm sm:text-base font-semibold">
                            Name to our chat &#x2728;
                        </div>
                        <input
                            className='rounded-lg w-36 h-7 sm:h-8 px-1 py-[2px] text-sm sm:text-base outline-2 border-2 border-blue-400 hover:outline-blue-400 duration-200  focus:outline-pink-500'
                            type="text"
                            name=""
                            id=""
                            placeholder='Chat Title'
                            onChange={(e) => {
                                setUserBehaviour(prevState => ({
                                    ...prevState,
                                    title: e.target.value
                                }))
                            }}
                        />
                    </div>
                    <div className="chat-description flex flex-col gap-1">
                        <div className="description-text text-gray-100 text-sm sm:text-base font-semibold">
                            A Nice Description &#x1F58A;&#x1F44C;&#x1F3FB;
                        </div>
                        <input
                            placeholder='Chat Description'
                            className='rounded-lg w-[270px] sm:w-80 h-7 sm:h-8 text-wrape px-1 py-[2px] text-sm sm:text-base outline-2 border-2 border-blue-400 hover:outline-blue-400 duration-200  focus:outline-pink-500'
                            type="text"
                            name=""
                            id=""
                            onChange={(e) => {
                                setUserBehaviour(prevState => ({
                                    ...prevState,
                                    description: e.target.value
                                }))
                            }}
                        />
                    </div>
                </div>
                <div className="ask-question flex flex-col gap-4">
                    <div className="ask-feeling">
                        <div className="text-ask text-gray-100 text-sm sm:text-base font-semibold">
                            How are you feeling today?
                        </div>
                        <div className="select-mood flex flex-row gap-[2px]">
                            <button
                                className={`emoji hover:bg-pink-500 duration-200 text-xl sm:text-2xl rounded-md px-[4.5px] py-[2px] ${userBehaviour.mood === 'happy' ? 'bg-pink-500' : ''}`} onClick={() => handleMoodSelect('happy')}>
                                😊
                            </button>
                            <button
                                className={`emoji hover:bg-pink-500 duration-200 text-xl sm:text-2xl rounded-md px-[4.5px] py-[2px] ${userBehaviour.mood === 'sad' ? 'bg-pink-500' : ''}`} onClick={() => handleMoodSelect('sad')}>
                                😢
                            </button>
                            <button
                                className={`emoji hover:bg-pink-500 duration-200 text-xl sm:text-2xl rounded-md px-[4.5px] py-[2px] ${userBehaviour.mood === 'angry' ? 'bg-pink-500' : ''}`} onClick={() => handleMoodSelect('angry')}>
                                😡
                            </button>
                            <button
                                className={`emoji hover:bg-pink-500 duration-200 text-xl sm:text-2xl rounded-md px-[4.5px] py-[2px] ${userBehaviour.mood === 'excited' ? 'bg-pink-500' : ''}`} onClick={() => handleMoodSelect('excited')}>
                                😁
                            </button>
                            <button
                                className={`emoji hover:bg-pink-500 duration-200 text-xl sm:text-2xl rounded-md px-[4.5px] py-[2px] ${userBehaviour.mood === 'confused' ? 'bg-pink-500' : ''}`} onClick={() => handleMoodSelect('confused')}>
                                😕
                            </button>
                            <button
                                className={`emoji hover:bg-pink-500 duration-200 text-xl sm:text-2xl rounded-md px-[4.5px] py-[2px] ${userBehaviour.mood === 'crying' ? 'bg-pink-500' : ''}`} onClick={() => handleMoodSelect('crying')}>
                                😭
                            </button>
                        </div>
                    </div>
                    <div className="ask-bothering flex flex-col gap-1">
                        <div className="text-ask text-gray-100 text-sm sm:text-base font-semibold">
                            What's bothering you?
                        </div>
                        <input
                            className='rounded-lg w-[270px] sm:w-80 h-7 sm:h-8 text-sm sm:text-base px-1 py-[2px] text-wrape outline-2 border-2 border-blue-400 hover:outline-blue-400 duration-200  focus:outline-pink-500'
                            type="text"
                            name=""
                            id=""
                            placeholder='Tell me? (leave blank if no bothering)'
                            onChange={(e) => {
                                setUserBehaviour(prevState => ({
                                    ...prevState,
                                    bothering: e.target.value
                                }))
                            }}
                        />
                    </div>
                    <div className="relationship-status">
                        <div className="text-ask text-gray-100 text-sm sm:text-base font-semibold">
                            Relationship Status ?
                        </div>
                        <div className="select-relationship flex flex-row gap-1 text-[12px] sm:text-base">
                            <button
                                className={`relationship-button text-gray-100 font-semibold px-2 py-1 duration-200 hover:bg-pink-700  w-fit h-fit rounded-md cursor-pointer ${userBehaviour.relationshipStatus === 'single' ? 'bg-pink-700' : ''}`}
                                onClick={() => handleRelationshipStatus('single')}
                            >
                                Single 🚶‍♂️
                            </button>
                            <button
                                className={`relationship-button text-gray-100 font-semibold px-2 py-1 duration-200 hover:bg-pink-700  w-fit h-fit rounded-md cursor-pointer ${userBehaviour.relationshipStatus === 'nice going' ? 'bg-pink-700' : ''}`}
                                onClick={() => handleRelationshipStatus('nice going')}
                            >
                                Nice Going 💑
                            </button>
                            <button
                                className={`relationship-button text-gray-100 font-semibold px-2 py-1 duration-200 hover:bg-pink-700  w-fit h-fit rounded-md cursor-pointer ${userBehaviour.relationshipStatus === 'complicated' ? 'bg-pink-700' : ''}`}
                                onClick={() => handleRelationshipStatus('complicated')}
                            >
                                Complicated 💔💬
                            </button>
                        </div>
                    </div>
                    <div className="select-default-mode">
                        <div className="text-ask text-gray-100 font-semibold text-sm sm:text-base flex flex-col gap-1">
                            Mode ?
                        </div>
                        <div className="select-mode flex flex-row gap-1 text-sm sm:test-base">
                            <button
                                onClick={() => handleConversationMode('friend')}
                                className={`mode-button text-gray-100 px-2 py-1 duration-200 hover:bg-pink-600 w-fit h-fit rounded-md cursor-pointer ${userBehaviour.mode === 'friend' ? 'bg-pink-600' : ''}`}
                            >
                                Friend
                            </button>
                            <button
                                onClick={() => handleConversationMode('parent')}
                                className={`mode-button text-gray-100 px-2 py-1 duration-200 hover:bg-pink-600 w-fit h-fit rounded-md cursor-pointer ${userBehaviour.mode === 'parent' ? 'bg-pink-600' : ''}`}
                            >
                                Parent
                            </button>
                            <button
                                onClick={() => handleConversationMode('councellor')}
                                className={`mode-button text-gray-100 px-2 py-1 duration-200 hover:bg-pink-600 w-fit h-fit rounded-md cursor-pointer ${userBehaviour.mode === 'councellor' ? 'bg-pink-600' : ''}`}
                            >
                                Councellor
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`button-to-post ${wait ? 'cursor-not-allowed' : ''}`}>
                    <button
                        disabled={wait}
                        className={`button-post-ask text-gray-800 font-semibold px-3 py-2 hover:bg-[#93d883] w-fit h-fit rounded-md flex flex-row items-center gap-2 duration-200 ${wait ? 'disabled: cursor-not-allowed bg-[#93d883]' : 'bg-[#B6F09C]'}`}
                        onClick={() => {
                            console.log('fine')
                            setWait(() => true)
                            handleSubmit()
                        }}
                    >
                        <div className="text-ask-post">
                            Ready ?
                        </div>
                        {
                            wait &&
                            <div className='post-loader loading-roller'>
                            </div>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}