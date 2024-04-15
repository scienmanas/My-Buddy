import { useState } from "react";
import toast from "react-hot-toast";
import { useGlobalContext } from "../Context/global_context.jsx";

const useGsign = () => {
	const { setAuthUser,authUser } = useGlobalContext();
	const gsignup = async ({fullName,emailid,profilepic}) => {
		try {
			const res = await fetch("http://localhost:5000/api/auth/gsignup", {
				method: "POST",
				headers: { "Content-Type": "application/json",
			 },
				body: JSON.stringify({fullName, emailid,profilepic}),

			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);
		} catch (error) {
			toast.error(error.message);
		} 
	};

	return { gsignup };
};
export default useGsign;
