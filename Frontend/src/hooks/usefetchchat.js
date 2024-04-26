import { useState } from "react";
import toast from "react-hot-toast";
import { useGlobalContext } from "../Context/global_context";
import blueOctagon from '../assets/icons/blue_octagon.png';
import greenSquare from '../assets/icons/green_square.png';
import orangeSquare from '../assets/icons/red_square.png';
import redTriangle from '../assets/icons/red_triangle.png';


export const useFetchChat=()=>{
    const {authUser}=useGlobalContext();
    const icons = [blueOctagon, greenSquare, orangeSquare, redTriangle];
    const fetchchat=async ()=>{
        try{
        const res = await fetch("https://my-buddy.onrender.com/api/message/getchat", {
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

            return data;
        }
        catch(error)
        {
            toast.error(error.message)
            console.log(error)
        }
    }

     return {fetchchat}
    
}