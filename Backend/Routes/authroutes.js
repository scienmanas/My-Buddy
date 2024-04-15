import express from "express";
import { signup,login,logout,gsignup,update } from "../Controllers/authcontrollers.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/gsignup",gsignup)
router.put("/update",update)
router.post("/logout", logout);

export default router;