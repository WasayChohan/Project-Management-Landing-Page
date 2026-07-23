import "./UpcomingDeadlines.css";

import { FiCalendar } from "react-icons/fi";

const deadlines = [
  {
    title: "Design System",
    date: "Due in 2 days",
    members: [
      "https://i.pravatar.cc/30?img=12",
      "https://i.pravatar.cc/30?img=32",
    ],
  },

  {
    title: "Marketing Website",
    date: "Due in 5 days",
    members: [
      "https://i.pravatar.cc/30?img=45",
      "https://i.pravatar.cc/30?img=56",
    ],
  },

  {
    title: "Mobile App",
    date: "Due in 8 days",
    members: [
      "https://i.pravatar.cc/30?img=22",
      "https://i.pravatar.cc/30?img=48",
    ],
  },

  {
    title: "CRM Dashboard",
    date: "Due in 12 days",
    members: [
      "https://i.pravatar.cc/30?img=15",
      "https://i.pravatar.cc/30?img=60",
    ],
  },
];

const UpcomingDeadlines = () => {
  return (
    <div className="upcoming-deadlines">
      {/* Header */}

      <div className="deadlines-header">
        <h3>Upcoming Deadlines</h3>

        <button>View Calendar</button>
      </div>

      {/* List */}

      <div className="deadlines-list">
        {deadlines.map((item, index) => (
          <div className="deadline-item" key={index}>
            <div className="deadline-left">
              <div className="deadline-icon">
                <FiCalendar />
              </div>

              <div>
                <h4>{item.title}</h4>

                <div className="members">
                  {item.members.map((img, i) => (
                    <img key={i} src={img} alt="member" />
                  ))}
                </div>
              </div>
            </div>

            <p>{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingDeadlines;
