import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/global_context";


export const  useFetchChat=()=>{
    const {authUser}=useAuthContext();
    const fetchchat=async ()=>{
        try{
        const res = await fetch("http://localhost:5000/api/message/getchat", {
				method: "POST",
				headers: { "Content-Type": "application/json",
			 },
				body: JSON.stringify({token:authUser?.token})
			});

			const data = await res.json();
           // 
			if (data.error) {
				throw new Error(data.error);
			}

            return data
        }
        catch(error)
        {
            toast.error(error.message)
            console.log(error)
        }
    }

     return {fetchchat}
    
}