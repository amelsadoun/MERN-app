import express from 'express';
import { getClub } from '../controllers/clubs.js';

const router = express.Router();

router.get("/:id", getClub);

export default router;