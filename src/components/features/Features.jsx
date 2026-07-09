import {
  FaRobot,
  FaUsers,
  FaChartLine,
  FaTasks,
  FaBell,
  FaLock,
} from "react-icons/fa";

import "./Features.css";

const Features = () => {
  const features = [
    {
      icon: <FaRobot />,
      title: "AI Assistant",
      desc: "Generate tasks, summaries and project plans using AI.",
    },
    {
      icon: <FaUsers />,
      title: "Team Collaboration",
      desc: "Work together with your team in real time.",
    },
    {
      icon: <FaChartLine />,
      title: "Analytics",
      desc: "Track progress with beautiful dashboards and reports.",
    },
    {
      icon: <FaTasks />,
      title: "Task Management",
      desc: "Organize projects with smart task tracking.",
    },
    {
      icon: <FaBell />,
      title: "Notifications",
      desc: "Stay updated with instant reminders and alerts.",
    },
    {
      icon: <FaLock />,
      title: "Secure Platform",
      desc: "Enterprise-grade security to keep your data safe.",
    },
  ];

  return (
    <section className="features" id="features">
      <span className="features-badge">✨ Features</span>

      <h2>
        Everything You Need to <span>Manage Projects</span>
      </h2>

      <p className="features-text">
        Powerful tools designed to help your team plan, collaborate and deliver
        projects faster.
      </p>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>

            <div className="feature-content">
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
