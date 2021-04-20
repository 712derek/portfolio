import React from "react";
import styled, { keyframes } from "styled-components";

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }
    
    to{
        transform: rotate(360deg);
    }
`;

const appear = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const SpinnerContainer = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
  animation: ${appear} 0.5s ease-in;
`;

const SpinnerIcon = styled.div`
  display: flex;
  height: 250px;
  width: 250px;
  /* border: 3px solid rgba(96, 219, 249, 0.5); */
  /* box-shadow: 0 2px 5px rgba(96, 219, 249, 0.75); */
  box-shadow: 0 2px 5px white;
  border-radius: 50%;
  border-top: none;
  border-right: none;
  animation: ${rotation} 1s linear infinite;
`;

const Spinner = () => {
  return (
    <div>
      <SpinnerContainer>
        <SpinnerIcon />
      </SpinnerContainer>
    </div>
  );
};

export default Spinner;
