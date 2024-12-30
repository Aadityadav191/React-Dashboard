import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Department from "./Pages/Department/Department";
import Employee from "./Pages/Employee/Employee";
import Activities from "./Pages/Activities/Activities";
import Manager from "./Pages/Manager/Manager";
import SideBar from "./Component/SideBar/SideBar";
import Holidays from "./Pages/Holidays/Holidays";
import Events from "./Pages/Events/Events";
import Payroll from "./Pages/Payroll/Payroll";
import Account from "./Pages/Account/Account";
import Report from "./Pages/Report/Report";
import Login from "./Pages/Login/Login";



function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Dashboard" element={ <SideBar><Dashboard /></SideBar>}/>
            <Route path="/Manager" element={ <SideBar><Manager /></SideBar>} />
            <Route path="/Department" element={ <SideBar><Department /></SideBar>} />
            <Route path="/Employee" element={ <SideBar><Employee /></SideBar>} />
            <Route path="/Activities" element={ <SideBar><Activities /></SideBar>} />
            <Route path="/Holidays" element={ <SideBar><Holidays /></SideBar>} />
            <Route path="/Events" element={ <SideBar><Events /></SideBar>} />
            <Route path="/Payroll" element={ <SideBar><Payroll /></SideBar>} />
            <Route path="/Account" element={ <SideBar><Account /></SideBar>} />
            <Route path="/Report" element={ <SideBar><Report /></SideBar>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
