import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SideBar from './ui/SideBar';
import Infotop from './ui/InfoTop';
import Friend from './ui/Friend';
import Councellor from './ui/Councellor';
import Parent from './ui/Parent';
import Ask from './ui/Ask';
import NoContentsScreen from './ui/NoContentsScreen';
import blueOctagon from '../assets/icons/blue_octagon.png';
import greenSquare from '../assets/icons/green_square.png';
import orangeSquare from '../assets/icons/red_square.png';
import redTriangle from '../assets/icons/red_triangle.png';
import '../styles/chat.css';

    // Background color setup
    document.body.style.backgroundColor = "#131619"


    // Configure states
    const icons = [blueOctagon, greenSquare, orangeSquare, redTriangle];
    const [isOpen, setIsOpen] = useState(false);
    const [chatList, setChatList] = useState(null)
    const [currentChat, setcurrentChat] = useState(null);
    const [chatTo, setChatTo] = useState('parent')
    const [userBehaviourInput, setUserBehaviourInput] = useState({
        title: String,
        description: String,
        mood: String,
        bothering: String,
        relationshipStatus: String,
        mode: String,

    })
    // const [userInformation, setUserInformation] = useState({
    //     name: String,
    //     gender: String,
    //     profession: String,
    //     salary: String,
    // })
    const [userInformation, setUserInformation] = useState({
        name: 'Pranav',
        gender: 'Male',
        profession: 'student',
        salary: '1 crore per month',
    })
    const [askWindow, setAskWindow] = useState(false)



    const handleChatTo = (chatWith) => {
        setChatTo(() => chatWith)
    }

export default function Chat(props) {
  document.body.style.backgroundColor = "#131619";

  const [shareWindow, setShareWindow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [chatList, setChatList] = useState([
    [1, "BreakUp with Girlfriend", greenSquare],
    [2, "No Internships", redTriangle],
    [3, "Drank Alcohol", orangeSquare],
    [4, "Hemlo World", blueOctagon],
    [5, "Yay Party", greenSquare],
    [6, "Want to Speak", redTriangle],
    [7, "New Friends", orangeSquare],
    [8, "Am I Right? ", blueOctagon],
    [9, "Got a Girlfriend", greenSquare],
    [10, "Got an orgasm", redTriangle],
    [11, "Born today", orangeSquare],
  ]);
  const [currentChat, setcurrentChat] = useState(1);
  const [prompt, setPrompt] = useState("");
  const [geminiAns, setGeminiAns] = useState("Conversation");
  const [chatHistory, setchatHistory] = useState([]);

  // Configure Genai
  const { GoogleGenerativeAI } = require("@google/generative-ai");
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
  console.log(process.env.REACT_APP_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const askGemini = async (prompt) => {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    setGeminiAns(text);
    setchatHistory((prevChatHistory) => [...prevChatHistory, text]);

    // const response = await model.generateText(prompt);
    // console.log(response.data.choices[0].text);
    // setGeminiAns(response.data.choices[0].text);
  };

  const handlePrompt = (promptByUser) => {
    setPrompt(promptByUser);
    console.log(promptByUser);
    setchatHistory((prevChatHistory) => [...prevChatHistory, promptByUser]);
    askGemini(promptByUser);
  };

  const handleShare = () => {
    setShareWindow(true);
  };

  const handleCloseShare = () => {
    setShareWindow(false);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNewChat = () => {};

  const hanldeChangeChat = (id) => {
    setcurrentChat(id);
  };

  // Add event listener to handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("scroll", handleScroll);

    const handleNewChat = () => {
        console.log(chatList)
        setAskWindow(() => true)
    }

    const handleChangeChat = (id) => {
        setcurrentChat(id)
    }

    const configureUserBehaviour = (behaviour) => {

        console.log("first")
        console.log(behaviour)

        setUserBehaviourInput({
            title: behaviour.title,
            description: behaviour.description,
            mood: behaviour.mood,
            bothering: behaviour.bothering,
            relationshipStatus: behaviour.relationshipStatus,
            mode: behaviour.mode,
        })

        // Generate unique id
        const uniqueId = uuidv4()

        // Update chat list
        setChatList(prevChats => [
            ...(prevChats || []), // If prevChats is null, use an empty array
            {
                id: uniqueId,
                name: behaviour.title,
                icon: icons[Math.floor(Math.random() * icons.length)]
            }
        ]);


        // Set current chat
        setcurrentChat(uniqueId)

        setAskWindow(() => false)
        console.log(uniqueId)

    }

    useEffect(() => {
        const applyDevicesClasses = () => {
            const contentSide = document.getElementById('content-side');
            if (contentSide) {
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    contentSide.classList.add('custom-height');
                } else {
                    contentSide.classList.add('min-h-screen');
                    contentSide.classList.add('max-h-screen');
                }
            }
        }
        applyDevicesClasses();
    }, []);



    return (
        <div className="app flex flex-row">
            <div className="in-contents flex flex-row w-full relative items-center">
                <div
                    className={`sidebar absolute sm:relative sm:min-h-screen z-50`}
                >
                    <SideBar chatList={chatList} currentChat={currentChat} isOpen={isOpen} handleChangeChat={handleChangeChat} handleNewChat={handleNewChat}/>
                </div>
                <div id='content-side' className="content-side-content  w-full flex flex-col justify-between sm:max-h-screen sm:min-h-screen relative">
                    {askWindow &&
                        <Ask configureUserBehaviour={configureUserBehaviour} handleClose={() => {
                            setAskWindow(() => false)
                        }}
                        />
                    }
                    {currentChat && !askWindow && (
                        <>
                            <div className="options-bar flex-none">
                                <Infotop chatList={chatList} currentChat={currentChat} isOpen={isOpen} toggleSidebar={toggleSidebar} chatTo={chatTo} handleChatTo={handleChatTo} handleNewChat={handleNewChat}
                                />
                            </div>
                            {chatTo === 'parent' ? (
                                <Parent userBehaviourInput={userBehaviourInput} userInformation={userInformation} />
                            ) : null}
                            {chatTo === 'friend' ? (
                                <Friend userBehaviourInput={userBehaviourInput} userInformation={userInformation} />
                            ) : null}
                            {chatTo === 'councellor' ? (
                                <Councellor userBehaviourInput={userBehaviourInput} userInformation={userInformation} />
                            ) : null}
                        </>
                    )}
                    {!currentChat && (
                        <div className="no-content-screen w-full h-full">
                            <NoContentsScreen handleNewChat={handleNewChat} configureUserBehaviour={configureUserBehaviour} />
                        </div>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
