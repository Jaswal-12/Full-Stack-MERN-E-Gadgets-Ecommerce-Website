import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

// Routes
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

dotenv.config();

const app = express();

/* ---------------- MIDDLEWARE ---------------- */

// CORS setup
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Body parser
app.use(express.json());

/* ---------------- DATABASE ---------------- */
connectDB();

/* ---------------- ROUTES ---------------- */

// Auth
app.use("/api/auth", authRoutes);

// Product
app.use("/api/product", productRoutes);

// Cart
app.use("/api/cart", cartRoutes);

// Payment
app.use("/api/payment", paymentRoutes);

// Feedback
app.use("/api/feedback", feedbackRoutes);

// Reviews (FIXED: use plural for consistency)
app.use("/api/reviews", reviewRoutes);

/* ---------------- TEST ROUTE ---------------- */
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});


app.use(
"/api/payment",
paymentRoutes
);

/* ---------------- 404 HANDLER (IMPORTANT) ---------------- */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

/* ---------------- START SERVER ---------------- */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});