import useResponsiveChart from "../utils/useResponsiveChart";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const CustomTick = ({ payload, x, y, cy, textAnchor }) => (
  <text
    y={y + (y - cy) / 10}
    className="recharts-text recharts-polar-angle-axis-tick-value"
    textAnchor={textAnchor}
    fill="white"
  >
    <tspan x={x} dy="3">
      {payload.value}
    </tspan>
  </text>
);

function UserRadar({ data }) {
  const [sessionsRef, containerSize] = useResponsiveChart();

  const outerRadius =
    Math.min(containerSize.width, containerSize.height) * 0.33;

  const polarRadii = [
    outerRadius * 0.12,
    outerRadius * 0.25,
    outerRadius * 0.5,
    outerRadius * 0.75,
    outerRadius,
  ];

  if (!data) {
    return null;
  }

  return (
    <div className="user-radar" ref={sessionsRef}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius={outerRadius} data={data}>
          <PolarGrid radialLines={false} polarRadius={polarRadii} />
          <PolarAngleAxis dataKey="kind" tick={CustomTick} />
          <Radar name="Stats" dataKey="value" fill="rgba(255, 1, 1, 0.7)" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserRadar;
