import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function UserActivity({ data }) {
  if (!data) {
    return null;
  }

  // Créez une liste de nombres de jours pour l'axe des abscisses
  // const dayNumbers = data.sessions.map((session, index) => index + 1);
  const sessions = data.sessions;
  // Créez un tableau de données pour le graphique avec le nombre de jours
  const chartData = data.sessions.map((session, index) => ({
    dayNumber: index + 1,
    kilogram: session.kilogram,
    calories: session.calories,
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <span>{payload[0].value}kg</span>
          <span>{payload[1].value}kCal</span>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="activity">
      {/* <h3>Activité quotidienne</h3> */}
      <BarChart width={835} height={275} data={chartData} barGap={10}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="dayNumber"
          type="category"
          interval={0}
          // tickCount={dayNumbers.length}
          tickMargin={15}
          tickLine={false}
          tick={{ stroke: "#DEDEDE" }}
          axisLine={{ stroke: "#DEDEDE" }}
        />
        <YAxis
          orientation="right"
          axisLine={false}
          tickMargin={15}
          tickLine={false}
          tick={{ stroke: "#DEDEDE" }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="kilogram"
          fill="#282D30"
          name="Poids (kg)"
          barSize={7}
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="calories"
          fill="#E60000"
          name="Calories brûlées (kCal)"
          barSize={7}
          radius={[10, 10, 0, 0]}
        />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={10}
        />
      </BarChart>
    </div>
  );
}

export default UserActivity;
