import React from "react";
import { experienceData } from "../data/ExperienceData";

function Experience() {
  return (
    <div className="experience">
      <h2 className="experience__title">Experience</h2>
      <div className="experience__text">
        {experienceData.map((item, index) => (
          <p key={index}>{item.text}</p>
        ))}
      </div>
    </div>
  );
}

export default Experience;
