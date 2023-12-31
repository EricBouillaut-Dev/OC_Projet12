import useDynamicPadding from "../utils/useDynamicPadding";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function UserActivity({ data }) {
  const padding = useDynamicPadding(); // Utilisation du hook useDynamicPadding pour le padding du graphique

  const CustomTooltip = ({ active, payload }) => {
    // Création d'un composant CustomTooltip pour l'info bulle du graphique
    if (active) {
      return (
        <div className="custom-tooltip_bar">
          <span>{payload[0].value}kg</span>
          <span>{payload[1].value}kCal</span>
        </div>
      );
    }
    return null;
  };

  if (!data) {
    return null;
  }

  return (
    <div className="activity">
      <ResponsiveContainer width="100%" minHeight={150} maxHeight={320}>
        <BarChart
          data={data}
          barGap={10}
          margin={{ top: 70, right: 32, left: 48, bottom: 10 }}
        >
          <text x={30} y={18} fill="#20253A" fontSize={15}>
            <tspan>Activité quotidienne</tspan>
          </text>
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <XAxis
            dataKey="dayNumber"
            tickMargin={20}
            tickLine={false}
            tick={{ stroke: "#DEDEDE", fontSize: 14 }}
            axisLine={{ stroke: "#DEDEDE" }}
            padding={padding}
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
            iconSize={7}
            wrapperStyle={{
              position: "absolute",
              top: 4,
              right: 15,
              fontSize: 14,
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserActivity;
