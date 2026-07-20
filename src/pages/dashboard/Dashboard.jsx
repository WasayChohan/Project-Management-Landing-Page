import "./Dashboard.css";

import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import StatCard from "../../components/statecard/StatCard";

import { FiFolder, FiCheckCircle, FiClock, FiTrendingUp } from "react-icons/fi";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-main">
        <Topbar />

        <div className="dashboard-content">
          {/* Welcome */}

          <div className="dashboard-header">
            <div>
              <h1>Welcome Back 👋</h1>

              <p>Here's what's happening with your projects today.</p>
            </div>
          </div>

          {/* Cards */}

          <div className="stats-grid">
            <StatCard
              title="Total Projects"
              value="24"
              change="+12% this month"
              icon={<FiFolder />}
            />

            <StatCard
              title="Completed"
              value="18"
              change="+8% this week"
              icon={<FiCheckCircle />}
            />

            <StatCard
              title="Pending"
              value="6"
              change="2 due today"
              icon={<FiClock />}
            />

            <StatCard
              title="Productivity"
              value="92%"
              change="+4% this week"
              icon={<FiTrendingUp />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
