import React, { useEffect, useState } from "react";
import LeftBar from "../components/LeftBar";
import UserData from "../components/UserData";
import UserActivity from "../components/UserActivity";
import UserAverageSessions from "../components/UserAverageSessions";
import UserPerformance from "../components/UserPerformance";
import {
  getUserData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from "../datas/DataService";

function Home() {
  const [userData, setUserData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  const getUserIdFromPath = () => {
    const url = window.location.href;
    const regex = /^http:\/\/localhost:3000\/user\/([^/]+)/;
    const match = url.match(regex);
    if (match) {
      return match[1];
    } else {
      return null;
    }
  };

  const userId = getUserIdFromPath();

  console.log(userId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDataResult = await getUserData(userId);
        const userActivityResult = await getUserActivity(userId);
        const userAverageSessionsResult = await getUserAverageSessions(userId);
        const userPerformanceResult = await getUserPerformance(userId);

        setUserData(userDataResult);
        setUserActivity(userActivityResult);
        setUserAverageSessions(userAverageSessionsResult);
        setUserPerformance(userPerformanceResult);
      } catch (error) {
        console.error("Erreur lors de la récupération des données : ", error);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  return (
    <div>
      <LeftBar />
      {userData && (
        <>
          <UserData data={userData} />
          <UserActivity data={userActivity} />
          <UserAverageSessions data={userAverageSessions} />
          <UserPerformance data={userPerformance} />
        </>
      )}
    </div>
  );
}

export default Home;
