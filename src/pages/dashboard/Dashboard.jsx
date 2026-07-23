import "./Dashboard.css";

import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import StatCard from "../../components/statecard/StatCard";
import ProjectOverview from "../../components/projectoverview/ProjectOverview";

import { FiFolder, FiCheckCircle, FiClock, FiTrendingUp } from "react-icons/fi";
import UpcomingDeadlines from "../../components/upcomingdeadlines/UpcomingDeadlines";
import RecentActivity from "../../components/recentactivity/RecentActivity";
import TaskProgress from "../../components/taskprogress/TaskProgress";

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

          {/* Stats Cards */}

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

          {/* Project Overview */}

          <div className="dashboard-grid">
            <ProjectOverview />

            {/* Next we'll add these */}
            <UpcomingDeadlines />
          </div>

          {/* Bottom Section */}

          <div className="dashboard-grid-bottom">
            <RecentActivity />
            <TaskProgress />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
