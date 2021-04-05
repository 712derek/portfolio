import React from "react";
import styled, { keyframes } from "styled-components";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";

const appear = keyframes`
  from{
    transform: translateY(100%);
  }
  to{
    transform: translateY(0%);
  }
`;

const FooterSection = styled.div`
  display: flex;
  justify-content: flex-end;
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
`;

const Footer = () => (
  <FooterSection>
    <SocialLinks>
      <AiFillLinkedin to="https://www.linkedin.com/in/derekterijdt/" />
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
