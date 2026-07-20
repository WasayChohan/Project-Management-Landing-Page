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
import "./Auth.css";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
        <form className="auth-form">
          <div className="form-group">
            <label>Full Name</label>

            <div className="input-box">
              <FiUser className="input-icon" />
              <input type="text" placeholder="Enter your full name" />
            </div>
          </div>

          <div className="form-group">
            <label>Email Address</label>

            <div className="input-box">
              <FiMail className="input-icon" />
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>

            <div className="input-box">
              <FiLock className="input-icon" />

              <input
                type={showPassword ? "text" : "password"}
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
                placeholder="Confirm your password"
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
