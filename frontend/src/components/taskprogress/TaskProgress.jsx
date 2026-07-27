import "./TaskProgress.css";

function TaskProgress() {
  const percentage = 68;

  return (
    <div className="task-progress-card">
      <h3>Task Progress</h3>

      <div className="task-progress-content">
        <div
          className="progress-circle"
          style={{
            background: `conic-gradient(
              #6C63FF ${percentage * 3.6}deg,
              #EAE7FF ${percentage * 3.6}deg
            )`,
          }}
        >
          <div className="progress-inner">
            <h2>{percentage}%</h2>
            <span>Completed</span>
          </div>
        </div>

        <div className="progress-legend">
          <div className="legend-item">
            <span className="legend completed"></span>
            Completed
          </div>

          <div className="legend-item">
            <span className="legend pending"></span>
            Pending
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskProgress;
