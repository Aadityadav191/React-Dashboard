import React from "react";
import { Doughnut } from "react-chartjs-2";

// Import Chart.js components
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Doughnutchart() {
  const data = {
    labels: ["USA", "UK", "Australia", "Euprope"],
    datasets: [
      {
        label: "Votes",
        data: [12, 19, 3, 5],
        backgroundColor: [
          "rgb(90,82,120)",
          "rgb(111,101,147)",
          "rgb(146, 131, 200)",
          "rgb(193, 178, 247)",
        ],
        borderColor: [
          "rgb(111,101,147)",
          "rgb(111,101,147)",
          "rgb(111,101,147)",
          "rgb(111,101,147)",
          "rgb(148, 126, 191)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <>
      <main style={{ width: "300px", height: "450px" }}>
        <h4 style={{ padding: "10px" }}> Growth:</h4>
        <Doughnut data={data} options={options} />
      </main>
    </>
  );
}
