import React from "react";
import { experienceData } from "../data/ExperienceData";
import styled from "styled-components";
import { StyledH2 } from "./titleStyles";

const ExperienceSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 500px;
  max-height: 1080px;
  background-size: cover;
  padding: 15px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 768px) {
    height: 100%;
  }
`;

const ExperienceTitle = styled(StyledH2)``;

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
    margin-bottom: 1rem;
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
    transform: scale(1.4);
    z-index: 999;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    height: 150px;
    width: 250px;
    object-fit: cover;
    border-radius: 5%;
  }
`;

function Experience() {
  return (
    <ExperienceSection id="experience">
      <ExperienceTitle black>Experience</ExperienceTitle>
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
