import express from "express";
import { getClub, loginClub, signUpClub } from "../controllers/auth.js";

const router = express.Router();

//routes
router.post("/signup", signUpClub);
router.post("/login", loginClub);
//ik this isn't exactly supposed to be inclued in auth but where else am I supposed to put it lol
router.get("/:id", getClub);

export default router;
