import React from "react";

function UserIntensity({ data }) {
  if (!data) {
    return null;
  }

  const sessions = data.sessions;

  return (
    <div className="user-intensity">
      <h2>Intensité</h2>
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

export default UserIntensity;
