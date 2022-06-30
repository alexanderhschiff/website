import React, { useState } from "react";
import "./App.css";

const Experience = ({ title, year, description, open }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="experience">
      <div className="item">
        <h3
          className="title"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {title} {isOpen ? "<" : ">"}
        </h3>
        <h3 className="year">{year}</h3>
      </div>
      {isOpen && <p className="description">{description}</p>}
      {/* <hr></hr> */}
    </div>
  );
};

export default Experience;
