import express from "express";
import { loginClub, signUpClub } from "../controllers/auth.js";

const router = express.Router();

//routes
router.post("/signup", signUpClub);
router.post("/login", loginClub);

export default router;
