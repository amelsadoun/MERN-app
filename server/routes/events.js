import express from "express";
import { createEvent, getEvent, getEvents } from "../controllers/events.js";

const router = express.Router();

//get all posts
router.get("/", getEvents);
router.post("/", createEvent);
router.get("/:id", getEvent);

export default router;
