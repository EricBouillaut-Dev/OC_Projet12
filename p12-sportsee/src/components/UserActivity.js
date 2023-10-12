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
      <BarChart
        width={835}
        height={320}
        data={chartData}
        barGap={10}
        margin={{ top: 64, right: 32, left: 48, bottom: 16 }}
      >
        <text x={30} y={35} fill="#20253A">
          <tspan>Activité quotidienne</tspan>
        </text>
        <CartesianGrid strokeDasharray="2 2" vertical={false} />
        <XAxis
          dataKey="dayNumber"
          tickMargin={15}
          tickLine={false}
          tick={{ stroke: "#DEDEDE" }}
          axisLine={{ stroke: "#DEDEDE" }}
          padding={{ left: -45, right: -45 }}
        />
        <YAxis
          orientation="right"
          axisLine={false}
          tickLine={false}
          interval={1}
          tick={{ stroke: "#DEDEDE" }}
          tickMargin={30}
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
          iconSize={8}
          wrapperStyle={{
            position: "absolute",
            top: 20,
            fontSize: 14,
          }}
        />
      </BarChart>
    </div>
  );
}

export default UserActivity;
