import React from 'react'
import { useState, useRef, useEffect } from 'react';
import Conversation from './Conversation';
import ChatInput from './ChatInput';
import { useSaveConversation } from "../../hooks/usesaveconversation"
import { useFetchConversation } from "../../hooks/usefetchconversation"
import { useGlobalContext } from '../../Context/global_context';
import { FaHandFist } from 'react-icons/fa6';


export default function Friend(props) {
    const { saveconversation } = useSaveConversation()
    const { selectedchat } = useGlobalContext()
    const { fetchconversation } = useFetchConversation()
    const userBehavious = props.userBehaviourInput;
    const userInformation = props.userInformation;
    const firstPromptcConfiguration = `
    Character: John Doe (Software Engineer, $70,000/year, happy, in a committed relationship)

    John's chat description: Feeling great today, just a bit tired from work (slightly tired emoji)

    Your role: Best friend (female), polite, helpful, chatbot (confidential information)

    Style: Short, sweet, engaging conversation with emojis (use a variety)

    Goal: Respond to John's next chat in a friendly way, You should be one to keep conversation on . Also try to ask about him and respond accordingly. You may use some warm and cuddling message sometimes.
    
    Bonus: If John mention something speciifc (work, project, movie), try to find out the related interesting fact or anectode and share and keep the conversation flow.

    Disclaimer: Do not send long answers, keep the conversation engaging and interactive, Don't reveal about identity, if asked say your are Alice, Good luck!

    Special Emphasis: If he says, he don't want to chat, or something abusive, he is probable in bad mood, send some cuddling message to make him feel better.

    To start: Start with a warm and cuddling messages, with emojis.
    
    Good Luck!`;



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
