import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

function UserIntensity({ data }) {
  if (!data) {
    return null;
  }
  const kindLabels = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };
  const transformedData = data.data.map((item) => ({
    kind: kindLabels[item.kind],
    value: item.value,
  }));

  transformedData.reverse();

  return (
    <div className="user-intensity">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius="70%" data={transformedData}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind" tick={{ fill: "white", dy: 3 }} />
          <Radar name="Stats" dataKey="value" fill="rgba(255, 1, 1, 0.7)" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserIntensity;
