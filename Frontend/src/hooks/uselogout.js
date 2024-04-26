import { useState } from "react";
import { useGlobalContext } from "../Context/global_context";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useGlobalContext();
	const navigate = useNavigate();

	const logout = async () => {
		setLoading(true);
		try {
			const res = await fetch("https://my-buddy.onrender.com/api/auth/logout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
			});
			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}

			localStorage.removeItem("chat-user");
			setAuthUser(null);
			navigate('/');
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, logout };
};
export default useLogout;