import axios from "axios";

const API = "http://localhost:5000/api/cart";

// GET CART
export const getCart = async () => {
  try {
    const { data } = await axios.get(API);

    return data;
  } catch (error) {
    console.log(error);

    throw error;
  }
};

// ADD TO CART
export const addToCart = async (userId, productId) => {
  try {
    const { data } = await axios.post(`${API}/add`, {
      userId,
      productId,
    });

    return data;
  } catch (error) {
    console.log(error);

    throw error;
  }
};

// REMOVE
export const removeFromCart = async (cartId) => {
  try {
    const { data } = await axios.delete(`${API}/remove/${cartId}`);

    return data;
  } catch (error) {
    console.log(error);

    throw error;
  }
};
