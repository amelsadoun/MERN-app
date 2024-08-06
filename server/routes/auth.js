import express from "express";
import { changePassword, loginClub, signUpClub, updateProfile } from "../controllers/auth.js";

const router = express.Router();

//routes
router.post("/signup", signUpClub);
router.post("/login", loginClub);
router.put("/edit/:id", updateProfile);
router.put("/changePassword/:id", changePassword);

export default router;
