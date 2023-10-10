import React from "react";

function UserAverageSessions({ data }) {
  if (!data) {
    return null;
  }

  const sessions = data.sessions;

  return (
    <div>
      <h2>User Average Sessions</h2>
      <ul>
        {sessions.map((session, index) => (
          <li key={index}>
            <p>Day: {session.day}</p>
            <p>Session Length: {session.sessionLength}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserAverageSessions;
