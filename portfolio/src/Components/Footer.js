import React from "react";
import styled, { keyframes } from "styled-components";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import { IoIosArrowDropup } from "react-icons/io";
import { animateScroll as scroll } from "react-scroll";

const appear = keyframes`
  from{
    transform: translateY(100%);
  }
  to{
    transform: translateY(0%);
  }
`;

const pulse = keyframes`
  0%{
    transform: scale(1);
  }
  40%{
    transform: scale(1.2);
  }
  100%{
    transform: scale(1);
  }
`;

const FooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  margin-top: 1rem;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.8);

  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  animation: ${appear} 0.3s ease-out;
`;

const SocialLinks = styled.div`
  display: flex;
  font-size: 2rem;
  cursor: pointer;
  color: white;

  svg {
    margin-right: 0.5rem;
    &:hover {
      color: rgba(96, 219, 249, 0.8);
    }
  }
`;

const Phone = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 1.2rem;
  }
`;

const LinkToTop = styled(SocialLinks)`
  color: white;
  animation: ${pulse} 1.5s linear infinite;
`;

const Footer = () => (
  <FooterSection>
    <LinkToTop>
      <IoIosArrowDropup onClick={() => scroll.scrollToTop()} />
    </LinkToTop>
    <SocialLinks>
      <AiFillLinkedin href="https://www.linkedin.com/in/derekterijdt/" />
      <AiFillGithub />
      <AiFillMail />
      <Phone>
        <AiFillPhone />
        <p>04 85 98 8001</p>
      </Phone>
    </SocialLinks>
  </FooterSection>
);

export default Footer;
