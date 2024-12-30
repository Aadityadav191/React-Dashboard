import React from "react";
import "./GBarGraph.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function GBarGraph() {
  // Chart data
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: " Net Profit",
        data: [30, 50, 40, 60, 70],
        backgroundColor: "rgb(90,82,120)",
      },
      {
        label: "Revenue",
        data: [40, 60, 50, 70, 90],
        backgroundColor: "rgba(153, 102, 255, 0.7)",
      },
      {
        label: "Free Cash Flow",
        data: [20, 40, 60, 80, 100],
        backgroundColor: "rgb(142,124,199)",
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom", // Adjust legend position
      },
      title: {
        display: true,
        text: "Grouped Bar Chart Example",
      },
    },
  };

  return (
    <>
      <main className="Groupedbarchart">
        <h4 style={{ padding: "10px" }}> Employee Structure :</h4>
        <Bar data={data} options={options} width={200} height={200}/>
      </main>
    </>
  );
}
