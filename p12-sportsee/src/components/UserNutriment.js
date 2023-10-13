import React from "react";

function UserNutriment({ data, title, icon }) {
  if (!data) {
    return null;
  }

  return (
    <div className="user-nutriment">
      <span>{icon}</span>
      <div className="user-nutriment_right">
        <h2>{data}</h2>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default UserNutriment;
