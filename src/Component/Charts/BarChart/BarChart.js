import React from "react";
import "./Barchart.css";
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

// Register the chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"], // X-axis labels
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 4], // Y-axis data
        backgroundColor: "rgb(161,146,217)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom", // Positions: 'top', 'bottom', 'left', 'right'
      },
      title: {
        display: true,
        //  text: 'Monthly Salary Statistics',
      },
    },
  };

  function hello() {
    alert("Hello Aadit Yadav ");
  }

  return (
    <>
      <main className="barchartcontainer">
        <section>
          <h4 style={{ padding: "10px" }}> Monthly Salary Statistics :</h4>
          <Bar
            data={data}
            options={options}
            width={400} // Increase the width
            height={400} // Set a corresponding height
          />
        </section>

        <hr />
        <section className="barchart-btn">
          <button className="barchartbutton" onClick={hello}>
            Generate Reports
          </button>
          <p>
            Measure How Fast You're Growing Monthly Recurring Revenue.{" "}
            <a href="/">Learn More</a>
          </p>
        </section>
      </main>
    </>
  );
}
