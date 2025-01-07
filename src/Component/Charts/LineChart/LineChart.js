import React from "react";
import "./LineChart.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function LineChart() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"], // X-axis labels
    datasets: [
      {
        label: "Sales 2024",
        data: [95, 40, 75, 41, 36, 75], // Data points
        borderColor: "rgb(132, 106, 216)", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color under the line
        pointBorderColor: "rgb(110,79,212)",
        pointBackgroundColor: "rgb(110,79,212)",
        // tension: 0.4, // Smoothness of the line (0 for straight lines)
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom", // Positions: 'top', 'bottom', 'left', 'right'
      },
      tooltip: {
        enabled: true, // Enable tooltips on hover
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months", // X-axis label
        },
      },
      y: {
        title: {
          display: true,
          text: "Sales ($)", // Y-axis label
        },
        beginAtZero: true, // Start y-axis from 0
      },
    },
  };

  function viewreport() {
    alert("View Report");
  }

  return (
    <>
      <main className="linechartcontainer">
        <section>
          <h4 style={{ padding: "10px" }}> My Balance : </h4>

          <div align="start">
            <p>Balance :</p>
            <h2>$1,23,000</h2>
          </div>

          <Line
            data={data}
            options={options}
            width={350} // Increase width for a larger chart
            height={300} // Set a specific height
          />
        </section>
        
        <section>
          <hr />
          <div align="center">
            <button className="linechart-btn" onClick={viewreport}>
              View Report
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
