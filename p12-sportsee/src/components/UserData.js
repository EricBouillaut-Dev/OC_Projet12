import React from "react";

function UserData({ data }) {
  if (!data) {
    return null;
  }

  const { userInfos } = data;
  return (
    <div className="user-title">
      <h2>
        Bonjour <span className="user-info">{userInfos.firstName}</span>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

export default UserData;
