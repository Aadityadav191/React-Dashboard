import React, { useState, useRef } from "react";
import "./MsgDropdown.css";
import { SlEnvolope } from "react-icons/sl";
import { FaUserAlt } from "react-icons/fa";

export default function MsgDropdown() {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <>
      <div className="Msg-dropdown" ref={dropdownRef}>
        <div className="Msg-icon" onClick={toggleDropdown}>
          <SlEnvolope />
        </div>
        {isOpen && (
          <div className="Msgdropdown-menu">
            <ul>
              <li>
                <FaUserAlt style={{ marginRight: "8px" }} />
                <text>Pramit Bakhrel</text>{" "}
              </li>
              <li>
                <FaUserAlt style={{ marginRight: "8px" }} />{" "}
                <text>Aadit Yadav </text>
              </li>
              <li>
                <FaUserAlt style={{ marginRight: "8px" }} />{" "}
                <text>Avash Chaudhary</text>
              </li>
              <li>
                <FaUserAlt style={{ marginRight: "8px" }} />{" "}
                <text>Nischal Mainali</text>
              </li>

            </ul>
          </div>
        )}
      </div>
    </>
  );
}
