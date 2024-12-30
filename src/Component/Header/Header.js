import React from "react";
import "./Header.css";
import Dropdown from "./../../Component/Dropdown/Dropdown";
import { useLocation } from "react-router-dom";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import MsgDropdown from "../MsgDropdown/MsgDropdown";
import BellDropdown from "../BellDropdown/BellDropdown";


export default function Header() {
  const location = useLocation();
  // Map paths to page names
  const getPageName = () => {
    const pathMap = {
      "/": "HR Dashboard",
      "/Dashboard": "HR Dashboard",
      "/Manager": "Manager",
      "/Department": "Department",
      "/Employee": "Employee",
      "/Activities": "Activities",
      "/Holidays": "Holidays",
      "/Events": "Events",
      "/Payroll": "Payroll",
      "/Account": "Account",
      "/Report": "Report",
    };

    // Return the page name based on the current path or a default
    return pathMap[location.pathname] || "Page Not Found";
  };

  return (
    <>
      <header className="Header">
      
        <section className="LeftHeader">
          <h4> {getPageName()}</h4>

          <div>
            <select className="dropdown-year">
              {/* <option value="" disabled selected>Year</option> */}
              <option value="option2">Year</option>
              <option value="option1">Month</option>
              <option value="option3">Week</option>
            </select>
          </div>

          <div>
            <input type="text" placeholder="Search..." />
          </div>
        </section>

        <section className="rightHeader">
          <Dropdown title="Language" />
          <Dropdown title="Reports" />
          <Dropdown title="Projects" />

          <div className="rightHeader-icons">
          
            <MsgDropdown/>
            <BellDropdown/>
            <ProfileDropdown/>

          </div>

        </section>

      </header>
      <hr />
    </>
  );
}
