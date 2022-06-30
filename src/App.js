import React, { useEffect, useState } from "react";
import "./App.css";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Experience from "./Experience";

const App = () => {
  const work_experiences = [
    {
      title: "Microsoft",
      year: "2022",
      description:
        "I am working at Microsoft as a Product Manager Intern, championing the sustainability efforts of the SiGMa Media Team.",
    },
    {
      title: "MizMaa Ventures",
      year: "2021",
      description: "I am a software engineer at a startup company.",
    },
    {
      title: "IBM",
      year: "2020",
      description: "I am a software engineer at a startup company.",
    },
    {
      title: "Ring",
      year: "2017",
      description: "I am a software engineer at a startup company.",
    },
  ];

  const other_experiences = [
    {
      title: "iOS App Shoo",
      year: "2021",
      description: "I am a software engineer at a startup company.",
    },
    {
      title: "a&b granola",
      year: "2012-19",
      description: "I am a software engineer at a startup company.",
    },
    {
      title: "Coding School",
      year: "2016-19",
      description: "I am a software engineer at a startup company.",
    },
  ];

  return (
    <div className="App">
      <div className="name-and-hello">
        <h1>
          <RoughNotation
            type="bracket"
            multiline={false}
            padding={10}
            strokeWidth={8}
            brackets={["left", "right"]}
            show={true}
            color={["#ECB02A"]}
          >
            Alexander
            <br></br>
            Schiff
          </RoughNotation>
        </h1>
      </div>
      <div className="experiences">
        <ul>
          {work_experiences.map((experience) => {
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

      <br></br>
      <br></br>
      <br></br>

      <div className="experiences">
        <ul>
          {other_experiences.map((experience) => {
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
      <div className="bottom"></div>
    </div>
  );
};

export default App;
