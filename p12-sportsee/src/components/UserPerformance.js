import React from "react";

function UserPerformance({ data }) {
  if (!data) {
    return null;
  }

  const performanceData = data.data;

  return (
    <div>
      <h2>User Performance</h2>
      <ul>
        {performanceData.map((performance, index) => (
          <li key={index}>
            <p>Kind: {performance.kind[performance.kind]}</p>
            <p>Value: {performance.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserPerformance;
