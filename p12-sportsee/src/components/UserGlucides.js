import React from "react";

function UserGlucides({ data }) {
  if (!data) {
    return null;
  }

  const sessions = data.sessions;

  return (
    <div className="user-glucides">
      <h2>Glucides</h2>
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

export default UserGlucides;
