import Review from "../models/review.js";

export const review = async (req, res) => {
  try {
    const { name, message, rating } = req.body;

    if (!name || !message || !rating) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    await Review.create({
      name,
      review: message,
      rating,
    });

    // 🔥 return UPDATED LIST
    const allReviews = await Review.find().sort({ createdAt: -1 });

    res.status(201).json({
      success: true,
      reviews: allReviews,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};