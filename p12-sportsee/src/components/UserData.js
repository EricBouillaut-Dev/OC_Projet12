import React from "react";

function UserData({ data }) {
  if (!data) {
    return null;
  }

  const { userInfos, todayScore, keyData } = data;
  return (
    <div>
      <h2>User Data</h2>
      <p>First Name: {userInfos.firstName}</p>
      <p>Last Name: {userInfos.lastName}</p>
      <p>Age: {userInfos.age}</p>
      <p>Today's Score: {todayScore}</p>
      <p>Calorie Count: {keyData.calorieCount}</p>
      <p>Protein Count: {keyData.proteinCount}</p>
      <p>Carbohydrate Count: {keyData.carbohydrateCount}</p>
      <p>Lipid Count: {keyData.lipidCount}</p>
    </div>
  );
}

export default UserData;
