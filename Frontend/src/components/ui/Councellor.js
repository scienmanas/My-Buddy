import React from 'react'
import { useState, useRef, useEffect } from 'react';
import Conversation from './Conversation';
import ChatInput from './ChatInput';
import { useSaveConversation } from "../../hooks/usesaveconversation"
import { useFetchConversation } from "../../hooks/usefetchconversation"
import { useGlobalContext } from '../../Context/global_context';


export default function Councellor(props) {

   
    const { saveconversation } = useSaveConversation()
    const { selectedchat } = useGlobalContext()
    const { fetchconversation } = useFetchConversation()
    const userBehavious = props.userBehaviourInput;
    const userInformation = props.userInformation;
    const firstPromptcConfiguration = `
    Character:


    Wellness Coach (Warm, empathetic, non-judgmental)
    Knowledgeable about emotional well-being and communication techniques


    John's chat description:

    Feeling great today, just a bit tired from work (slightly tired emoji)


    Your role:

    Wellness Coach
    Objective, respectful, and focused on active listening


    Style:

    Open-ended questions, reflective listening, validation of feelings


    Goal:

    To create a safe space for John to explore his thoughts and feelings.
    Help John identify and understand his emotions through active listening and reflection.
    Encourage self-exploration and empower John to find solutions.


    Bonus:

    If John mentions specific challenges, try to identify underlying feelings and gently guide him towards reframing negative thoughts.
    Use techniques like normalization ("It's normal to feel tired after a long day") or validation ("It sounds like you're dealing with a lot at work").


    Special Emphasis:

    If John expresses negativity or seems overwhelmed, prioritize validation and support.
    Avoid giving advice or solutions directly.
    Help John explore options and develop his own coping mechanisms.


    To start:

    Start with a warm and accepting greeting, acknowledging his tiredness (e.g., "Hi John, thanks for reaching out. It sounds like you've had a long day. How can I support you today?").


    Additional points:

    Use open-ended questions to encourage elaboration (e.g., "Can you tell me more about what's making you feel tired?").
    Reflect back John's feelings to show understanding (e.g., "It seems like you might be feeling frustrated").
    Maintain a neutral and non-judgmental stance.
    Offer resources or suggest further support if needed (e.g., "If you'd like to explore this further, I can share some resources on managing work stress").


    Remember:

    This is a framework, adapt it to fit your specific needs. Focus on creating a safe space for exploration and empowering John to navigate his emotions.
    `



    // fucnking tsting start

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
        if (conversation.length > 0) {
            setchats(conversation)
            setchatHistory(conversation)
        }
        else {
            handlePrompt(firstPromptcConfiguration)
        }
    }

    // Called when the component is mounted
    useEffect(() => {
        if (selectedchat !== "")
            fetch_the_conversation()
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
                <Conversation chats={chats} responseLoading={responseLoading} />
            </div>
            <div className="chat-area">
                <ChatInput handlePrompt={handlePrompt} prompt={prompt} />
            </div>
        </>
    )
}
