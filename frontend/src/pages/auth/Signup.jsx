import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import axios from "axios";
import "./Auth.css";

// Show Password
function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // From Data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Form Submission
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Signup
  const handleSignup = async (e) => {
    e.preventDefault();

    // Check if password match
    if (formData.password !== formData.confirmPassword) {
      alert("Password do not match");
      return;
    }

    try {
      // Send data to backend
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        },
      );

      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* Header */}
        <div className="auth-header">
          <div className="logo">
            <div className="logo-icon">✓</div>

            <h2>
              Task<span>Flow</span>
            </h2>
          </div>

          <Link to="/" className="back-home">
            <FiArrowLeft />
            Back Home
          </Link>
        </div>

        {/* Heading */}
        <div className="auth-heading">
          <h1>Create Account 🚀</h1>
          <p>Create your TaskFlow account to get started</p>
        </div>

        {/* Form */}
        <form className="auth-form" onSubmit={handleSignup}>
          <div className="form-group">
            <label>Full Name</label>

            <div className="input-box">
              <FiUser className="input-icon" />
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email Address</label>

            <div className="input-box">
              <FiMail className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>

            <div className="input-box">
              <FiLock className="input-icon" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Confirm Password</label>

            <div className="input-box">
              <FiLock className="input-icon" />

              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          <button className="login-btn">Create Account</button>
        </form>

        {/* Divider */}
        <div className="divider">
          <span></span>
          <p>Or continue with</p>
          <span></span>
        </div>

        {/* Social Buttons */}
        <div className="social-buttons">
          <button>
            <FcGoogle />
            Google
          </button>

          <button>
            <FaGithub />
            GitHub
          </button>
        </div>

        {/* Footer */}
        <p className="bottom-text">
          Already have an account?
          <Link to="/login"> Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
