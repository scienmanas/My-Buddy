import "../styles/chat.css";

import React, { useEffect, useState } from "react";

import blueOctagon from "../assets/icons/blue_octagon.png";
import greenSquare from "../assets/icons/green_square.png";
import orangeSquare from "../assets/icons/red_square.png";
import redTriangle from "../assets/icons/red_triangle.png";

import ChatInput from "./ui/ChatInput";
import CloseBar from "./ui/CloseBar";
import ContentSide from "./ui/ContentSide";
import Conversation from "./ui/Conversation";
import Share from "./ui/Share";
import SideBar from "./ui/SideBar";

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <div className="app flex flex-row">
      {shareWindow && (
        <div className="share-button absolute w-full h-full flex justify-center items-center opacity-80 bg-slate-600">
          <Share handleCloseShare={handleCloseShare} />
        </div>
      )}
      <div className="in-contents flex flex-row w-full relative">
        <div
          className={`sidebar absolute sm:relative sm:min-h-screen duration-200 transition-all ${
            isOpen ? "w-72 sm:w-fit" : "hidden"
          }`}
        >
          {" "}
          <SideBar
            chatList={chatList}
            currentChat={currentChat}
            isOpen={isOpen}
            hanldeChangeChat={hanldeChangeChat}
          />
        </div>
        <div className="closebar hidden text-white sm:flex min-h-screen items-center">
          <CloseBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>
        <div className="content-side w-full custom-height sm:min-h-screen flex flex-col justify-between -ml-4">
          <div className="user-options-bar flex-none">
            <ContentSide
              handleShare={handleShare}
              chatList={chatList}
              currentChat={currentChat}
            />
          </div>
          <div className="conversation-area overflow-auto flex-grow p-4">
            <Conversation geminiAns={geminiAns} chatHistory={chatHistory} />
          </div>
          <div className="chat-area">
            <ChatInput handlePrompt={handlePrompt} prompt={prompt} />
          </div>
        </div>
      </div>
    </div>
  );
}
