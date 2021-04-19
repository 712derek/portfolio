import React from "react";
import styled, { keyframes } from "styled-components";
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
  height: 25vh;
  padding: 1rem 2rem;
  background: rgb(0, 0, 0);

  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  animation: ${appear} 0.3s ease-out;

  @media screen and (max-width: 768px) {
    height: 120px;
  }
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
  </FooterSection>
);

export default Footer;
