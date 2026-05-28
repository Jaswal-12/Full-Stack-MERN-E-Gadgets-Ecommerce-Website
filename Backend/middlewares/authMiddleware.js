import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {

  try {

    // COOKIE SE TOKEN
    const token = req.cookies.token;

    // AGAR TOKEN NAHI
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please login first",
      });
    }

    // TOKEN VERIFY
    const decoded = jwt.verify(token, "mysecretkey123");

    // USER ID SAVE
    req.userId = decoded.id;

    next();

  } catch (error) {

    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });

  }

};