import express from "express";
import { getChats, getconversation, savechat, sendMessage,upload } from "../Controllers/messagecontroller.js";
import protectRoute from "../Middlewares/protectRoute.js";

const router = express.Router();

router.post("/getchat", protectRoute, getChats);
router.post("/getconversation/:id",protectRoute,getconversation)
router.post("/send", protectRoute, sendMessage);
router.post("/savechat",protectRoute,savechat);
router.post("/upload",upload)
export default router;