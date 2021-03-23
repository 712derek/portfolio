import React from "react";
import { aboutData } from "../data/AboutData";
import "../Style/About.css";

function About() {
  return (
    <div className="about">
      <h2 className="about__title">About Me</h2>
      <div className="about__text">
        {aboutData.map((item, index) => (
          <p key={index}>{item.text}</p>
        ))}
      </div>
    </div>
  );
}

export default About;
