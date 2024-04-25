import bcrypt from "bcryptjs";
import User from "../Models/user.js";
import generateToken from "../Utils/tokens.js";
import jwt from "jsonwebtoken"
import { profile } from "console";


export const signup = async (req, res) => {
	try {
		const { fullName, emailid, password, confirmPassword} = req.body;

		if (password !== confirmPassword) {
			return res.status(400).json({ error: "Passwords don't match" });
		}

		const user = await User.findOne({ emailid });
		if (user) {
			return res.status(400).json({ error: "User already exists" });
		}

		// HASH PASSWORD HERE
		 const salt = await bcrypt.genSalt(10);
		 const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			fullName,
			emailid,
			gsign:false,
			password:hashedPassword,
		});

		if (newUser) {
			// Generate JWT token here
			await newUser.save();
            const token= generateToken(newUser._id, res);

			res.status(201).json({
				fullName: newUser.fullName,
                emailid,
				token:token,
			});
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}
	} catch (error) {
		console.log("Error in signup controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};



export const gsignup = async (req, res) => {
	try {
		const { fullName, emailid} = req.body;
		const user = await User.findOne({ emailid });
		if(user)
		{
			const token=generateToken(user?._id, res);
			return res.status(201).json({
				_id: user?._id,
				fullName: user?.fullName,
                emailid,
				gender:user.gender,
				salary:user.salary,
				profession:user.profession,
				token:token,
				new:false
			});
		}

		const newUser = new User({
			fullName,
			emailid,
			gsign:true,
		});

		if (newUser) {
			// Generate JWT token here
			await newUser.save();
            const token= generateToken(newUser._id, res);

			res.status(201).json({
				_id: newUser._id,
				fullName: newUser.fullName,
                emailid,
				token:token,
				new:true
			});
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}
	} catch (error) {
		console.log("Error in signup controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};


export const login = async (req, res) => {
	try {
		const { emailid, password } = req.body;
		const user = await User.findOne({ emailid });
        
		if(user&&user?.gsign==true)
		{
			return res.status(400).json({error:"Looks like you signed up earlier using google,so login using google"})
		}
	
		const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid username or password" });
		}
		const token =generateToken(user._id, res);
		res.status(200).json({
			fullName: user.fullName,
			token:token,
			emailid,
			gender:user.gender,
			salary:user.salary,
			profession:user.profession
		});
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};



export const logout = (req, res) => {
	try {
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
}; 


export const update=async(req,res)=>{
	try {
		const {emailid,gender,profession,salary} = req.body;
		const user = await User.findOne({ emailid });
		if(!user)
		{
			return res.status(400).json({error:"User doesn't exist"})
		}

        user.gender=gender
		user.profession=profession
		user.salary=salary
        
		await user.save();
		
		const token =generateToken(user._id, res);
		res.status(200).json({
			fullName: user.fullName,
			token:token,
			emailid,
			gender:user.gender,
			profession:user.profession,
			salary:user.salary
		});
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
}