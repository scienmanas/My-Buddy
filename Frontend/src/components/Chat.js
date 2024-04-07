import React, { useState, useEffect, useRef } from 'react';
import Share from './ui/Share';
import SideBar from './ui/SideBar';
import Infotop from './ui/InfoTop';
import ChatInput from './ui/ChatInput';
import Conversation from './ui/Conversation';
import NoContentsScreen from './ui/NoContentsScreen';
import '../styles/chat.css';
import blueOctagon from '../assets/icons/blue_octagon.png';
import greenSquare from '../assets/icons/green_square.png';
import orangeSquare from '../assets/icons/red_square.png';
import redTriangle from '../assets/icons/red_triangle.png';

export default function Chat(props) {


    // Background color setup
    document.body.style.backgroundColor = "#131619"

    // Configure states
    const [shareWindow, setShareWindow] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [chatList, setChatList] = useState([
        [1, "BreakUp with Girlfriend", greenSquare],
        [2, "No Internships", redTriangle],
        [3, "oh Shit", orangeSquare],
        [4, "Hemlo World", blueOctagon],
        [5, "Yay Party", greenSquare],
        [6, "Want to Speak", redTriangle],
        [7, "New Friends", orangeSquare],
        [8, "Am I Right? ", blueOctagon],
        [9, "Got a Girlfriend", greenSquare],
        [10, "Ok ok fine", redTriangle],
        [11, "I am Done", orangeSquare],
    ])
    const [currentChat, setcurrentChat] = useState(null);
    const [chatHistory, setchatHistory] = useState([]);
    const [chats, setchats] = useState([]);
    const [responseLoading, setResponseLoading] = useState(false);

    // Configure Genai
    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });


    // Ask Gemini
    const askGemini = async (promptByUser) => {

        const chat = model.startChat({
            history: chatHistory,
        });

        // Ask Gemini by calling api and passing history
        const result = await chat.sendMessage(promptByUser);
        const response = await result.response;
        const text = response.text();
        console.log(chatHistory)

        setchats(prevChats => [
            ...prevChats, {
                role: 'model',
                parts: [{ text: text }]
            }
        ])

        setResponseLoading(() => {
            return false;
        })
    }


    const handlePrompt = (promptByUser) => {
        setResponseLoading(() => {
            return true;
        });
        askGemini(promptByUser)
        setchats(prevChats => [
            ...prevChats, {
                role: 'user',
                parts: [{ text: promptByUser }]
            }
        ])
    }

    const handleShare = () => {
        setShareWindow(true);
    };

    const handleCloseShare = () => {
        setShareWindow(false);
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };


    const handleNewChat = () => {
        setcurrentChat(1);
    }

    const hanldeChangeChat = (id) => {
        setcurrentChat(id)
    }

    useEffect(() => {
        const applyDevicesClasses = () => {
            const contentSide = document.getElementById('content-side');
            if (contentSide) {
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    contentSide.classList.add('custom-height'); // Apply custom-height class for mobile devices
                } else {
                    contentSide.classList.add('min-h-screen'); // Apply min-h-screen class for non-mobile devicesmax
                    contentSide.classList.add('max-h-screen'); // Apply max-h-screen class for non-mobile devices
                }
            }
        }
        applyDevicesClasses();
    }, []);

    const conversationRef = useRef(null);

    useEffect(() => {
        const scrollToBottom = () => {
            if (conversationRef.current) {
                conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
            }
        };

        scrollToBottom();
    }, [chats, responseLoading]);



    return (
        <div className="app flex flex-row">
            {shareWindow && (
                <div className="share-button absolute w-full h-full flex justify-center items-center opacity-80 bg-slate-600">
                    <Share handleCloseShare={handleCloseShare} />
                </div>
            )}
            <div className="in-contents flex flex-row w-full relative items-center">
                <div
                    className={`sidebar absolute sm:relative sm:min-h-screen z-50`}
                >
                    <SideBar chatList={chatList} currentChat={currentChat} isOpen={isOpen} hanldeChangeChat={hanldeChangeChat} />
                </div>
                <div id='content-side' className="content-side-content  w-full flex flex-col justify-between sm:max-h-screen sm:min-h-screen">
                    {currentChat &&
                        <>
                            <div className="user-options-bar flex-none">
                                <Infotop handleShare={handleShare} chatList={chatList} currentChat={currentChat} isOpen={isOpen} toggleSidebar={toggleSidebar} />
                            </div>
                            <div className="conversation-area overflow-auto scroll-smooth hide-scrollbar-conversation w-full flex-grow p-4 hide-scrollbar-conversation" ref={conversationRef}>
                                <Conversation chats={chats} responseLoading={responseLoading} />
                            </div>
                            <div className="chat-area">
                                <ChatInput handlePrompt={handlePrompt} prompt={prompt} />
                            </div>
                        </>
                    }
                    { !currentChat &&
                        <div className="no-content-screen w-full h-full">
                            <NoContentsScreen handleNewChat={handleNewChat} hanldeChangeChat={hanldeChangeChat} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
