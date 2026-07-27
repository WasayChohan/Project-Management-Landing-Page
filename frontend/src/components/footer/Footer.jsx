import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-about">
          <img
            src="https://dummyimage.com/150x40/6d5efc/ffffff&text=TaskFlow"
            alt="TaskFlow"
          />

          <p>
            TaskFlow helps teams plan, collaborate and deliver projects faster
            with powerful productivity tools.
          </p>

          <div className="footer-social">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Product</h4>

          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Testimonials</a>
          <a href="#">FAQ</a>
        </div>

        <div className="footer-links">
          <h4>Company</h4>

          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-links">
          <h4>Resources</h4>

          <a href="#">Help Center</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Documentation</a>
        </div>
      </div>

      <div className="footer-bottom">© 2026 TaskFlow. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
