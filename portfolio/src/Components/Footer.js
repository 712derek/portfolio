import React from "react";
import styled, { keyframes } from "styled-components";

const appear = keyframes`
  from{
    transform: translateY(100%);
  }
  to{
    transform: translateY(0%);
  }
`;

const FooterSection = styled.div`
  height: 60px;
  margin-top: 1rem;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.8);
  color: rgba(96, 219, 249, 1);

  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  animation: ${appear} 0.3s ease-out;
`;

const Footer = () => (
  <FooterSection>
    <p>This is some footer text</p>
  </FooterSection>
);

export default Footer;
