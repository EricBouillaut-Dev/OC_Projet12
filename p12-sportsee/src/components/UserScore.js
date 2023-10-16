import React from "react";
import {
  ResponsiveContainer,
  RadialBar,
  RadialBarChart,
  PolarAngleAxis,
} from "recharts";

function UserScore({ data }) {
  if (!data) {
    return null;
  }

  const percentageValue = (data.todayScore || data.score) * 100;

  const scoreData = [
    {
      name: "Score",
      value: percentageValue,
    },
  ];

  const startAngle = 215;
  const endAngle = startAngle - 360;

  return (
    <div className="user-score">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={85}
          barSize={10}
          data={scoreData}
          fill="#FF0101"
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar dataKey="value" cornerRadius={5} />
          <circle cx="50%" cy="50%" r="80" fill="white" />
          <text
            textAnchor="middle"
            // alignmentBaseline="middle"
          >
            <tspan x="50" y="40" fontSize="15" fill="#20253A">
              Score
            </tspan>
            <tspan
              x="130"
              y="130"
              fontSize="26"
              fontWeight="700"
              fill="#282D30"
            >
              {percentageValue}%
            </tspan>
            <tspan x="130" y="155" fontSize="16" fill="#74798C">
              de votre
            </tspan>
            <tspan x="130" y="180" fontSize="16" fill="#74798C">
              objectif
            </tspan>
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserScore;
