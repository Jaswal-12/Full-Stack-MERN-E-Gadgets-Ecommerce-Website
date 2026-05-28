import express from "express";
import feedbackController from "../controllers/feedbackController.js";

const router = express.Router();

// POST /api/feedback
router.post("/feedback", feedbackController);

export default router;