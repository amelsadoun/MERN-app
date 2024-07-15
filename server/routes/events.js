import express from "express";
import { createEvent, getEvents } from "../controllers/events.js";

const router = express.Router();

//get all posts
router.get("/", getEvents);
router.post("/", createEvent);

export default router;
