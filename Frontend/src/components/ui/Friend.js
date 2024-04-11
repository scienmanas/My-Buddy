import React from 'react'
import { useState, useRef, useEffect } from 'react';
import Conversation from './Conversation';
import ChatInput from './ChatInput';


export default function Friend(props) {

    const userBehavious = props.userBehaviourInput;
    const userInformation = props.userInformation;
    const firstPromptcConfiguration = "Hi i am " + userInformation.name + " and i am a " + userInformation.profession + " earning " + userInformation.salary + " per month. I am feeling " + userBehavious.mood + " because " + userBehavious.bothering + " and i am in " + userBehavious.relationshipStatus + " relationship. Can you help me?";

    const [chatHistory, setchatHistory] = useState([
        {
            role: 'user',
            parts: [{ text: firstPromptcConfiguration }],
        },
        {
            parts: [{ text: "Okay, Buddy, Tell me how can i help you?" }],
            role: 'model',
        },
    ]);
    const [chats, setchats] = useState([]);
    const [responseLoading, setResponseLoading] = useState(false);

    const conversationRef = useRef(null);

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

        setchats(prevChats => [
            ...prevChats, {
                parts: [{ text: text }],
                role: 'model',
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
                parts: [{ text: promptByUser }],
            }
        ])
    }


    useEffect(() => {
        const scrollToBottom = () => {
            if (conversationRef.current) {
                conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
            }
        };

        scrollToBottom();
    }, [chats, responseLoading]);



    return (
        <>
            <div className="conversation-area overflow-auto scroll-smooth hide-scrollbar-conversation w-full flex-grow p-4 hide-scrollbar-conversation" ref={conversationRef}>
                <Conversation chats={chats} responseLoading={responseLoading} />
            </div>
            <div className="chat-area">
                <ChatInput handlePrompt={handlePrompt} prompt={prompt} />
            </div>
        </>
    )
}
