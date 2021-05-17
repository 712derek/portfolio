import React, { useState, useRef, useEffect } from "react";
import { projectData } from "../data/ProjectData";
import styled, { css } from "styled-components";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { StyledH2 } from "./titleStyles";

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
    height: 100vh;
  }
`;

const ProjectTitle = styled(StyledH2)`
  @media (max-width: 768px) {
    position: absolute;
    top: 5vh;
  }
`;

const ProjectWrapper = styled.div``;

const ProjectObject = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    margin: 0;
  }
`;

const ProjectText = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 3rem;
  width: 300px;
  max-height: 400px;
  color: white;

  a {
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.15em;
    transition: color 0.3s;
  }
  a:hover {
    color: rgba(96, 219, 249, 0.8);
  }

  @media (max-width: 768px) {
    text-align: justify;
    overflow: scroll;
    width: 90vw;
    position: absolute;
    top: 50vh;

    h3,
    a {
      text-align: center;
    }
  }
`;

const ProjectImage = styled.img`
  max-height: 400px;
  max-width: 600px;
  margin: 0 2rem;
  object-fit: cover;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 100vw;
    border-radius: 0;
    align-items: flex-start;
    position: absolute;
    top: 12vh;
  }
`;

const ButtonWrapper = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    position: absolute;
    bottom: 1vh;
  }
`;

const ArrowStyle = css`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  color: #fff;
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
    if (!isHovering) timeout.current = setTimeout(nextSlide, 3000);

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
    <ProjectSection id="projects">
      <ProjectTitle>Projects</ProjectTitle>
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
                  <a href={item.link} target="_blank">
                    <p>Link to {item.page}</p>
                  </a>
                </ProjectText>
                <ProjectImage src={item.image} />
              </>
            )}
          </ProjectObject>
        ))}
      </ProjectWrapper>
      <ButtonWrapper>
        <ArrowLeft
          onClick={prefSlide}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <ArrowRight
          onClick={nextSlide}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </ButtonWrapper>
    </ProjectSection>
  );
}

export default Education;
