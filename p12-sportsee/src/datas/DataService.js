import {
  mockUserData,
  mockUserActivity,
  mockUserAverageSessions,
  mockUserPerformance,
} from "./mockData";

class UserDataModelAPI {
  constructor(userId) {
    this.userId = userId;
  }

  async getUserData() {
    return this.fetchData(`http://localhost:5000/user/${this.userId}`);
  }

  async getUserActivity() {
    return this.fetchData(`http://localhost:5000/user/${this.userId}/activity`);
  }

  async getUserAverageSessions() {
    return this.fetchData(
      `http://localhost:5000/user/${this.userId}/average-sessions`
    );
  }

  async getUserPerformance() {
    return this.fetchData(
      `http://localhost:5000/user/${this.userId}/performance`
    );
  }

  async fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        // Renvoyer des informations supplémentaires
        throw {
          status: response.status,
          message: "La requête a échoué.",
        };
      }
      const result = await response.json();
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}

class UserDataModelMock {
  constructor(userId) {
    this.userId = userId;
  }

  async getUserData() {
    return this.userId === mockUserData[0].id ? mockUserData[0] : null;
  }

  async getUserActivity() {
    return this.userId === mockUserData[0].id ? mockUserActivity[0] : null;
  }

  async getUserAverageSessions() {
    return this.userId === mockUserData[0].id
      ? mockUserAverageSessions[0]
      : null;
  }

  async getUserPerformance() {
    return this.userId === mockUserData[0].id ? mockUserPerformance[0] : null;
  }
}

export { UserDataModelAPI, UserDataModelMock };
