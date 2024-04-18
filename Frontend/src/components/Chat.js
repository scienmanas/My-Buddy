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
import { useGlobalContext } from '../Context/global_context';
import {useFetchChat} from "../hooks/usefetchchat"
export default function Chat(props) {

    // Background color setup
    document.body.style.backgroundColor = "#131619"
    const icons = [blueOctagon, greenSquare, orangeSquare, redTriangle];

    // Configure states
    const {authUser,mode,setmode,setselectedchat,setchattitle,setchatdesc}=useGlobalContext()
    const {fetchchat}=useFetchChat()

    const [isOpen, setIsOpen] = useState(true);
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


    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };


    const handleNewChat = () => {
        console.log(chatList)
        setAskWindow(() => true)
    }

    const handleChangeChat = (id,name,desc) => {
        setcurrentChat(id)
        setselectedchat(id);
        setchattitle(name);
        setchatdesc(desc)
    }
    
    const fetch_the_chat=async()=>{
        const data= await fetchchat();
        console.log(data)
        const temp_chat_list = [];
 
// Using forEach() to create partial objects
        data.forEach(obj => {
        const partialObj = {};
        partialObj.id = obj?._id
        partialObj.name = obj?.title
        partialObj.desc=obj?.description
        partialObj.icon=icons[Math.floor(Math.random() * icons.length)]
         temp_chat_list.push(partialObj);
});
        setChatList(temp_chat_list);
    }

    useEffect(()=>{
        fetch_the_chat();
    },[])



    useEffect(() => {
        // loading daalna ha new chat ke liye
     
        console.log(chatList)
        
}, [chatList])


    
    const configureUserBehaviour = async (behaviour) => {

        setUserBehaviourInput({
            title: behaviour.title,
            description: behaviour.description,
            mood: behaviour.mood,
            bothering: behaviour.bothering,
            relationshipStatus: behaviour.relationshipStatus,
            mode: behaviour.mode,

        })

        console.log("***************************")
        setmode(behaviour.mode);
        console.log(behaviour.mode)
        console.log('****************************')

        // Generate unique id
        const uniqueId = uuidv4();
        const res = await fetch("http://localhost:5000/api/message/savechat", {
            method: "POST",
            headers: { "Content-Type": "application/json",
         },
            body: JSON.stringify({ title:behaviour.title,token:authUser?.token,description:behaviour?.description||""}),
        });

        const data = await res.json();
        console.log(data)
        if (data.error) {
            throw new Error(data.error);
        }

            setChatList(prevchat=>[
                ...prevchat,{
                    id:data.id,
                    name:data?.title,
                    desc:data?.description,
                    icon:icons[Math.floor(Math.random() * icons.length)]
                }
            ])
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
                    {currentChat  && !askWindow  && chatList  && (
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
                    {!chatList && (
                        <div className="no-content-screen w-full h-full">
                            <NoContentsScreen handleNewChat={handleNewChat} configureUserBehaviour={configureUserBehaviour} />
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}
