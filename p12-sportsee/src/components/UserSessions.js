import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Rectangle,
  Dot,
} from "recharts";

function UserSessions({ data }) {
  if (!data) {
    return null;
  }
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="custom-tooltip_line">
          <span>{payload[0].value} min</span>
        </div>
      );
    }

    return null;
  };

  const CustomCursor = ({ points, width }) => {
    const { x } = points[0];
    return (
      <Rectangle fill="rgba(0, 0, 0, 0.1)" x={x} width={width} height={260} />
    );
  };

  const CustomDot = ({ cx, cy }) => {
    return (
      <Dot
        cx={cx}
        cy={cy}
        fill="white"
        r={4}
        stroke="rgba(255, 255, 255, 0.5)"
        strokeWidth={10}
      />
    );
  };

  const newXaxis = ["L", "M", "M", "J", "V", "S", "D"];
  const lineData = data.sessions.map((session, index) => ({
    day: newXaxis[index],
    sessionLength: session.sessionLength,
  }));
  const firstDayValue = lineData[0].sessionLength;
  const lastDayValue = lineData[lineData.length - 1].sessionLength;

  lineData.unshift({ day: "", sessionLength: firstDayValue - 1 });
  lineData.push({ day: "", sessionLength: lastDayValue + 1 });

  return (
    <div className="user-sessions">
      <LineChart width={300} height={260} data={lineData}>
        <text x={50} y={40} fill="rgba(255, 255, 255, 0.5)">
          <tspan>Durée moyenne des</tspan>
          <tspan x={50} dy={20}>
            sessions
          </tspan>
        </text>
        <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          stroke="rgba(255, 255, 255, 0.5)"
          tickMargin={-5}
        />
        <YAxis domain={["dataMin - 20", "dataMax + 40"]} hide />
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="url(#gradient)"
          dot={false}
          strokeWidth={2}
          activeDot={<CustomDot />}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
          </linearGradient>
        </defs>
      </LineChart>
    </div>
  );
}

export default UserSessions;
