import React from "react";

function UserActivity({ data }) {
  if (!data) {
    return null;
  }

  const sessions = data.sessions;

  return (
    <div>
      <h2>User Activity</h2>
      <ul>
        {sessions.map((session, index) => (
          <li key={index}>
            <p>Day: {session.day}</p>
            <p>Kilogram: {session.kilogram}</p>
            <p>Calories: {session.calories}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserActivity;
