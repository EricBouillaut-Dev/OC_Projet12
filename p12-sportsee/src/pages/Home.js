import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserData from "../components/UserData";
import UserActivity from "../components/UserActivity";
import UserSessions from "../components/UserSessions";
import UserRadar from "../components/UserRadar";
import UserScore from "../components/UserScore";
import UserCard from "../components/UserCard";
import Flamme from "../assets/flamme.svg";
import Grenade from "../assets/grenade.svg";
import Pomme from "../assets/pomme.svg";
import Burger from "../assets/burger.svg";
import { userDataFactory } from "../datas/DataService";
import Icon from "../components/Icon";

function Home() {
  // États pour stocker les données de l'utilisateur
  const [userData, setUserData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSessions, setUserAverageSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  // Obtient le "userId" à partir de l'URL
  const { userId } = useParams();
  const navigate = useNavigate();

  // Effet qui se déclenche lorsque le composant est monté
  useEffect(() => {
    const userDataInstance = userDataFactory(userId);

    // Fonction asynchrone pour récupérer les données de l'utilisateur
    const fetchData = async () => {
      try {
        // Récupère plusieurs ensembles de données en parallèle
        const [
          userDataResult,
          userActivityResult,
          userAverageSessionsResult,
          userPerformanceResult,
        ] = await Promise.all([
          userDataInstance.getUserData(),
          userDataInstance.getUserActivity(),
          userDataInstance.getUserAverageSessions(),
          userDataInstance.getUserPerformance(),
        ]);

        // Stocke les données dans les états correspondants
        setUserData(userDataResult);
        setUserActivity(userActivityResult);
        setUserAverageSessions(userAverageSessionsResult);
        setUserPerformance(userPerformanceResult);
      } catch (error) {
        // En cas d'erreur, redirige vers une page d'erreur
        navigate("/error");
      }
    };
    fetchData();
  }, [userId, navigate]);

  return (
    <>
      {/* Affiche le contenu de la page uniquement si toutes les données sont disponibles */}
      {userData && userActivity && userAverageSessions && userPerformance && (
        <div className="home-content">
          <UserData data={userData} />
          <div className="home-main">
            <div className="home-middle">
              <UserActivity data={userActivity} />
              <div className="home-bottom">
                <UserSessions data={userAverageSessions} />
                <UserRadar data={userPerformance} />
                <UserScore data={userData} />
              </div>
            </div>
            <div className="home-right">
              {/* Cartes d'informations avec des icônes personnalisées */}
              <UserCard
                key="card01"
                data={`${(userData.keyData.calorieCount / 1000).toLocaleString(
                  "fr-FR"
                )}kCal`}
                title="Calories"
                icon={
                  <Icon
                    image={Flamme}
                    backgroundColor="rgba(255, 0, 0, 0.0661)"
                  />
                }
              />
              <UserCard
                key="card02"
                data={`${userData.keyData.proteinCount}g`}
                title="Proteines"
                icon={
                  <Icon
                    image={Grenade}
                    backgroundColor="rgba(74, 184, 255, 0.1)"
                  />
                }
              />
              <UserCard
                key="card03"
                data={`${userData.keyData.carbohydrateCount}g`}
                title="Glucides"
                icon={
                  <Icon
                    image={Pomme}
                    backgroundColor="rgba(249, 206, 35, 0.1)"
                  />
                }
              />
              <UserCard
                key="card04"
                data={`${userData.keyData.lipidCount}g`}
                title="Lipides"
                icon={
                  <Icon
                    image={Burger}
                    backgroundColor="rgba(253, 81, 129, 0.1)"
                  />
                }
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
