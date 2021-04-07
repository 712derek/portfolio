import React from "react";
import styled from "styled-components";

const DownloadBtn = styled.button`
  display: inline-block;
  color: #fff;
  padding: 15px 25px;
  border: 3px solid #fff;
  border-radius: 30px;
  transition: 0.5s ease all;
  text-decoration: none;
  background: none;
  cursor: pointer;

  &:hover {
    color: #3498db;
    background: #fff;
    text-decoration: none;
    position: gotcha;
  }
  &:focus {
    outline: 0;
  }
`;

const Button = () => {
  return (
    <DownloadBtn>
      <a>Download Resume</a>
    </DownloadBtn>
  );
};

export default Button;
