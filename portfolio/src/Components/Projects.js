import React from "react";
import { projectData } from "../data/ProjectData";

function Projects() {
  return (
    <div className="projects">
      <h2 className="projects__title">Projects</h2>
      <div className="projects__text">
        {projectData.map((item, index) => (
          <p key={index}>{item.text}</p>
        ))}
      </div>
    </div>
  );
}

export default Projects;
