import React from "react";

function UserCard({ data, title, icon }) {
  if (!data) {
    return null;
  }

  return (
    <div className="user-card">
      <span>{icon}</span>
      <div className="user-card_right">
        <h2>{data}</h2>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default UserCard;
