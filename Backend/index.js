import express from "express"
import authroutes from "./Routes/authroutes.js"
import messageroutes from "./Routes/messageroutes.js"
import dotenv from "dotenv"
import dbconnection from "./Config/connection.js";
import cors from "cors"
import cookieParser from "cookie-parser";
import {v2 as cloudinary} from 'cloudinary';

const app=express();
app.use(cors({origin:"http://localhost:3000"}));

dotenv.config()
app.use(express.json())
app.use(cookieParser());
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });
app.use("/api/auth",authroutes)
app.use("/api/message",messageroutes);


const clientid="506470945121-lnvmjbs2lq68itqet12i7n2h9tpouo3u.apps.googleusercontent.com"
const secretkey="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"


app.get("/",(req,res)=>{
    res.send("Hello world")
})



dbconnection();

app.listen(5000,()=>{
    console.log("Server running at 5000");
})