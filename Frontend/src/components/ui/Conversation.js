import "../../styles/conversation.css";

import React from "react";

import MarkDownConverter from "./MarkDownConverter";

export default function Conversation(props) {
  console.log(props.chatHistory);
  return (
    <>
      <div className="text-white gap-4 flex flex-col ">
        {" "}
        {props.chatHistory.map((chat, index) => (
          <div key={index} className="p-1 bg-gray-700 rounded-lg">
            {<MarkDownConverter chat={chat} />}
          </div>
        ))}
      </div>
    </>
  );
}
