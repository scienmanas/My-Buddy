import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Context/global_context";
const useSignup = () => {
	const [loading, setLoading] = useState(false);
	const { settempuser } = useGlobalContext()
	const navigate = useNavigate()
	const signup = async ({ fullName, emailid, password, confirmPassword }) => {
		const success = handleInputErrors({ fullName, emailid, password, confirmPassword });
		if (!success) return;

		setLoading(true);
		try {
			const res = await fetch("https://my-buddy-pmdc.onrender.com/api/auth/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ fullName, emailid, password, confirmPassword }),
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
		} finally {
			setLoading(false);
		}
	};

	return { loading, signup };
};
export default useSignup;

function handleInputErrors({ fullName, emailid, password, confirmPassword }) {
	if (!fullName || !emailid || !password || !confirmPassword) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password !== confirmPassword) {
		toast.error("Passwords do not match");
		return false;
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}