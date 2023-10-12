import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
  const { userId } = useParams();
  const navigate = useNavigate();

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
        navigate("/error");
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId, navigate]);

  return (
    <div className="home-content">
      <UserData data={userData} />
      <UserActivity data={userActivity} />
      <UserAverageSessions data={userAverageSessions} />
      <UserPerformance data={userPerformance} />
    </div>
  );
}

export default Home;
