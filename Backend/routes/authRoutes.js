import express from "express";

import {
  signup,
  login,
  logout,
  getMe,
} from "../controllers/authController.js";

import { isAuthenticated } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", isAuthenticated, logout);

router.get("/me", isAuthenticated, getMe);

export default router;