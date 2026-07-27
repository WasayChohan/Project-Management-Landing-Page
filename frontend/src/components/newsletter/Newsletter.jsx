import "./Newsletter.css";
import { HiOutlineMail } from "react-icons/hi";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <div className="newsletter-left">
          <div className="newsletter-icon">
            <HiOutlineMail />
          </div>

          <div>
            <h2>Stay updated with TaskFlow</h2>

            <p>Get the latest news, updates, and productivity tips.</p>
          </div>
        </div>

        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" />

          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
