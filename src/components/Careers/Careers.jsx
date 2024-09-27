import React from "react";
import "./Careers.css";

const Careers = () => {
  return (
    <div className="careers">
      <h1 className="careers-title">Careers</h1>
      <div className="careers-link">
        <ul className="careers-left-link">
          <li>Project Manager</li>
          <li>Brand Designer</li>
          <li>Account Director</li>
          <li>3D Designer</li>
        </ul>
        <ul className="careers-right-link">
          <li>Amsterdam</li>
          <li>Remote</li>
          <li>Remote</li>
          <li>Amsterdam</li>
        </ul>
      </div>
    </div>
  );
};

export default Careers;
