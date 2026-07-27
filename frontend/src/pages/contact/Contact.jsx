import "./Contact.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  // FaFacebookF,
  // FaLinkedinIn,
  // FaTwitter,
  // FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <span className="contact-badge">Contact Us</span>

      <h2>
        Let's Start a <span>Conversation</span>
      </h2>

      <p className="contact-text">
        Have questions or want to learn more about TaskFlow? We'd love to hear
        from you. Send us a message and we'll get back to you as soon as
        possible.
      </p>

      <div className="contact-wrapper">
        {/* Left */}

        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">
              <FaEnvelope />
            </div>

            <div>
              <h4>Email</h4>
              <p>support@taskflow.com</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <h4>Phone</h4>
              <p>+1 (234) 567-890</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h4>Location</h4>
              <p>New York, United States</p>
            </div>
          </div>

          {/* <div className="contact-social">
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
          </div> */}
        </div>

        {/* Right */}

        <form className="contact-form">
          <div className="input-row">
            <input type="text" placeholder="Your Name" />

            <input type="email" placeholder="Email Address" />
          </div>

          <input type="text" placeholder="Subject" />

          <textarea rows="7" placeholder="Write your message..." />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
