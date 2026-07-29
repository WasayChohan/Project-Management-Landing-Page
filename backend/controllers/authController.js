// ==============================
// Import Required Packages
// ==============================
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");
// ==============================
// Register User
// POST /api/auth/register
// ==============================
const registerUser = async (req, res) => {
  try {
    // Get data from frontend
    const { name, email, password } = req.body;

    // Check if email already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user in MongoDB
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Send success response
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    // Handle server error
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Login User
// POST /api/auth/login
// ==============================
const loginUser = async (req, res) => {
  try {
    // Get email & password from frontend
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Compare entered password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Login successful
    // ==============================
    // Generate JWT Token
    // ==============================
    const token = generateToken(user._id);

    // ==============================
    // Send Success Response
    // ==============================
    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (error) {
    // Handle server error
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Export Controllers
// ==============================
module.exports = {
  registerUser,
  loginUser,
};
