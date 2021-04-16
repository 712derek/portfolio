import React, { useState, useRef, useEffect } from "react";
import { projectData } from "../data/ProjectData";
import styled, { css, keyframes } from "styled-components";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const ProjectSection = styled.section`
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
  background: rgb(211, 211, 211);

  @media (max-width: 768px) {
    height: 100%;
  }
`;

const ProjectTitle = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  text-align: center;
  color: white;
  transition: transform 0.3s cubic-bezier(0.175, 0.85, 0.3, 1.275);

  &:hover {
    transform: scale(1.5);
    text-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectWrapper = styled.div``;

const ProjectObject = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

const ProjectText = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 3rem;
  width: 300px;
  color: white;
`;

const ProjectImage = styled.img`
  height: 400px;
  margin: 0 2rem;
  object-fit: cover;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

const ButtonWrapper = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-around;
`;

const ArrowStyle = css`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.175, 0.85, 0.3, 1.275);

  &:hover {
    transform: scale(1.5);
    color: rgba(96, 219, 249, 0.8);
  }
`;

const ArrowLeft = styled(AiFillCaretLeft)`
  ${ArrowStyle}
`;

const ArrowRight = styled(AiFillCaretRight)`
  ${ArrowStyle}
`;

function Education({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };
    if (!isHovering) timeout.current = setTimeout(nextSlide, 1000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length, isHovering]);

  function handleMouseEnter(e) {
    // stop the timeout function to be set
    setIsHovering(true);
    // clear any existing timeout functions
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  }
  function handleMouseLeave(e) {
    // to trigger the useeffect function
    setIsHovering(false);
  }

  // Slider Buttons
  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);

    console.log(current);
  };
  const prefSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);

    console.log(current);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <ProjectSection>
      <ProjectTitle>
        <h2>Projects</h2>
      </ProjectTitle>
      <ProjectWrapper
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {projectData.map((item, index) => (
          <ProjectObject key={index}>
            {index === current && (
              <>
                <ProjectText>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <p>{item.skill}</p>
                </ProjectText>
                <ProjectImage src={item.image} />
              </>
            )}
          </ProjectObject>
        ))}
      </ProjectWrapper>
      <ButtonWrapper>
        <ArrowLeft onClick={prefSlide} />
        <ArrowRight onClick={nextSlide} />
      </ButtonWrapper>
    </ProjectSection>
  );
}

export default Education;
