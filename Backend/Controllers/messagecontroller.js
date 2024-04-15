import Conversation from "../Models/conversation.js";
import Chat from "../Models/chat.js";
import {v2 as cloudinary} from 'cloudinary';
export const sendMessage = async (req, res) => {
	try {
		const {role,message,chatid,mode } = req.body;
		const userId = req.user._id;
        const modelId="66127f4ffbdce631add5ed99"

		let conversation = await Conversation.findOne({
			participants: { $all: [userId, modelId] },
		});

		if (!conversation) {
			conversation = await Conversation.create({
				participants: [userId, modelId],
			});
		}

		const newMessage = {
			chat:chatid,
			role:role,
			text:message
		};

		if (newMessage) {
			if(mode==="parent")
			conversation.parent_messages.push(newMessage);
		    else if(mode==="friend")
			conversation.friend_messages.push(newMessage);
		    else
			conversation.bff_messages.push(newMessage)
		}

		// await conversation.save();
		// await newMessage.save();

		// this will run in parallel
		await conversation.save();
		
		res.status(201).json(newMessage);
	} catch (error) {
		console.log("Error in sendMessage controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const getChats = async (req, res) => {
	try {

		const senderId = req.user._id;

		const chats = await Chat.find({
			senderId,
		}); // NOT REFERENCE BUT ACTUAL MESSAGES

		if (!chats) return res.status(200).json([]);

		res.status(200).json(chats);
	} catch (error) {
		console.log("Error in getMessages controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const getconversation = async (req, res) => {
	try {
        const chatid=req.params?.id 
		const userId = req.user._id;
		const {mode}=req.body;
        const modelId="66127f4ffbdce631add5ed99"
		let conversation = await Conversation.findOne({
			participants: { $all: [userId, modelId] },
		});
        
		if (!conversation) return res.status(200).json([]);
        
	
		let allchat=[]
		if(mode==="parent")
		{
			 allchat=await Conversation.findOne({
				participants: { $all: [userId, modelId] },
			}).populate("parent_messages")
		}
	    else if(mode==="friend")
		{
			allchat=await Conversation.findOne({
				participants: { $all: [userId, modelId] },
			}).populate("friend_messages")
		}
	    else
		{
			allchat=await Conversation.findOne({
				participants: { $all: [userId, modelId] },
			}).populate("bff_messages")
		}
		res.status(200).json(allchat);
	} catch (error) {
		console.log("Error in getConversation controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const savechat=async (req,res)=>{

	    try{
	    const {title } = req.body;
		const userId = req.user._id;

		const new_chat= new Chat({
			senderId:userId,
			title
		 })

		 if(new_chat)
		 {

		   await new_chat.save();
		   res.status(200).json({
			id:new_chat._id
		 })
		 }
		}
	catch(error){
		console.log("Error in savechat controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
}

export const upload=async (req,res)=>{
	try {
        const {base64String} = req.body;
        console.log(base64String)
        // Upload the base64 image string to Cloudinary
        const uploadedImage = await cloudinary.uploader.upload(base64String, {
            folder: 'uploads', // Optional folder name in Cloudinary
            resource_type: 'image' // Specify the resource type (image, raw, video, etc.)
        });

        res.json({ url: uploadedImage.secure_url });
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ error: 'Failed to upload image to Cloudinary' });
    }
}