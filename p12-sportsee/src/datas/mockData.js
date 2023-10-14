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
      {
        day: "2022-01-03",
        kilogram: 69,
        calories: 340,
      },
      {
        day: "2022-01-04",
        kilogram: 65,
        calories: 460,
      },
      {
        day: "2022-01-05",
        kilogram: 70,
        calories: 180,
      },
      {
        day: "2022-01-06",
        kilogram: 75,
        calories: 50,
      },
      {
        day: "2022-01-07",
        kilogram: 71,
        calories: 320,
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
        sessionLength: 20,
      },
      {
        day: 2,
        sessionLength: 30,
      },
      {
        day: 3,
        sessionLength: 25,
      },
      {
        day: 4,
        sessionLength: 80,
      },
      {
        day: 5,
        sessionLength: 60,
      },
      {
        day: 6,
        sessionLength: 70,
      },
      {
        day: 7,
        sessionLength: 30,
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
        value: 95,
        kind: 1,
      },
      {
        value: 130,
        kind: 2,
      },
      {
        value: 25,
        kind: 3,
      },
      {
        value: 75,
        kind: 4,
      },
      {
        value: 120,
        kind: 5,
      },
      {
        value: 85,
        kind: 6,
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
