import express from "express";
import { createPost, getPosts } from "../controllers/posts.js";

const router = express.Router();

//get all posts
router.get("/", getPosts);
router.post("/", createPost);

export default router;
