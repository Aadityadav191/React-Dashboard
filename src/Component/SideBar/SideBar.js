// import React from 'react'
import './SideBar.css';
import React, { useState } from 'react';
import { SlPeople } from "react-icons/sl";
import {FaTh,FaBars,FaRegChartBar, FaFile, FaCommentAlt, FaShoppingBag,FaBed,FaRegCalendarCheck ,FaMoneyCheckAlt,FaCcAmazonPay} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { AiFillMacCommand } from "react-icons/ai";


export default function SideBar({children}) {

  const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/Dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },

        {
            path:"/Manager",
            name:"Manager",
            icon:<SlPeople/>
        },
        {
            path:"/Department",
            name:"Department",
            icon:<FaRegChartBar/>
        },
        {
            path:"/Employee",
            name:"Employee",
            icon:<FaCommentAlt/>
        },
        {
            path:"/Activities",
            name:"Activities",
            icon:<FaShoppingBag/>
        },
        {
            path:"/Holidays",
            name:"Holidays",
            icon:<FaBed/>
        },
        {
            path:"/Events",
            name:"Events",
            icon:<FaRegCalendarCheck/>
        },
        {
            path:"/Payroll",
            name:"Payroll",
            icon:<FaCcAmazonPay/>
        },
        {
            path:"/Account",
            name:"Account",
            icon:<FaMoneyCheckAlt/>
        },
        {
            path:"/Report",
            name:"Report",
            icon:<FaFile/>
        }
    ]


  return (
    <>   
    
    <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"> <a href='/'> <AiFillMacCommand size={35} style={{borderRadius: "100%"}}/></a> </h1>
                   <div style={{marginLeft: isOpen ? "110px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main className='slidebar'>{children}</main>
        </div>
   
    </>
  )
}
