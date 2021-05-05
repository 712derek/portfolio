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
  justify-content: space-evenly;
  height: 20vh;
  padding: 1rem 2rem;
  background: rgb(0, 0, 0);

  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  animation: ${appear} 0.3s ease-out;

  @media screen and (max-width: 768px) {
  }
`;

const FooterInfo = styled.div`
  margin: 2rem 2rem;
  width: 300px;
  color: #fff;
  text-align: center;
`;

const LinkToTop = styled.i`
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 10;
  bottom: 15px;
  color: #fff;
  font-size: 2rem;

  svg {
    cursor: pointer;
    animation: ${pulse} 1.5s linear infinite;

    &:hover {
      color: rgba(96, 219, 249);
    }
  }
`;

const Footer = () => (
  <FooterSection>
    <FooterInfo>
      <h6>Derek te Rijdt</h6>
      <h6>Rue de Bosnie 56</h6>
      <h6>1060, Saint-Gilles - Brussels</h6>
    </FooterInfo>
    <LinkToTop>
      <IoIosArrowDropup onClick={() => scroll.scrollToTop()} />
    </LinkToTop>
    <FooterInfo>
      <h6>derekterijdt@gmail.com</h6>
      <h6>+32 4 85 988001</h6>
    </FooterInfo>
  </FooterSection>
);

export default Footer;
