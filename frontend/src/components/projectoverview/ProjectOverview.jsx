import "./ProjectOverview.css";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { FiChevronDown } from "react-icons/fi";

const data = [
  { month: "Jan", project: 22 },
  { month: "Feb", project: 40 },
  { month: "Mar", project: 33 },
  { month: "Apr", project: 58 },
  { month: "May", project: 47 },
  { month: "Jun", project: 66 },
  { month: "Jul", project: 82 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="overview-tooltip">
        <span>{payload[0].payload.month}</span>
        <h4>{payload[0].value} Projects</h4>
      </div>
    );
  }

  return null;
};

function ProjectOverview() {
  return (
    <div className="project-overview">
      <div className="overview-top">
        <div>
          <h2>Project Overview</h2>
          <p>Overall project performance</p>
        </div>

        <button className="overview-btn">
          This Week
          <FiChevronDown />
        </button>
      </div>

      <div className="overview-chart">
        <ResponsiveContainer width="100%" height={330}>
          <AreaChart
            data={data}
            margin={{
              top: 20,
              right: 15,
              left: -25,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="projectFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6D5EFC" stopOpacity={0.25} />

                <stop offset="100%" stopColor="#6D5EFC" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke="#EEF2F8"
              strokeDasharray="4 4"
            />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip content={<CustomTooltip />} />

            <Area
              type="natural"
              dataKey="project"
              stroke="#6D5EFC"
              strokeWidth={4}
              fill="url(#projectFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ProjectOverview;
