import {
  mockUserData,
  mockUserActivity,
  mockUserAverageSessions,
  mockUserPerformance,
} from "./mockData";

const mockid = mockUserData[0].id;

export const getUserData = async (userId) => {
  if (userId === mockid) {
    return mockUserData[0];
  }

  try {
    const response = await fetch(`http://localhost:5000/user/${userId}`);
    if (!response.ok) {
      throw new Error("La requête a échoué.");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw error;
  }
};

export const getUserActivity = async (userId) => {
  if (userId === mockid) {
    return mockUserActivity[0];
  }

  try {
    const response = await fetch(
      `http://localhost:5000/user/${userId}/activity`
    );
    if (!response.ok) {
      throw new Error("La requête a échoué.");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw error;
  }
};

export const getUserAverageSessions = async (userId) => {
  if (userId === mockid) {
    return mockUserAverageSessions[0];
  }

  try {
    const response = await fetch(
      `http://localhost:5000/user/${userId}/average-sessions`
    );
    if (!response.ok) {
      throw new Error("La requête a échoué.");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw error;
  }
};

export const getUserPerformance = async (userId) => {
  if (userId === mockid) {
    return mockUserPerformance[0];
  }

  try {
    const response = await fetch(
      `http://localhost:5000/user/${userId}/performance`
    );
    if (!response.ok) {
      throw new Error("La requête a échoué.");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw error;
  }
};
