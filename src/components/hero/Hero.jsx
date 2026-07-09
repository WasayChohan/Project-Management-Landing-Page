import dash from "../../assets/dashboard.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="ai-badge">✨ New AI Assistant is here!</span>

        <h1>
          Manage Projects <br />
          Smarter With <span>AI</span>
        </h1>

        <p>
          TaskFlow helps teams plan, collaborate and deliver
          <br />
          projects faster with the power of AI.
        </p>

        <div className="hero-buttons">
          <button className="btn-fill">Start Free</button>
          <button className="btn-notfill">▶ Watch Demo</button>
        </div>

        <ul className="hero-features">
          <li>✓ No Credit Card</li>
          <li>✓ Free Forever</li>
          <li>✓ Cancel Anytime</li>
        </ul>
      </div>

      <div className="hero-img">
        <img src={dash} alt="Dashboard Preview" />
      </div>
    </section>
  );
}

export default Hero;
