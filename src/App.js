import React, { useEffect, useState } from "react";
import "./App.css";
import Experience from "./Experience";

const App = () => {
  const experiences = [
    {
      title: "Software Engineer",
      year: "2020",
      description: "I am a software engineer at a startup company.",
    },
    {
      title: "Software Engineer",
      year: "2020",
      description: "I am a software engineer at a startup company.",
    },
    {
      title: "Software Engineer",
      year: "2020",
      description: "I am a software engineer at a startup company.",
    },
    {
      title: "Software Engineer",
      year: "2020",
      description: "I am a software engineer at a startup company.",
    },
    {
      title: "Software Engineer",
      year: "2020",
      description: "I am a software engineer at a startup company.",
    },
  ];

  return (
    <div className="App">
      {/* <div className="top-block"> */}
      {/* <div className="name-and-hello">
          <h1>
            Alexander<br></br>Schiff
          </h1>
        </div> */}
      <div className="experiences">
        <ul>
          {experiences.map((experience) => {
            return (
              <Experience
                title={experience.title}
                year={experience.year}
                description={experience.description}
              />
            );
          })}
        </ul>
      </div>
      {/* </div> */}
    </div>
  );
};

export default App;
