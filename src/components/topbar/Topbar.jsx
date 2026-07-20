import "./Topbar.css";
import { FiMenu, FiSearch, FiBell, FiMessageSquare } from "react-icons/fi";

const Topbar = () => {
  return (
    <header className="topbar">
      {/* Left */}

      <div className="topbar-left">
        <button className="menu-btn">
          <FiMenu />
        </button>

        <div className="search-box">
          <FiSearch className="search-icon" />

          <input type="text" placeholder="Search anything..." />
        </div>
      </div>

      {/* Right */}

      <div className="topbar-right">
        <button className="icon-btn">
          <FiBell />
        </button>

        <button className="icon-btn">
          <FiMessageSquare />
        </button>

        <div className="profile">
          <img src="https://i.pravatar.cc/150?img=12" alt="profile" />

          <div>
            <h4>Abdul</h4>

            <span>Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
