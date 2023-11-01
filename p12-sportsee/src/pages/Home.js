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
import getUserInstance from "../datas/DataService";
import Icon from "../components/Icon";
import Error from "../pages/Error";

function Home() {
  // États pour stocker les données de l'utilisateur
  const [user, setUser] = useState(null);

  // Obtient le "userId" à partir de l'URL
  const { userId } = useParams();
  const [error, setError] = useState(null);

  // Effet qui se déclenche lorsque le composant est monté
  useEffect(() => {
    // Fonction asynchrone pour récupérer les données de l'utilisateur
    const fetchData = async () => {
      try {
        const userInstance = await getUserInstance(userId);
        setUser(userInstance);
      } catch (error) {
        if (error.status == "404") {
          setError({ type: "404", msg: "La page n'existe pas" });
        } else {
          setError({
            type: "Backend",
            msg: "Problème de connexion avec le backend.",
          });
        }
      }
    };
    fetchData();
  }, [userId]);

  if (error) {
    return <Error type={error.type} msg={error.msg} />;
  }

  return (
    <>
      {/* Affiche le contenu de la page uniquement si toutes les données sont disponibles */}
      {user && (
        <div className="home-content">
          <UserData data={user} />
          <UserActivity data={user.activity} />
          <div className="home-bottom">
            <UserSessions data={user.averageSessions} />
            <UserRadar data={user.performance} />
            <UserScore data={user.score} />
          </div>
          <div className="home-right">
            {/* Cartes d'informations avec des icônes personnalisées */}
            <UserCard
              key="card01"
              data={`${(user.keyData.calorieCount / 1000).toLocaleString(
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
              data={`${user.keyData.proteinCount}g`}
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
              data={`${user.keyData.carbohydrateCount}g`}
              title="Glucides"
              icon={
                <Icon image={Pomme} backgroundColor="rgba(249, 206, 35, 0.1)" />
              }
            />
            <UserCard
              key="card04"
              data={`${user.keyData.lipidCount}g`}
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
      )}
    </>
  );
}

export default Home;
