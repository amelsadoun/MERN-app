import express from "express";
import { createEvent, deleteEvent, getEvent, getEvents, updateEvent } from "../controllers/events.js";

const router = express.Router();

//get all posts
router.get("/", getEvents);
router.post("/", createEvent);
router.get("/:id", getEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

export default router;
