import React from "react";
import Clap from "../assets/clap.png";

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
      <p className="user-content">
        Félicitation ! Vous avez explosé vos objectifs hier
        <img src={Clap} alt="clap" />
      </p>
    </div>
  );
}

export default UserData;
