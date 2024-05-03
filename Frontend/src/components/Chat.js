import React, { useState, useEffect } from 'react';
import SideBar from './ui/SideBar';
import Infotop from './ui/InfoTop';
import Friend from './ui/Friend';
import Counsellor from './ui/Counsellor';
import Parent from './ui/Parent';
import Ask from './ui/Ask';
import NoContentsScreen from './ui/NoContentsScreen';
import blueOctagon from '../assets/icons/blue_octagon.png';
import greenSquare from '../assets/icons/green_square.png';
import orangeSquare from '../assets/icons/red_square.png';
import redTriangle from '../assets/icons/red_triangle.png';
import '../styles/chat.css';
import { useGlobalContext } from '../Context/global_context';
import { useFetchChat } from "../hooks/usefetchchat"


export default function Chat(props) {

    // Background color setup and some squares setup
    document.body.style.backgroundColor = "#131619"
    const icons = [blueOctagon, greenSquare, orangeSquare, redTriangle];


    // Loading for fetching chatList
    const [isFetching, setIsFetching] = useState(null)

    // Import full data of the user
    const { authUser, mode, setmode, setselectedchat, setchattitle, setchatdesc } = useGlobalContext();

    // Configure states
    const { fetchchat } = useFetchChat()
    // Side bar toggle state
    const [isOpen, setIsOpen] = useState(false);
    // For chat list to be displayed on side bar
    const [chatList, setChatList] = useState([])
    // Set to current chat by chat id
    const [currentChat, setCurrentChat] = useState(null);
    // Whom to chat with
    const [chatTo, setChatTo] = useState(mode || 'friend')
    // for user behaviour
    const [userBehaviourInput, setUserBehaviourInput] = useState({
        title: '',
        description: '',
        mood: '',
        bothering: '',
        relationshipStatus: '',
        mode: '',

    })
    // Configure user information
    const userInformation = {
        name: authUser?.fullName,
        gender: authUser?.gender,
        profession: authUser?.profession,
        salary: authUser?.salary,
    }

    // Ask window display state
    const [askWindow, setAskWindow] = useState(false)


    const handleChatTo = (chatWith) => {
        setmode(() => chatWith)
    }


    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };


    const handleNewChat = () => {
        setAskWindow(() => true)
    }

    const handleChangeChat = (id, name, desc, defaultMode) => {
        setCurrentChat(id);
        setselectedchat(id);
        setchattitle(name);
        setchatdesc(desc)

        if (defaultMode === 'friend') {
            setmode(() => defaultMode)
        }

        if (askWindow) {
            setAskWindow(() => false)
        }
        setIsOpen(() => false)
    }

    // Fetch the chat list after updation
    const fetch_the_chat = async () => {
        const data = await fetchchat();
        const temp_chat_list = [];

        // Using forEach() to create partial objects
        data.forEach(obj => {
            const partialObj = {};
            partialObj.id = obj?._id
            partialObj.name = obj?.title
            partialObj.desc = obj?.description
            partialObj.icon = icons[Math.floor(Math.random() * icons.length)]
            temp_chat_list.push(partialObj);
        });
        setChatList(temp_chat_list);
        setIsFetching(() => false)
    }

    // For configuration of a new chat
    const configureUserBehaviour = async (behaviour) => {

        // Configuring the user behaviour
        setUserBehaviourInput(() => ({
            title: behaviour.title,
            description: behaviour.description,
            mood: behaviour.mood,
            bothering: behaviour.bothering,
            relationshipStatus: behaviour.relationshipStatus,
            mode: behaviour.mode,
        }));

        setmode(() => behaviour.mode)

        // Save the data to the databaswe
        const res = await fetch("https://my-buddy.onrender.com/api/message/savechat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: behaviour.title, token: authUser?.token, description: behaviour?.description || "" }),
        });


        // Call the the data
        const data = await res.json();
        if (data.error) {
            throw new Error(data.error);
        }

        // Update the chat list
        setChatList(prevchat => [
            ...prevchat, {
                id: data.id,
                name: data?.title,
                desc: data?.description,
                icon: icons[Math.floor(Math.random() * icons.length)]
            }
        ])

        // Set the current chat
        handleChangeChat(data.id, data.title, data.description)
    }


    // Customizing screen size for devices
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


    useEffect(() => {
        const handleResize = () => {
            setIsOpen(!(window.innerWidth < 640));
        };
        handleResize(); // initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Called once at the start of the component
    useEffect(() => {
        setIsFetching(() => true)
        fetch_the_chat();
    }, [])


    // For debugging purposes
    useEffect(() => {
    }, [chatList])



    return (
        <div className="app flex flex-row">
            <div className="in-contents flex flex-row w-full relative items-center">
                <div
                    className={`sidebar absolute sm:relative sm:min-h-screen z-50`}
                >
                    <SideBar chatList={chatList} currentChat={currentChat} isOpen={isOpen} handleChangeChat={handleChangeChat} handleNewChat={handleNewChat} isFetching={isFetching} />
                </div>
                <div id='content-side' className="content-side-content  w-full flex flex-col justify-between sm:max-h-screen sm:min-h-screen relative">
                    {askWindow &&
                        <Ask configureUserBehaviour={configureUserBehaviour} handleClose={() => {
                            setAskWindow(() => false)
                        }}
                        />
                    }
                    {currentChat && !askWindow && chatList && (
                        <>
                            <div className="options-bar flex-none">
                                <Infotop chatList={chatList} currentChat={currentChat} isOpen={isOpen} toggleSidebar={toggleSidebar} handleChatTo={handleChatTo} handleNewChat={handleNewChat}
                                />
                            </div>
                            {mode === 'parent' ? (
                                <Parent userBehaviourInput={userBehaviourInput} userInformation={userInformation} />
                            ) : null}
                            {mode === 'friend' ? (
                                <Friend userBehaviourInput={userBehaviourInput} userInformation={userInformation} />
                            ) : null}
                            {mode === 'councellor' ? (
                                <Counsellor userBehaviourInput={userBehaviourInput} userInformation={userInformation} />
                            ) : null}
                        </>
                    )}
                    {(!chatList || chatList.length === 0 || !currentChat) && (!askWindow) && (
                        <div className="no-content-screen w-full h-full">
                            <NoContentsScreen handleNewChat={handleNewChat} configureUserBehaviour={configureUserBehaviour} toggleSidebar={toggleSidebar} isOpen={isOpen} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

}
