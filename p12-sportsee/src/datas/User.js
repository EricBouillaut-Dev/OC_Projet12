class User {
  constructor(mainData, activityData, averageSessionsData, performanceData) {
    this.id = mainData.id;
    this.userInfos = {
      firstName: mainData.userInfos.firstName,
      lastName: mainData.userInfos.lastName,
      age: mainData.userInfos.age,
    };
    this.score = mainData.score || mainData.todayScore; // Prend en compte score s'il existe, sinon todayScore
    this.keyData = {
      calorieCount: mainData.keyData.calorieCount,
      proteinCount: mainData.keyData.proteinCount,
      carbohydrateCount: mainData.keyData.carbohydrateCount,
      lipidCount: mainData.keyData.lipidCount,
    };
    this.activity = activityData.sessions.map((item, index) => ({
      // Formattage des données du graphique en barres (activité)
      dayNumber: index + 1,
      kilogram: item.kilogram,
      calories: item.calories,
    }));
    this.averageSessions = averageSessionsData.sessions;
    // formattage des données du graphique radar (performance)
    this.kindLabels = {
      1: "Cardio",
      2: "Energie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité",
    };
    this.performance = performanceData.data.map((item) => ({
      kind: this.kindLabels[item.kind],
      value: item.value,
    }));
    this.performance.reverse();
  }
}

export default User;
