import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import { IoIosPin } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";

const SocialSection = styled.section`
  margin: 0;
  padding: 0.3rem;
  position: fixed;
  z-index: 10;
  display: flex;
  flex-direction: column;
  top: 25%;
  border-radius: 0 5px 5px 0;
  background: rgba(211, 211, 211, 0.5);
  font-size: 1.5rem;
  color: #fff;
  transition: all 0.3s ease-in-out;
  transform: ${({ show }) => (show ? "translateX(0%)" : "translateX(-100%)")};

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

    border-radius: 5px 5px 0 0;
    background: rgba(211, 211, 211, 0.5);
    transform: ${({ show }) => (show ? "translateY(0%)" : "translateY(100%)")};

    svg {
      font-size: 2rem;
      margin-top: 0.5rem;
    }
  }
`;

const SocialBar = () => {
  const [show, setShow] = useState(false);
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
    <SocialSection show={show}>
      <Link
        to={{ pathname: "https://www.linkedin.com/in/derekterijdt/" }}
        target="_blank"
      >
        <AiFillLinkedin />
      </Link>
      <Link href="https://github.com/712derek" target="_blank">
        <AiFillGithub />
      </Link>
      <Link
        to={{ pathname: "https://www.instagram.com/712_derek/" }}
        target="_blank"
      >
        <AiFillInstagram />
      </Link>
      <Link
        to={{
          pathname:
            "https://www.google.com/maps/place/Bosni%C3%ABstraat,+1060+Sint-Gillis/@50.8277032,4.3348366,17z/data=!3m1!4b1!4m5!3m4!1s0x47c3c4420043693b:0xb7df8abd84afb53a!8m2!3d50.8277032!4d4.3370253",
        }}
        target="_blank"
      >
        <IoIosPin />
      </Link>
      <ScrollLink to="contact" smooth={true} duration={750}>
        <AiFillMail />
      </ScrollLink>
    </SocialSection>
  );
};

export default SocialBar;
