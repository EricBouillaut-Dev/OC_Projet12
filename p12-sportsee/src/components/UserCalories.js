import React from "react";

function UserCalories({ data }) {
  if (!data) {
    return null;
  }

  const sessions = data.sessions;

  return (
    <div className="user-calories">
      <h2>Calories</h2>
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

export default UserCalories;
