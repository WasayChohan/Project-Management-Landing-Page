// ==============================
// Import Express Router
// ==============================
const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

// ==============================
// Import Controllers
// ==============================
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/authController");

// ==============================
// Register Route
// POST /api/auth/register
// ==============================
router.post("/register", registerUser);

// ==============================
// Login Route
// POST /api/auth/login
// ==============================
router.post("/login", loginUser);

// ==============================
// Protected Route
// GET /api/auth/profile
// ==============================
router.get("/me", protect, getMe);

// ==============================
// Export Router
// ==============================
module.exports = router;
