import express from "express";
import { review} from "../controllers/reviewController.js";

const router = express.Router();

// CREATE review
router.post("/", review);

// GET reviews
// router.get("/", getReviews);

export default router;