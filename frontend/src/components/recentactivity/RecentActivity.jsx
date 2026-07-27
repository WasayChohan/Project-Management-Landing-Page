import "./RecentActivity.css";
import { UserRound, CheckCircle2 } from "lucide-react";

const activities = [
  {
    id: 1,
    icon: "user",
    text: (
      <>
        You updated the task <b>"Dashboard Design"</b>
      </>
    ),
    time: "2 min ago",
  },
  {
    id: 2,
    icon: "check",
    text: (
      <>
        Sarah completed <b>"Login Page"</b>
      </>
    ),
    time: "1 hour ago",
  },
  {
    id: 3,
    icon: "user",
    text: (
      <>
        Mike added a new task <b>"API Integration"</b>
      </>
    ),
    time: "3 hours ago",
  },
];

function RecentActivity() {
  return (
    <div className="recent-activity-card">
      <h3>Recent Activity</h3>

      <div className="activity-list">
        {activities.map((activity) => (
          <div className="activity-item" key={activity.id}>
            <div className="activity-icon">
              {activity.icon === "user" ? (
                <UserRound size={15} />
              ) : (
                <CheckCircle2 size={15} />
              )}
            </div>

            <div className="activity-content">
              <p>{activity.text}</p>
            </div>

            <span className="activity-time">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;
