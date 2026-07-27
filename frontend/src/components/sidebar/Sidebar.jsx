import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import {
  FiGrid,
  FiFolder,
  FiCheckSquare,
  FiCalendar,
  FiUsers,
  FiBarChart2,
  FiMessageSquare,
  FiSettings,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { BsCheck2Square } from "react-icons/bs";
import { PiCrownSimpleFill } from "react-icons/pi";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Logo */}

      <div className="sidebar-logo">
        <div className="logo-box">
          <BsCheck2Square />
        </div>

        <div className="logo-text">
          <h3>
            Task<span>Flow</span> Pro
          </h3>
        </div>
      </div>

      {/* Menu */}

      <nav className="sidebar-menu">
        <NavLink to="/dashboard" className="menu-item">
          <FiGrid />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/dashboard/projects" className="menu-item">
          <FiFolder />
          <span>Projects</span>
        </NavLink>

        <NavLink to="/dashboard/tasks" className="menu-item">
          <FiCheckSquare />
          <span>Tasks</span>
        </NavLink>

        <NavLink to="/dashboard/calendar" className="menu-item">
          <FiCalendar />
          <span>Calendar</span>
        </NavLink>

        <NavLink to="/dashboard/team" className="menu-item">
          <FiUsers />
          <span>Team</span>
        </NavLink>

        <NavLink to="/dashboard/ai" className="menu-item">
          <HiSparkles />
          <span>AI Assistant</span>
        </NavLink>

        <NavLink to="/dashboard/analytics" className="menu-item">
          <FiBarChart2 />
          <span>Analytics</span>
        </NavLink>

        <NavLink to="/dashboard/messages" className="menu-item">
          <FiMessageSquare />
          <span>Messages</span>
        </NavLink>

        <NavLink to="/dashboard/settings" className="menu-item">
          <FiSettings />
          <span>Settings</span>
        </NavLink>
      </nav>

      {/* Upgrade */}

      <div className="upgrade-card">
        <div className="upgrade-icon">
          <PiCrownSimpleFill />
        </div>

        <h4>Upgrade to Pro</h4>

        <p>Unlock more features</p>
      </div>
    </aside>
  );
};

export default Sidebar;
