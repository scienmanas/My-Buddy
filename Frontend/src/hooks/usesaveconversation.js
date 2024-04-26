import { useState } from "react";
import toast from "react-hot-toast";
import { useGlobalContext } from "../Context/global_context";


export const  useSaveConversation=()=>{
    const {authUser,mode,selectedchat}=useGlobalContext();
    const saveconversation=async (promptByUser,text)=>{
        try {
            let res = await fetch(`https://my-buddy.onrender.com/api/message/send`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ 
                    role:"user",
                    chatid:selectedchat,
                    message:promptByUser,
                    mode:mode,
                    token:authUser?.token
                 }),
			});
			let data = await res.json();
            if (data.error) throw new Error(data.error);
        
            res = await fetch(`https://my-buddy.onrender.com/api/message/send`, {
               method: "POST",
               headers: {
                   "Content-Type": "application/json",
               },
               body: JSON.stringify({ 
                   role:"model",
                   chatid:selectedchat,
                   message:text,
                   mode:mode,
                   token:authUser?.token
                }),
           });
           data = await res.json();
           if (data.error) throw new Error(data.error);
        return data
       } catch (error) {
           console.error(error.message);
       } 
    }

     return {saveconversation}
    
}