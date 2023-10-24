import React from "react";
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
  if (!data) {
    return null;
  }

  const kindLabels = data.kind;

  const transformedData = data.data.map((item) => ({
    kind: kindLabels[item.kind]
      .replace("cardio", "Cardio")
      .replace("strength", "Force")
      .replace("endurance", "Endurance")
      .replace("speed", "Vitesse")
      .replace("intensity", "Intensité")
      .replace("energy", "Energie"),
    value: item.value,
  }));

  transformedData.reverse();

  return (
    <div className="user-radar">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius="70%" data={transformedData}>
          <PolarGrid radialLines={false} polarRadius={[12, 25, 47, 69, 91]} />
          <PolarAngleAxis dataKey="kind" tick={CustomTick} />
          <Radar name="Stats" dataKey="value" fill="rgba(255, 1, 1, 0.7)" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserRadar;
