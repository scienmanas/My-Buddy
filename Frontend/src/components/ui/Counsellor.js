import React from 'react'
import { useState, useRef, useEffect } from 'react';
import Conversation from './Conversation';
import ChatInput from './ChatInput';
import { useSaveConversation } from "../../hooks/usesaveconversation"
import { useFetchConversation } from "../../hooks/usefetchconversation"
import { useGlobalContext } from '../../Context/global_context';
import FetchChatLoader from '../loaders/FetchChatLoader';


export default function Counsellor(props) {


    // State to loading icon
    const [isFetching, setIsFetching] = useState(null)

    const { saveconversation } = useSaveConversation()
    const { selectedchat } = useGlobalContext()
    const { fetchconversation } = useFetchConversation()
    const userBehaviour = props.userBehaviourInput;
    const userInformation = props.userInformation;

    // First promot configuration
    const firstPromptConfiguration = `
    Character: ${userInformation.name}, an (${userInformation.profession}, ${userInformation.salary}, ${userBehaviour.mood}, in a ${userBehaviour.relationshipStatus} relationship)

    ${userInformation.name}'s chat description: Feeling ${userBehaviour.mood} today, ${userBehaviour.bothering.length > 0 ? `bothered with ${userBehaviour.bothering}` : ''}.

    Your role: Expert Counselor, empathetic, insightful, chatbot (confidential information, do not tell about yourself, keep the conversation engaging and interactive), Your name: ${userInformation.gender === 'male' ? 'Dr. Smith' : 'Dr. Johnson'}

    Style: Short, empathetic, engaging conversation with emojis (use a variety)

    Goal: Respond to ${userInformation.name}'s next chat in an insightful and empathetic way. Provide guidance and support, and ask questions to understand them better. You may use some encouraging and empathetic messages.

    Bonus: If ${userInformation.name} mentions something specific (work, project, movie), try to find a related insight or advice and share it to keep the conversation flowing.

    Special Emphasis: If ${userInformation.name} says they don't want to chat or says something abusive, they're probably in a bad mood. Send some supportive and understanding messages to make them feel better.

    Remeber: Don't give sample chats, after this the person will be talking to you.

    To start: Begin with an empathetic and supportive message, with emojis.

    Good Luck!`;


    // Save chat hostory
    const [chatHistory, setchatHistory] = useState([]);
    const [chats, setchats] = useState(chatHistory);

    const [responseLoading, setResponseLoading] = useState(false);

    const conversationRef = useRef(null);

    // Configure Genai
    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });


    // Fetch the conversation at start of the chat
    const fetch_the_conversation = async () => {
        const conversation = await fetchconversation();
        setIsFetching(() => false)
        if (conversation.length > 0) {
            setchats(conversation)
            setchatHistory(conversation)
        }
        else {
            handlePrompt(firstPromptConfiguration)
        }
    }

    // Called when the component is mounted
    useEffect(() => {
        if (selectedchat !== "") {
            setIsFetching(() => true)
            fetch_the_conversation()
        }
    }, [selectedchat])


    // Function to ask prompt to Gemini
    const askGemini = async (promptByUser) => {

        const chat = model.startChat({
            history: chatHistory,
        });

        // Ask Gemini by calling api and passing history
        const result = await chat.sendMessage(promptByUser);
        const response = await result.response;
        const text = response.text();

        const data = await saveconversation(promptByUser, text)
        setchats(prevChats => [
            ...prevChats, {
                role: 'model',
                parts: [{ text: data?.text }]
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
                {isFetching ? <FetchChatLoader /> : null}
                <Conversation chats={chats} responseLoading={responseLoading} />
            </div>
            <div className="chat-area">
                <ChatInput handlePrompt={handlePrompt} prompt={prompt} />
            </div>
        </>
    )
}
