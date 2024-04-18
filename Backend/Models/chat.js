import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
	{
		senderId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description:{
			type:String,
		}
		// createdAt, updatedAt
	},
	{ timestamps: true }
);

const Chat = mongoose.model("Chat", chatSchema);

export default Chat;