import "./StatCard.css";

const StatCard = ({ title, value, change, icon }) => {
  return (
    <div className="stat-card">
      <div className="stat-top">
        <div>
          <p>{title}</p>
          <h2>{value}</h2>
        </div>

        <div className="stat-icon">{icon}</div>
      </div>

      <span>{change}</span>
    </div>
  );
};

export default StatCard;
