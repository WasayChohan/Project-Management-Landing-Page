import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import "./Auth.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

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
          <h1>Welcome Back 👋</h1>

          <p>Sign in to continue to TaskFlow</p>
        </div>

        {/* Form */}

        <form className="auth-form">
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
                placeholder="Enter your password"
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

          <div className="options">
            <label className="remember">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              Remember me
            </label>

            <a href="/">Forgot Password?</a>
          </div>

          <button className="login-btn">Sign In</button>
        </form>

        {/* Divider */}

        <div className="divider">
          <span></span>

          <p>Or continue with</p>

          <span></span>
        </div>

        {/* Social */}

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
          Don't have an account?
          <Link to="/signup"> Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
