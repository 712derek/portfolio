import React from "react";
import { experienceData } from "../data/ExperienceData";
import styled from "styled-components";

const ExperienceSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 500px;
  max-height: 1080px;
  background-size: cover !important;
  padding: 15px;
  overflow: hidden !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 768px) {
    height: 1500px;
  }
`;

const ExperienceTitle = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  text-align: center;
  transition: transform 0.3s cubic-bezier(0.175, 0.85, 0.3, 1.275);

  &:hover {
    transform: scale(1.5);
    text-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  }
`;

const ExperienceObjects = styled.div``;

const ExperienceObject = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

const ExperienceText = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ExperienceImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin-right: 2rem;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s cubic-bezier(0.175, 0.85, 0.3, 1.275);

  &:hover {
    transform: scale(1.5);
    z-index: 999;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    margin-bottom: 1rem;
  }
`;

function Experience() {
  return (
    <ExperienceSection>
      <ExperienceTitle>
        <h2>Experience</h2>
      </ExperienceTitle>
      <ExperienceObjects>
        {experienceData.map((item, index) => (
          <ExperienceObject key={index}>
            <ExperienceImage src={item.image} />
            <ExperienceText>
              <h3>{item.title}</h3>
              <p>
                {item.location}, {item.year}
              </p>
              <p>{item.text}</p>
            </ExperienceText>
          </ExperienceObject>
        ))}
      </ExperienceObjects>
    </ExperienceSection>
  );
}

export default Experience;
