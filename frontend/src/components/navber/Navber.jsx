import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navber.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navber = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navber">
      {/* Logo */}
      <div className="navber-logo">
        <img
          src="https://dummyimage.com/150x40/6d5efc/ffffff&text=TaskFlow"
          alt="TaskFlow"
        />
      </div>

      {/* Navigation Links */}
      <ul className={menuOpen ? "navber-links active" : "navber-links"}>
        <li>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
        </li>

        <li>
          <a href="#features" onClick={closeMenu}>
            Features
          </a>
        </li>

        <li>
          <a href="#pricing" onClick={closeMenu}>
            Pricing
          </a>
        </li>

        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>

        {/* Mobile Buttons */}
        <li className="mobile-buttons">
          <Link to="/login" className="btn btn-outline" onClick={closeMenu}>
            Sign In
          </Link>

          <Link to="/signup" className="btn btn-primary" onClick={closeMenu}>
            Get Started
          </Link>
        </li>
      </ul>

      {/* Desktop Buttons */}
      <div className="navber-buttons">
        <Link to="/login" className="btn btn-outline">
          Sign In
        </Link>

        <Link to="/signup" className="btn btn-primary">
          Get Started
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navber;
