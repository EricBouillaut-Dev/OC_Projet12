import UserDataModelAPI from "../datas/UserDataModelAPI";
import UserDataModelMock from "../datas/UserDataModelMock";
import User from "../datas/User";

const useMock = false;

async function getUserInstance(userId) {
  const userDataInstance = useMock
    ? new UserDataModelMock(userId)
    : new UserDataModelAPI(userId);
  try {
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
