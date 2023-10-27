class User {
  constructor(mainData, activityData, averageSessionsData, performanceData) {
    this.id = mainData.id;
    this.userInfos = {
      firstName: mainData.userInfos.firstName,
      lastName: mainData.userInfos.lastName,
      age: mainData.userInfos.age,
    };
    this.score = mainData.score || mainData.todayScore;
    this.keyData = {
      calorieCount: mainData.keyData.calorieCount,
      proteinCount: mainData.keyData.proteinCount,
      carbohydrateCount: mainData.keyData.carbohydrateCount,
      lipidCount: mainData.keyData.lipidCount,
    };
    this.activity = activityData.sessions;
    this.averageSessions = averageSessionsData.sessions;
    this.performance = {
      kind: performanceData.kind,
      data: performanceData.data,
    };
  }
}

export default User;
