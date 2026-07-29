const jwt = require("jsonwebtoken");

// ==============================
// Authentication Middleware
// ==============================
const protect = (req, res, next) => {
  try {
    // Get token from request header
    const token = req.headers.authorization;

    // Check if token exists
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access denied. No token provided.",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Store user data in request
    req.user = decoded;

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
