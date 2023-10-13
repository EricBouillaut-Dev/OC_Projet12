import React from "react";

function UserProteines({ data }) {
  if (!data) {
    return null;
  }

  const sessions = data.sessions;

  return (
    <div className="user-proteines">
      <h2>Proteines</h2>
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

export default UserProteines;
