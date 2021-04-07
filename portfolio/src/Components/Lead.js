import React from "react";
import styled, { keyframes } from "styled-components";
import "../Style/Lead.css";
import "../Style/Button.css";
import { IoIosArrowDropdown } from "react-icons/io";
import img from "../images/lead_bg2.jpeg";
import Button from "./Button";
import cv from "../docs/CV_Derek.pdf";

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

const LeadSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 500px;
  max-height: 1080px;
  background: url(${img});
  background-size: cover !important;
  padding: 15px;
  overflow: hidden !important;
`;

const LeadContent = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  margin: 0;

  h1 {
    color: #fff;
    font-weight: 700;
    font-size: 5rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    line-height: 0.9em;
    margin-bottom: 0.5rem;
  }

  h2 {
    /* color: #a0cfee; */
    color: rgba(96, 219, 249, 1);
    font-weight: 500;
    font-size: 2.25em;
    margin-bottom: 1rem;
  }
`;

const LeadOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const LeadDown = styled.i`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 10;
  bottom: 15px;
  color: #fff;
  font-size: 2rem;
  animation: ${pulse} 1.5s linear infinite;

  svg {
    cursor: pointer;
    &:hover {
      color: rgba(96, 219, 249, 0.8);
    }
  }
`;

const Lead = () => {
  return (
    <LeadSection>
      <LeadContent>
        <h1>Derek te Rijdt</h1>
        <h2>React Developer</h2>
        <a href={cv} target="_blank">
          <Button />
        </a>
      </LeadContent>
      <LeadOverlay />
      <LeadDown>
        <IoIosArrowDropdown />
      </LeadDown>
    </LeadSection>
  );
};

export default Lead;
