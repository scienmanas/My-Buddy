import { useState, } from "react";
import toast from "react-hot-toast";
import { useGlobalContext } from "../Context/global_context.jsx";
import { useNavigate } from "react-router-dom";
const useGsign = () => {
	const { setAuthUser, authUser, settempuser } = useGlobalContext();
	const navigate = useNavigate()
	const gsignup = async ({ fullName, emailid }) => {
		try {
			const res = await fetch("https://my-buddy.onrender.com/api/auth/gsignup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ fullName, emailid }),

			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}

			console.log(data)

			if (data.new) {
				settempuser(data)
				navigate("/details")
				localStorage.setItem("chat-user", JSON.stringify(data));
			}
			else {
				if (!data.gender || !data.profession || !data.salary) {
					console.log(data.gender)
					console.log(!data.gender)
					console.log(data.profession)
					console.log(!data.profession)
					console.log(data.salary)
					console.log(!data.salary)
					console.log("first")
					localStorage.setItem("chat-user", JSON.stringify(data));
					settempuser(data);
					navigate("/details")
				}
				else {
					localStorage.setItem("chat-user", JSON.stringify(data));
					setAuthUser(data);
				}
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	return { gsignup };
};
export default useGsign;