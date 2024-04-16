import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';
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


export default function Chat(props) {
    


    // Configure states
    // const [websiteTheme, setWebsiteTheme] = useState(() => {
    //     const storedMode = Cookies.get('Theme');
    //     return storedMode ? storedMode : 'dark';
    // });
    const [websiteTheme, setWebsiteTheme] = useState('dark');
    const icons = [blueOctagon, greenSquare, orangeSquare, redTriangle];
    const [isOpen, setIsOpen] = useState(false);
    const [chatList, setChatList] = useState(null)
    const [currentChat, setcurrentChat] = useState(null);
    const [chatTo, setChatTo] = useState('parent')
    const [askWindow, setAskWindow] = useState(false)
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


    // Set website theme - light or dark
    if (websiteTheme === 'dark') {
        document.body.style.backgroundColor = "#131619";
    } else {
        document.body.style.backgroundColor = "#F5F5F5";
    }

    const handleThemeChange = () => {
        if (websiteTheme === 'light') {
            setWebsiteTheme('dark');
        }
        else {
            setWebsiteTheme('light');
        }
    }

    useEffect (() => {
        Cookies.set('Theme', websiteTheme, { expires: 365 });
    }, [websiteTheme])


    const handleChatTo = (chatWith) => {
        setChatTo(() => chatWith)
    }


    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };


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
                    <SideBar chatList={chatList} currentChat={currentChat} isOpen={isOpen} handleChangeChat={handleChangeChat} handleNewChat={handleNewChat} websiteTheme={websiteTheme}/>
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
                                <Infotop chatList={chatList} currentChat={currentChat} isOpen={isOpen} toggleSidebar={toggleSidebar} chatTo={chatTo} handleChatTo={handleChatTo} handleNewChat={handleNewChat} websiteTheme={websiteTheme}
                                />
                            </div>
                            {chatTo === 'parent' ? (
                                <Parent userBehaviourInput={userBehaviourInput} userInformation={userInformation} websiteTheme={websiteTheme}/>
                            ) : null}
                            {chatTo === 'friend' ? (
                                <Friend userBehaviourInput={userBehaviourInput} userInformation={userInformation} websiteTheme={websiteTheme} />
                            ) : null}
                            {chatTo === 'councellor' ? (
                                <Councellor userBehaviourInput={userBehaviourInput} userInformation={userInformation} websiteTheme={websiteTheme} />
                            ) : null}
                        </>
                    )}
                    {!currentChat && (
                        <div className="no-content-screen w-full h-full">
                            <NoContentsScreen handleNewChat={handleNewChat} configureUserBehaviour={configureUserBehaviour} websiteTheme={websiteTheme} />
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}
