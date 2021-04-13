import React, { useState, useRef, useEffect } from "react";
import { educationData } from "../data/EducationData";
import styled, { css } from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const ExperienceSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 500px;
  max-height: 1080px;
  background-size: cover !important;
  /* background: rgb(211, 211, 211); */
  padding: 15px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
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
  margin-bottom: 2rem;

  border: 1px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0)
  );

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

const ExperienceText = styled.div`
  height: 200px;
  width: 400px;
  margin-left: 2rem;
  overflow: scroll;
  cursor: ns-resize;

  h3 {
    margin: 1rem 0;
  }
  p {
    margin: 0.5rem 0;
  }
`;

const ExperienceImage = styled.img`
  height: 200px;
  min-width: 270px;

  object-fit: cover;
  border-radius: 5px 0 0 5px;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

function Education() {
  return (
    <ExperienceSection>
      <ExperienceTitle>
        <h2>Education</h2>
      </ExperienceTitle>
      <ExperienceObjects>
        {educationData.map((item, index) => (
          <ExperienceObject key={index}>
            <ExperienceImage src={item.image} />

            <ExperienceText>
              <h3>{item.title}</h3>
              <p>
                {item.location}, {item.year}
              </p>
              <p>{item.degree}</p>
              <p>{item.text}</p>
            </ExperienceText>
          </ExperienceObject>
        ))}
      </ExperienceObjects>
    </ExperienceSection>
  );
}

export default Education;
