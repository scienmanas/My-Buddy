import "../../styles/side_bar.css";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {useState} from "react";

import Account from "./Account";
import Chats from "./Chats";
import NewChatOption from "./NewChatOption ";

export default function SideBar(props) {
  return (
    <div
  className =
      {`side-bar sm:min-h-screen items-center bg-[#1f2325] flex flex-col justify-between pt-4 pb-3 pl-1 pr-2 rounded-2xl m-2 ${
          props.isOpen ? "open" : "closed"} w-60`} >
      <div className = "top-items w-fit flex flex-col gap-8">
      <div className = "project-setting"><NewChatOption />
      </div>
        <div className="chats">
          <Chats
            chatList={props.chatList}
            currentChat={props.currentChat}
            hanldeChangeChat={props.hanldeChangeChat}
          />
      </div>
      </div><div className = "down-items w-full">
      <div className = "account-settings"><Account /></div>
      </div><
      /div>
  );
}
