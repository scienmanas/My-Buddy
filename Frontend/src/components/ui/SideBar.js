import React from "react";
import NewChatOption from "./NewChatOption";
import Chats from "./Chats";
import Account from "./Account";
import "../../styles/side_bar.css";



export default function SideBar(props) {
  return (
    <div
      className={`z-30 side-bar custom-height sm:min-h-screen items-center bg-[#1f2325] flex flex-col justify-between pt-3 sm:pt-4 pb-3 pl-1 pr-2 rounded-2xl ${props.isOpen ? "mx-2 absolute" : "-mx-60"
        } w-[14rem w-fit duration-1000 transition-all relative top-[4px] bottom-[4px]`}
    >
      <div className="top-items w-fit flex flex-col gap-6 sm:gap-5 px-1">
        <div className="project-setting">
          <NewChatOption handleNewChat={props.handleNewChat} />
        </div>
        <div className="chats w-full">
          <Chats
            chatList={props.chatList}
            currentChat={props.currentChat}
            handleChangeChat={props.handleChangeChat}
            isFetching={props.isFetching}
          />
        </div>
      </div>
      <div className="down-items w-full">
        <div className="account-settings text-sm sm:text-base">
          <Account />
        </div>
      </div>
    </div>
  );
}
