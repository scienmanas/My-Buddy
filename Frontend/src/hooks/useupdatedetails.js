import { useState } from "react";
import toast from "react-hot-toast";
import { useGlobalContext } from "../Context/global_context.jsx";

const useUpdateDetails = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser,authUser } = useGlobalContext();
	const updatedetails = async ({ gender,profession,salary}) => {
		const success = handleInputErrors({gender,profession,salary});
		if (!success) return;

        const user=localStorage.getItem("chat-user")
        const emailid=JSON.parse(user).emailid
		setLoading(true);
		try {
			const res = await fetch("https://my-buddy.onrender.com/api/auth/update", {
				method: "PUT",
				headers: { "Content-Type": "application/json",
			 },
				body: JSON.stringify({emailid, gender,profession,salary}),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, updatedetails };
};
export default useUpdateDetails;

function handleInputErrors({ gender,profession,salary}) {
	if (!gender || !profession || !salary ) {
		toast.error("Please fill in all fields");
		return false;
	}
	return true;
}