import { useState } from "react";
import "./Navber.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navber = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navber">
      {/* logo */}
      <div className="navber-logo">
        <img
          src="https://dummyimage.com/150x40/6d5efc/ffffff&text=TaskFlow"
          alt="TaskFlow"
        />
      </div>

      {/* links */}
      <ul className={menuOpen ? "navber-links active" : "navber-links"}>
        <li>
          {" "}
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>

        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {/* actions */}
      <div className="navber-buttons">
        <button className="btn btn-outline">Sign In</button>
        <button className="btn btn-primary">Get Started</button>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navber;
