import React, { useState, useRef } from "react";
import "./ProfileDropdown.css"; // Import your styles
import {  FaUserAlt } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import { CiLocationArrow1 } from "react-icons/ci";
import { GoSignOut } from "react-icons/go";
import { useNavigate } from "react-router-dom"; // Import useNavigate








const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  // Close dropdown if clicked outside
  const dropdownRef = useRef(null);
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    navigate("/Login"); // Navigate to the login page
  };

  return (
    <div className="profile-dropdown" ref={dropdownRef}>
      <div className="profile-icon" onClick={toggleDropdown}>
      <FaUserAlt/>
      </div>
      {isOpen && (
        <div className="Profiledropdown-menu">
          <ul>
            <li><FaUserAlt style={{ marginRight: "8px" }}/>Profile</li>
            <li><CiSettings style={{ marginRight: "8px" }}/>Settings</li>
            <li><AiOutlineMessage style={{ marginRight: "8px" }}/>Inbox</li>
            <li><CiLocationArrow1 style={{ marginRight: "8px" }}/>Message</li>
            <li onClick={handleLogout}><GoSignOut style={{ marginRight: "8px" }}/>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
