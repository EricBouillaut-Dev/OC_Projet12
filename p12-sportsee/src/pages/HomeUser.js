import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomeUser() {
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleGoToUser = () => {
    if (userId) {
      navigate(`/user/${userId}`);
    }
  };

  return (
    <div className="home-user">
      <input
        type="text"
        placeholder="Entrez l'ID de l'utilisateur"
        value={userId}
        onChange={handleUserIdChange}
      />
      <button onClick={handleGoToUser}>Aller au Dashboard</button>
    </div>
  );
}

export default HomeUser;
