import React from "react";
import styled from "styled-components";
import {
  skillDataWebDev,
  skillDataTools,
  skillDataLanguages,
} from "../data/SkillsData";
import img from "../images/freyr.jpeg";
import { StyledH2 } from "./titleStyles";

const SkillsWrapper = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: url(${img}) rgba(0, 0, 0, 0.6);
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-position: 15% 10%;

  @media screen and (max-width: 768px) {
    height: 100vh;
    background-position-x: -750px;
    background-position-y: bottom 10px;
  }
`;

const SkillTitle = styled(StyledH2)``;

const ItemWrapper = styled.div`
  width: 70vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const SkillItems = styled.ul`
  margin: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 3px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  color: #fff;
  background: rgb(211, 211, 211);
  text-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 768px) {
    margin: 0.5rem;
    padding: 0.5rem 1rem;
  }
`;

const Skills = () => {
  return (
    <SkillsWrapper id="skills">
      {/* <SkillTitle>Skills</SkillTitle> */}
      <ItemWrapper>
        {skillDataWebDev.map((item, index) => (
          <SkillItems key={index}>{item.skill}</SkillItems>
        ))}
      </ItemWrapper>
      <ItemWrapper>
        {skillDataTools.map((item, index) => (
          <SkillItems key={index}>{item.skill}</SkillItems>
        ))}
      </ItemWrapper>
      <ItemWrapper>
        {skillDataLanguages.map((item, index) => (
          <SkillItems key={index}>{item.skill}</SkillItems>
        ))}
      </ItemWrapper>
    </SkillsWrapper>
  );
};

export default Skills;
