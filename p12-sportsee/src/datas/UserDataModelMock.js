import {
  mockUserData,
  mockUserActivity,
  mockUserAverageSessions,
  mockUserPerformance,
} from "./mockData";

class UserDataModelMock {
  constructor(userId) {
    this.userId = userId;
  }

  async getUserData() {
    if (this.userId === mockUserData[0].id) {
      return mockUserData[0];
    } else {
      throw {
        status: "404",
        message: "La requête a échoué.",
      };
    }
  }

  async getUserActivity() {
    if (this.userId === mockUserData[0].id) {
      return mockUserActivity[0];
    } else {
      throw {
        status: "404",
        message: "La requête a échoué.",
      };
    }
  }

  async getUserAverageSessions() {
    if (this.userId === mockUserData[0].id) {
      return mockUserAverageSessions[0];
    } else {
      throw {
        status: "404",
        message: "La requête a échoué.",
      };
    }
  }

  async getUserPerformance() {
    if (this.userId === mockUserData[0].id) {
      return mockUserPerformance[0];
    } else {
      throw {
        status: "404",
        message: "La requête a échoué.",
      };
    }
  }
}

export default UserDataModelMock;
