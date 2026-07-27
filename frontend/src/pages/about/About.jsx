import "./About.css";
import {
  FaUsers,
  FaShieldAlt,
  FaBolt,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

import dashboard from "../../assets/dashboard.png"; // use your dashboard image

const About = () => {
  return (
    <section className="about" id="about">
      <span className="about-badge">About Us</span>

      <h2>
        Built For <span>Modern Teams</span>
      </h2>

      <p className="about-text">
        TaskFlow is a modern project management platform designed to help
        businesses collaborate, organize work, and deliver projects faster. From
        startups to enterprise teams, we simplify workflows so you can focus on
        what matters most.
      </p>

      <div className="about-wrapper">
        {/* Left Side */}

        <div className="about-image">
          <img src={dashboard} alt="TaskFlow Dashboard" />

          <div className="floating-card">
            <FaCheckCircle />

            <div>
              <h4>99.9% Uptime</h4>
              <span>Reliable Cloud Platform</span>
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div className="about-content">
          <div className="about-grid">
            <div className="about-card">
              <div className="about-icon">
                <FaUsers />
              </div>

              <div>
                <h3>10K+ Teams</h3>

                <p>
                  Trusted by companies worldwide for seamless collaboration.
                </p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-icon">
                <FaBolt />
              </div>

              <div>
                <h3>Lightning Fast</h3>

                <p>
                  Built for speed and productivity with modern technologies.
                </p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-icon">
                <FaShieldAlt />
              </div>

              <div>
                <h3>Enterprise Security</h3>

                <p>Advanced security keeps your projects protected.</p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-icon">
                <FaChartLine />
              </div>

              <div>
                <h3>Productivity</h3>

                <p>Improve workflow efficiency and manage projects smarter.</p>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div>
              <h2>50K+</h2>
              <span>Active Users</span>
            </div>

            <div>
              <h2>120+</h2>
              <span>Countries</span>
            </div>

            <div>
              <h2>4.9★</h2>
              <span>User Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
