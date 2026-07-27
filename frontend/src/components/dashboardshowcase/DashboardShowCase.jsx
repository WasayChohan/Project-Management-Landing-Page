import "./DashboardShowCase.css";
import dashboard from "../../assets/dashboard.png";

import { FiGrid, FiBarChart2, FiCheckSquare, FiFileText } from "react-icons/fi";

const DashboardShowcase = () => {
  return (
    <section className="dashboard-showcase" id="dashboard">
      {/* Left Side */}
      <div className="dashboard-content">
        <span className="dashboard-badge">Dashboard</span>

        <h2>
          All your work in <br />
          <span>one place</span>
        </h2>

        <p>
          Get a bird's eye view of your projects, tasks, and team performance.
        </p>

        <div className="dashboard-list">
          <div className="dashboard-item active">
            <FiGrid />
            <span>Overview</span>
          </div>

          <div className="dashboard-item">
            <FiBarChart2 />
            <span>Analytics</span>
          </div>

          <div className="dashboard-item">
            <FiCheckSquare />
            <span>Tasks</span>
          </div>

          <div className="dashboard-item">
            <FiFileText />
            <span>Reports</span>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="dashboard-image">
        <img src={dashboard} alt="Dashboard Preview" />
      </div>
    </section>
  );
};

export default DashboardShowcase;
