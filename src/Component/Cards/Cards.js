import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";

export default function Cards(props) {
  return (
    <>
      <Link to={props.path}>
        <div className="card">
          <div className="icon">{props.icon}</div>
          <p> {props.name}</p>
        </div>
      </Link>
    </>
  );
}
