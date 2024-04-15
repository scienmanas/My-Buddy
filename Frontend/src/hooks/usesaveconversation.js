import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/auth_context";


export const  useSaveConversation=()=>{
    const {authUser,mode,selectedchat}=useAuthContext();
    const saveconversation=async (promptByUser,text)=>{
        try {
            let res = await fetch(`http://localhost:5000/api/message/send`, {
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
        
            res = await fetch(`http://localhost:5000/api/message/send`, {
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