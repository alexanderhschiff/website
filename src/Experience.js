import React, { useEffect, useState } from "react";
import "./App.css";

const Experience = ({ title, year, description }) => {
  return (
    <div className="experience">
      <div className="item">
        <h3 className="title">{title}</h3>
        <h3 className="year">{year}</h3>
      </div>
      <hr></hr>
    </div>
  );
};

export default Experience;
