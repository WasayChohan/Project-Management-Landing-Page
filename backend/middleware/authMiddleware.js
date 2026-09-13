const jwt = require("jsonwebtoken");
const User = require("../models/User");

// ==============================
// Authentication Middleware
// ==============================
const protect = async (req, res, next) => {
  try {
    // Get token from request header
    const token = req.cookies.token;

    // Check if token exists
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access denied. No token provided.",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get User from Database
    const user = await User.findById(decoded.id).select("-password");

    // Check if user exists

    if (!user) {
      res.status(401).json({
        success: false,
        message: "User not Found",
      });
    }

    // Store user in request
    req.user = user;

    // Move to next function
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token.",
    });
  }
};

// ==============================
// Export Middleware
// ==============================
module.exports = protect;
