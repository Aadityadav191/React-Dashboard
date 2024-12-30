import React from "react";
import "./Dashboard.css";
import { SlPeople, SlCalculator } from "react-icons/sl";
import {
  FaChartPie,
  FaRegThumbsUp,
  FaRegCalendarCheck,
  FaCcAmazonPay,
} from "react-icons/fa";
import Header from "../../Component/Header/Header";
import Cards from "../../Component/Cards/Cards";
import BarChart from "../../Component/Charts/BarChart/BarChart";
import PieChart from "../../Component/Charts/PieChart/PieChart";
import LineChart from "../../Component/Charts/LineChart/LineChart";
import GBarGraph from "../../Component/Charts/GBarGraph/GBarGraph";
import Doughnutchart from "../../Component/Charts/Doughnutchart/Doughnutchart";
import DashboardTable from "../../Component/Table/DashboardTable/DashboardTable";
import Footer from "../../Component/Footer/Footer";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const isAuthenticated = true; // Replace with actual authentication check

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Header />

      <main className="Dashboard-container">
        <h2>Welcome Aadit Yadav !</h2>
        <p>
          Measure How Fast You're Growing Monthly Recurring Revenue.{" "}
          <a href="/">Learn More</a>
        </p>

        <section className="Cards-Containers">
          <Cards name="Manager" icon={<SlPeople size={30} />} path="/Manager" />
          <Cards
            name="Holidays"
            icon={<FaRegThumbsUp size={30} />}
            path="/Holidays"
          />
          <Cards
            name="Events"
            icon={<FaRegCalendarCheck size={30} />}
            path="/Events"
          />
          <Cards
            name="Payroll"
            icon={<FaCcAmazonPay size={30} />}
            path="/Payroll"
          />
          <Cards
            name="Account"
            icon={<SlCalculator size={30} />}
            path="/Account"
          />
          <Cards name="Report" icon={<FaChartPie size={30} />} path="/Report" />
        </section>

        <section className="dashboard-charts">
          <BarChart />
          <PieChart />
          <LineChart />
        </section>









        <section className="Scharts-container">
          <GBarGraph />

          <main className="Performance" >
            <h4 style={{ margin: "10px" }}> Performance:</h4>
            <p style={{ fontSize: "20px" }}>
              Measure How Fast You're Growing Monthly Recurring Revenue.{" "}
              <a href="/">Learn More</a>
            </p>
            <div class="card__indicator">
              <span class="card__indicator-amount">135</span> Works /
              <span class="card__indicator-percentage">45%</span>
            </div>
            <div class="card__progress">
              <progress max="100" value="40"></progress>
            </div>
          </main>

          <Doughnutchart />
        </section>








        <section>
          <DashboardTable />
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}
