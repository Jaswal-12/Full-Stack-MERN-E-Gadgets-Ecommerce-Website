import axios from "axios";

const API = "http://localhost:5000/api/payment";

export const createOrder = async (amount) => {
  try {
    const response = await axios.post(`${API}/create-order`, {
      amount,
    });

    return response;
  } catch (error) {
    console.log("ORDER ERROR:", error.response?.data);

    throw error;
  }
};

export const verifyPayment = async (data) => {
  return await axios.post(`${API}/verify`, data);
};
