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
  // const sessions = data.sessions;
  // Créez un tableau de données pour le graphique avec le nombre de jours
  const chartData = data.sessions.map((session, index) => ({
    dayNumber: index + 1,
    kilogram: session.kilogram,
    calories: session.calories,
  }));
  // console.log(chartData);
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
      <BarChart
        width={835}
        height={320}
        data={chartData}
        barGap={10}
        margin={{ top: 64, right: 16, left: 16, bottom: 16 }}
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
        />
        <YAxis
          orientation="right"
          axisLine={false}
          tickLine={false}
          interval={1}
          tick={{ stroke: "#DEDEDE" }}
          // domain={["dataMin - 100", "dataMax + 100"]}
          // hide
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
          // className="activity-legend"
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={8}
          // formatter={(value) => (
          //   <span className="activity-legend">{value}</span>
          // )}
          wrapperStyle={{
            // color: "#74798c",
            // margin: "50px",
            // gap: "50px",
            // fontWeight: 500,
            position: "absolute",
            top: 20,
            fontSize: 14,
          }}

          // content={(props) => (
          //   <div
          //     style={{
          //       display: "flex",
          //       justifyContent: "space-between",
          //       marginBottom: "50px",
          //     }}
          //   >
          //     <span style={{ marginLeft: "25px" }}>Activité quotidienne</span>
          //     <div
          //       style={{ display: "flex", marginRight: "25px", gap: "30px" }}
          //     >
          //       {props.payload.map((entry, index) => (
          //         <div
          //           key={`item-${index}`}
          //           style={{ display: "flex", alignItems: "center" }}
          //         >
          //           <span style={{ marginRight: "5px" }}>
          //             <svg width="10" height="10">
          //               {" "}
          //               <circle cx="5" cy="5" r="4" fill={entry.color} />
          //             </svg>
          //           </span>
          //           <span
          //             style={{
          //               fontFamily: "Roboto",
          //               fontSize: "14px",
          //               color: entry.color,
          //             }}
          //           >
          //             {entry.value}
          //           </span>
          //         </div>
          //       ))}
          //     </div>
          //   </div>
          // )}
        />
      </BarChart>
    </div>
  );
}

export default UserActivity;
