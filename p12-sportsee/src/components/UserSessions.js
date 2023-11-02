import useChartResize from "../utils/useChartResize";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Rectangle,
  Dot,
  ResponsiveContainer,
} from "recharts";

function UserSessions({ data }) {
  const sessionsRef = useChartResize(); // Utilisation du hook useChartResize pour le graphique en barres
  if (!data) {
    return null;
  }
  const CustomTooltip = ({ active, payload }) => {
    // Création d'un composant CustomTooltip pour l'info bulle du graphique
    if (active) {
      return (
        <div className="custom-tooltip_line">
          <span>{payload[0].value} min</span>
        </div>
      );
    }

    return null;
  };

  const CustomCursor = ({ points, width }) => {
    // Création d'un composant CustomCursor pour le curseur du graphique
    const { x } = points[0];
    return (
      <Rectangle fill="rgba(0, 0, 0, 0.1)" x={x} width={width} height={260} />
    );
  };

  const CustomDot = ({ cx, cy }) => {
    // Création d'un composant CustomDot pour le point du graphique
    return (
      <Dot
        cx={cx}
        cy={cy}
        fill="white"
        r={4}
        stroke="rgba(255, 255, 255, 0.5)"
        strokeWidth={10}
      />
    );
  };

  const newXaxis = ["L", "M", "M", "J", "V", "S", "D"]; // Création d'un nouveau tableau pour l'axe X
  const lineData = data.map((item, index) => ({
    // Création d'un tableau des données du graphique en barres
    day: newXaxis[index],
    sessionLength: item.sessionLength,
  }));
  const firstDayValue = lineData[0].sessionLength; // Calcul de la valeur du premier jour
  const lastDayValue = lineData[lineData.length - 1].sessionLength; // Calcul de la valeur du dernier jour

  lineData.unshift({ day: "", sessionLength: firstDayValue - 1 }); // Ajout d'un jour vide au début du tableau
  lineData.push({ day: "", sessionLength: lastDayValue + 1 }); // Ajout d'un jour vide à la fin du tableau

  return (
    <div className="user-sessions" ref={sessionsRef}>
      <ResponsiveContainer width="110%" height="100%">
        <LineChart data={lineData} margin={{ left: -20 }}>
          <text x="10%" y="15%" fill="rgba(255, 255, 255, 0.5)">
            <tspan>Durée moyenne des</tspan>
            <tspan x="10%" y="23%">
              sessions
            </tspan>
          </text>
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            stroke="rgba(255, 255, 255, 0.5)"
            tickMargin={-5}
          />
          <YAxis domain={["dataMin - 20", "dataMax + 40"]} hide />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#gradient)"
            dot={false}
            strokeWidth={2}
            activeDot={<CustomDot />}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserSessions;
