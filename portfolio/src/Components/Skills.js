import React from "react";
import styled, { css } from "styled-components";
import {
  skillDataWebDev,
  skillDataTools,
  skillDataLanguages,
} from "../data/SkillsData";
import img from "../images/freyr.jpeg";

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
`;

const SkillTitle = styled.div`
  margin-bottom: 0.5rem;
  text-align: center;
  color: white;
  transition: transform 0.3s cubic-bezier(0.175, 0.85, 0.3, 1.275);

  &:hover {
    transform: scale(1.5);
    text-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  }
`;

const ItemWrapper = styled.div`
  width: 70vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const SkillItems = styled.ul`
  margin: 1rem 1rem;
  padding: 1rem 2rem;
  border-radius: 3px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  color: #fff;
  background: rgb(211, 211, 211);
  text-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
`;

const Skills = () => {
  return (
    <SkillsWrapper id="skills">
      <SkillTitle>
        <h2>Skills</h2>
      </SkillTitle>
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
