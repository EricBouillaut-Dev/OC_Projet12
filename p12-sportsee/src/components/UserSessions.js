import React from "react";

function UserSessions({ data }) {
  if (!data) {
    return null;
  }

  const sessions = data.sessions;

  return (
    <div className="user-sessions">
      <h2>Durée moyenne des sessions</h2>
      {/* <ul>
        {sessions.map((session, index) => (
          <li key={index}>
            <p>Day: {session.day}</p>
            <p>Session Length: {session.sessionLength}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default UserSessions;
