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
        // Gestion des erreurs
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
export default UserDataModelAPI;
