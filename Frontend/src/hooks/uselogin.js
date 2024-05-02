import { useState } from "react";
import toast from "react-hot-toast";
import { useGlobalContext } from "../Context/global_context";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useGlobalContext();
	const { settempuser } = useGlobalContext();
	const navigate = useNavigate()

	const login = async (emailid, password) => {
		const success = handleInputErrors(emailid, password);
		if (!success) return;
		setLoading(true);
		try {
			const res = await fetch("https://my-buddy.onrender.com/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ emailid, password }),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			if (!data.gender || !data.profession || !data.salary) {
				localStorage.setItem("chat-user", JSON.stringify(data));
				settempuser(data);
				navigate("details")
			}
			else {
				localStorage.setItem("chat-user", JSON.stringify(data));
				setAuthUser(data);
			}
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, login };
};
export default useLogin;

function handleInputErrors(emailid, password) {
	if (!emailid || !password) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}