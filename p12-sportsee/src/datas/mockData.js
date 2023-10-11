const mockId = "_mock";
const mockUserData = [
  {
    id: mockId,
    userInfos: {
      firstName: "John",
      lastName: "Smith",
      age: 25,
    },
    todayScore: 0.5,
    keyData: {
      calorieCount: 1800,
      proteinCount: 120,
      carbohydrateCount: 220,
      lipidCount: 40,
    },
  },
];

const mockUserActivity = [
  {
    userid: mockId,
    sessions: [
      {
        day: "2022-01-01",
        kilogram: 70,
        calories: 200,
      },
      {
        day: "2022-01-02",
        kilogram: 71,
        calories: 220,
      },
    ],
  },
];

const mockUserAverageSessions = [
  {
    userid: mockId,
    sessions: [
      {
        day: 1,
        sessionLength: 30,
      },
      {
        day: 2,
        sessionLength: 35,
      },
    ],
  },
];

const mockUserPerformance = [
  {
    userid: mockId,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      {
        value: 85,
        kind: 1,
      },
      {
        value: 130,
        kind: 2,
      },
    ],
  },
];

export {
  mockUserData,
  mockUserActivity,
  mockUserAverageSessions,
  mockUserPerformance,
};
