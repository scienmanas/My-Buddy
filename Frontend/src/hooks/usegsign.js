import { useState } from "react";
import toast from "react-hot-toast";
import { useGlobalContext } from "../Context/global_context";
import { useNavigate } from "react-router-dom";

const useGsign = () => {
	const { setAuthUser, authUser } = useGlobalContext();
	const { settempuser } = useGlobalContext()
	const navigate = useNavigate()


	const gsignup = async ({ fullName, emailid, profilepic }) => {
		try {
			const res = await fetch("http://localhost:5000/api/auth/gsignup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ fullName, emailid, profilepic }),

			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			settempuser(data)
			navigate("/details")
			localStorage.setItem("chat-user", JSON.stringify(data));

		} catch (error) {
			toast.error(error.message);
		}
	};

	return { gsignup };
};
export default useGsign;
