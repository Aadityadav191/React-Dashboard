import React, { useState, useRef } from "react";
import './BellDropdown.css';
import { FaBell} from "react-icons/fa";




export default function BellDropdown() {
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
       <div className="Bell-dropdown" ref={dropdownRef}>
      <div className="Bell-icon" onClick={toggleDropdown}>
      <FaBell/>
      </div>
      {isOpen && (
        <div className="Belldropdown-menu">
          <ul>
            <li>Contrary to popular belief, Lorem Ipsum is not simply random text</li>
            <li>Contrary to popular belief, Lorem Ipsum </li>
            <li>Contrary to popular belief, Lorem Ipsum is not simply </li>
            <li>Contrary to popular belief, Lorem Ipsum is not simply random text</li>
            <li>Contrary to popular belief, Lorem Ipsum </li>
            <li>Contrary to popular belief, Lorem Ipsum is not simply </li>
          </ul>
        </div>
      )}
    </div>
    </>
  )
}
