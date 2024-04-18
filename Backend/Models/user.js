import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		fullName: {
			type: String,
			required: true,
		},
	    emailid:{
            type:String,
            required:true,
        },
		gsign:{
			type:Boolean,
			required:true,
		},
		password: {
			type: String,
			minlength: 6,
		},
		gender:{
			type:String,
			enum:["male","female"]
		}, 
		profilepic:{
			type:String,
		},
		profession:{
			type:String,
		},
	},{timestamps:true}
);

const User = mongoose.model("User", userSchema);

export default User;