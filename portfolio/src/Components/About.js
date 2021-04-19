import React from "react";
import { aboutData } from "../data/AboutData";
// import "../Style/About.css";
import styled from "styled-components";
import ImageOne from "../images/portrait.png";

const AboutSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 500px;
  max-height: 1080px;
  /* background: rgb(136, 136, 136); */
  background: rgb(211, 211, 211);
  background-size: cover !important;
  padding: 15px;
  overflow: hidden !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    height: 110vh;
  }
`;

const AboutTitle = styled.div`
  display: flex;
  align-items: flex-start;
  color: white;
  padding: 0 1rem;
  margin-bottom: 2rem;
  text-align: center;
  transition: transform 0.3s cubic-bezier(0.175, 0.85, 0.3, 1.275);

  &:hover {
    transform: scale(1.5);
    text-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
  }
`;

const AboutInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    img {
      margin-bottom: 1rem;
    }
  }
`;

const AboutImage = styled.img`
  width: 175px;
  border-radius: 50%;
  margin: 0 2rem;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s cubic-bezier(0.175, 0.85, 0.3, 1.275);

  &:hover {
    transform: scale(1.75);
  }
`;

const AboutText = styled.p`
  color: white;
  text-align: left;
  width: 60%;

  @media screen and (max-width: 768px) {
    text-align: justify;
  }

  p {
    margin-bottom: 1rem;
  }
`;

function About() {
  return (
    <AboutSection id="about">
      <AboutTitle>
        <h2>About Me</h2>
      </AboutTitle>
      <AboutInfo>
        <AboutImage src={ImageOne} atl="portrait" />
        <AboutText>
          {aboutData.map((item, index) => (
            <p key={index}>{item.text}</p>
          ))}
        </AboutText>
      </AboutInfo>
    </AboutSection>
  );
}

export default About;
