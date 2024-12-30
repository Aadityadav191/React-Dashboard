import React from "react";
import "./Dropdown.css";
import { AiFillCaretDown } from "react-icons/ai";

export default function DropDown(props) {
  return (
    <>
      <>
        <div className="menu">
          <div className="item">
            <span className="link">
              <span> {props.title} </span>
              <AiFillCaretDown />
            </span>
            <div className="submenu">
              <div className="submenu-item">
                <a href="/" className="submenu-link">
                  {" "}
                  Development{" "}
                </a>
              </div>
              <div className="submenu-item">
                <a href="/" className="submenu-link">
                  {" "}
                  Design{" "}
                </a>
              </div>
              <div className="submenu-item">
                <a href="/" className="submenu-link">
                  {" "}
                  Marketing{" "}
                </a>
              </div>
              <div className="submenu-item">
                <a href="/" className="submenu-link">
                  {" "}
                  SEO{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
