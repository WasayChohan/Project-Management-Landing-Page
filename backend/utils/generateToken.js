// ==============================
// Import JWT Package
// ==============================
const jwt = require("jsonwebtoken");

// ==============================
// Generate JWT Token
// ==============================
const generateToken = (id) => {
  return jwt.sign(
    { id }, // Payload
    process.env.JWT_SECRET, // Secret Key
    {
      expiresIn: "7d", // Token Expiry
    },
  );
};

// ==============================
// Export Function
// ==============================
module.exports = generateToken;
