import useChartResize from "../utils/useChartResize";
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
  const sessionsRef = useChartResize();
  if (!data) {
    return null;
  }
  return (
    <div className="user-radar" ref={sessionsRef}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="63%" data={data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind" tick={CustomTick} />
          <Radar name="Stats" dataKey="value" fill="rgba(255, 1, 1, 0.7)" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserRadar;
