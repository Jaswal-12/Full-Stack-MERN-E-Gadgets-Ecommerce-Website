import axios from "axios";

const API = "http://localhost:5000/api/reviews";

// CREATE REVIEW
export const createReview = async (data) => {
  try {
    const res = await axios.post(API, data);
    return res.data;
  } catch (error) {
    console.log("Create Review Error:", error.response?.data || error.message);
    throw error;
  }
};

// GET REVIEWS
export const getReviews = async () => {
  try {
    const res = await axios.get(API);
    return res.data;
  } catch (error) {
    console.log("Get Reviews Error:", error.response?.data || error.message);
    throw error;
  }
};
