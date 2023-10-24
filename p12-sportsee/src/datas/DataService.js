import {
  mockUserData,
  mockUserActivity,
  mockUserAverageSessions,
  mockUserPerformance,
} from "./mockData";

// Crée un objet "mockData" contenant des données simulées
const mockData = {
  userData: mockUserData[0],
  userActivity: mockUserActivity[0],
  userAverageSessions: mockUserAverageSessions[0],
  userPerformance: mockUserPerformance[0],
};

// Fonction factory qui génère un objet userDataFactory
export const userDataFactory = (userId) => {
  return {
    // Méthode asynchrone pour obtenir les données de l'utilisateur
    getUserData: async () => {
      return userId === mockData.userData.id
        ? mockData.userData
        : fetchData(`http://localhost:5000/user/${userId}`);
    },
    // Méthode asynchrone pour obtenir les données d'activité de l'utilisateur
    getUserActivity: async () => {
      return userId === mockData.userData.id
        ? mockData.userActivity
        : fetchData(`http://localhost:5000/user/${userId}/activity`);
    },
    // Méthode asynchrone pour obtenir les données de sessions moyennes de l'utilisateur
    getUserAverageSessions: async () => {
      return userId === mockData.userData.id
        ? mockData.userAverageSessions
        : fetchData(`http://localhost:5000/user/${userId}/average-sessions`);
    },
    // Méthode asynchrone pour obtenir les données de performance de l'utilisateur
    getUserPerformance: async () => {
      return userId === mockData.userData.id
        ? mockData.userPerformance
        : fetchData(`http://localhost:5000/user/${userId}/performance`);
    },
  };
};

// Fonction asynchrone pour effectuer des requêtes HTTP
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("La requête a échoué.");
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    throw error;
  }
}
