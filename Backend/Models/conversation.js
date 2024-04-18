import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
	{
		participants: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],
		parent_messages: [
			{
				chat:{
                    type: mongoose.Schema.Types.ObjectId,
				    ref: "Chat",
				},
				role:{
					type:String
				},
				text:{
					type:String
				}
			},
		],
        friend_messages: [
			{
				chat:{
                    type: mongoose.Schema.Types.ObjectId,
				    ref: "Chat",
				},
				role:{
					type:String
				},
				text:{
					type:String
				}
			},
		],
        councellor_messages: [
			{
				chat:{
                    type: mongoose.Schema.Types.ObjectId,
				    ref: "Chat",
				},
				role:{
					type:String
				},
				text:{
					type:String
				}
			},
		],
	},
	{ timestamps: true }
);

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;