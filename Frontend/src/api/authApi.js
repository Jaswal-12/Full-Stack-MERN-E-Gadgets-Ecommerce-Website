import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth",
  withCredentials: true,
});


// SIGNUP API
export const signupUser = async (userData) => {
  const response = await API.post("/signup", userData);
  return response.data;
};


// LOGIN API
export const loginUser = async (userData) => {
  const response = await API.post("/login", userData);
  return response.data;
};


// LOGOUT API
export const logoutUser = async () => {
  const response = await API.post("/logout");
  return response.data;
};


// CHECK LOGIN USER
export const getMe = async () => {
  const response = await API.get("/me");
  return response.data;
};