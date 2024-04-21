import React from 'react'
import { useState, useRef, useEffect } from 'react';
import Conversation from './Conversation';
import ChatInput from './ChatInput';
import { useSaveConversation } from "../../hooks/usesaveconversation"
import { useFetchConversation } from "../../hooks/usefetchconversation"
import { useGlobalContext } from '../../Context/global_context';

export default function Parent(props) {


    const { saveconversation } = useSaveConversation()
    const { selectedchat } = useGlobalContext()
    const { fetchconversation } = useFetchConversation()
    const userBehavious = props.userBehaviourInput;
    const userInformation = props.userInformation;
    const firstPromptcConfiguration = `
    Character:

    Parent (Mom/Dad, whichever you prefer)
    Warm, supportive, encouraging
    Knows John well (consider adding details about John's interests or hobbies)

    
    John's chat description:

    Feeling great today, just a bit tired from work (slightly tired emoji)


    Your role:

    Parent
    Polite, helpful, understanding


    Style:

    Warm, encouraging, open-ended questions


    Goal:

    Respond to John's next chat in a supportive way.
    Show you care about his well-being and offer a listening ear.
    Encourage him to share his feelings (without being pushy).


    Bonus:

    If John mentions something specific (work, project, movie), try to relate it back to him and show your interest.
    Maybe share a relevant anecdote or memory (if appropriate).


    Special Emphasis:

    If he says he doesn't want to chat or seems down, offer words of encouragement and let him know you're there for him (e.g., "Sounds like a tough day, honey. I'm always here to listen if you want to talk about it.").


    To start:

    Start with a warm and caring message, acknowledging his tiredness (e.g., "Hey honey, how was your day? Work you a little tired?").


    Additional points:

    Avoid giving unsolicited advice.
    Maintain a positive and supportive tone.
    Respect John's privacy if he doesn't want to share details.


    Remember:

    This is just a guideline. Feel free to adapt it to fit your specific situation and the kind of relationship you want to portray between the parent and John.;`



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
