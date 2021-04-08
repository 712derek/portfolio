import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { IoIosPin, IoIosCall } from "react-icons/io";

const appear = keyframes`
  from{
    transform: translateX(-100%);
  }
  to{
    transform: translateX(0%);
  }
`;

const appearSmall = keyframes`
from{
    transform: translateY(100%);
  }
  to{
    transform: translateY(0%);
  }
`;

const SocialSection = styled.section`
  margin: 0;
  padding: 0.3rem;
  position: fixed;
  z-index: 10;
  display: flex;
  flex-direction: column;
  top: 20%;
  border-radius: 0 5px 5px 0;
  /* background: rgba(0, 0, 0, 0.2); */
  background: rgba(211, 211, 211, 0.5);

  font-size: 1.5rem;
  color: #fff;
  animation: ${appear} 0.3s ease-out;

  a {
    color: #fff;
  }

  svg {
    transition: transform 0.3s cubic-bezier(0.175, 0.85, 0.3, 1.275);
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
      text-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
      color: rgb(96, 219, 249);
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 10;
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    animation: ${appearSmall} 0.3s ease-out;
    border-radius: 5px 5px 0 0;
    /* background: rgba(0, 0, 0, 0.8); */
    background: rgba(211, 211, 211, 0.5);

    svg {
      font-size: 2rem;
      margin-top: 0.5rem;
    }
  }
`;

const SocialBar = () => {
  const [show, setShow] = useState(true);
  const controlSocialBar = () => {
    if (window.scrollY > 500) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlSocialBar);
    return () => {
      window.removeEventListener("scroll", controlSocialBar);
    };
  }, []);

  return (
    <>
      {show ? (
        <SocialSection>
          <a href="https://www.linkedin.com/in/derekterijdt/" target="_blank">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/712derek" target="_blank">
            <AiFillGithub />
          </a>
          <a
            href="https://www.google.com/maps/place/Bosni%C3%ABstraat+56,+1060+Sint-Gillis/@50.827403,4.3354008,17z/data=!3m1!4b1!4m5!3m4!1s0x47c3c44208e85cb9:0x204c02054305c22f!8m2!3d50.8273996!4d4.3375895"
            target="_blank"
          >
            <IoIosPin />
          </a>
          <a href="mailto:derekterijdt@gmail.com">
            <AiFillMail />
          </a>
          <a href="tel:0032485988001">
            <IoIosCall />
          </a>
        </SocialSection>
      ) : null}
    </>
  );
};

export default SocialBar;
