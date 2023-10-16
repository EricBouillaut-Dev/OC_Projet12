import {
  mockUserData,
  mockUserActivity,
  mockUserAverageSessions,
  mockUserPerformance,
} from "./mockData";

const mockData = {
  userData: mockUserData[0],
  userActivity: mockUserActivity[0],
  userAverageSessions: mockUserAverageSessions[0],
  userPerformance: mockUserPerformance[0],
};

export const userDataFactory = (userId) => {
  return {
    getUserData: async () => {
      return userId === mockData.userData.id
        ? mockData.userData
        : fetchData(`http://localhost:5000/user/${userId}`);
    },
    getUserActivity: async () => {
      return userId === mockData.userData.id
        ? mockData.userActivity
        : fetchData(`http://localhost:5000/user/${userId}/activity`);
    },
    getUserAverageSessions: async () => {
      return userId === mockData.userData.id
        ? mockData.userAverageSessions
        : fetchData(`http://localhost:5000/user/${userId}/average-sessions`);
    },
    getUserPerformance: async () => {
      return userId === mockData.userData.id
        ? mockData.userPerformance
        : fetchData(`http://localhost:5000/user/${userId}/performance`);
    },
  };
};

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
