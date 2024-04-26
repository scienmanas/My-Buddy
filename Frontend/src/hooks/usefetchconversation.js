import { useState } from "react";
import toast from "react-hot-toast";
import { useGlobalContext } from "../Context/global_context";


export const useFetchConversation = () => {
    const { authUser, mode, selectedchat } = useGlobalContext();

    const fetchconversation = async () => {
        const res = await fetch(`https://my-buddy.onrender.com/message/api/getconversation/${selectedchat}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: authUser?.token, mode }),
        });

        const data = await res.json();

        let temp = []
        if (mode === "parent") {
            let allchat = data?.parent_messages
            if (allchat) {
                temp = allchat.filter((message) => {
                    return message.chat === selectedchat
                })
            }
        }
        else if (mode === "friend") {
            let allchat = data?.friend_messages
            if (allchat) {
                temp = allchat.filter((message) => {
                    return message.chat === selectedchat
                })
            }
        }
        else {
            let allchat = data?.councellor_messages
            if (allchat) {
                temp = allchat.filter((message) => {
                    return message.chat === selectedchat
                })
            }
        }


        const temp2 = [];
        for (let i = 0; i < temp.length; i++) {
            temp2[i] = {
                role: temp[i].role,
                parts: [{ text: temp[i].text }]
            }
        }
        return temp2;
    }

    return { fetchconversation }
}

