import UserDataModelAPI from "../datas/UserDataModelAPI";
import UserDataModelMock from "../datas/UserDataModelMock";
import User from "../datas/User";

const useMock = false; // true pour utiliser les données mockées

async function getUserInstance(userId) {
  // Création d'une instance de UserDataModelAPI ou UserDataModelMock
  const userDataInstance = useMock
    ? new UserDataModelMock(userId)
    : new UserDataModelAPI(userId);
  try {
    // Récupération des données de l'utilisateur
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

    // Création d'une instance de User pour formatter les données
    return new User(
      userDataResult,
      userActivityResult,
      userAverageSessionsResult,
      userPerformanceResult
    );
  } catch (error) {
    throw error;
  }
}

export default getUserInstance;
