import React from "react";
import styled from "styled-components";
import { navbarData } from "../data/NavbarData";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const DropdownContainer = styled.div`
  position: fixed;
  z-index: ${({ isOpen }) => (isOpen ? "999" : "0")};
  /* z-index: 999; */
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100")};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const CloseIcon = styled(AiOutlineMenu)`
  color: #000d1a;
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: #fff;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.175, 0.85, 0.3, 1.275);

  &:hover {
    transform: scale(1.5);
    z-index: 999;
  }
`;

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div>
      <DropdownContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <DropdownWrapper>
          <DropdownMenu>
            {navbarData.map((item, index) => (
              <DropdownLink to={item.link} key={index}>
                {item.title}
              </DropdownLink>
            ))}
          </DropdownMenu>
        </DropdownWrapper>
      </DropdownContainer>
    </div>
  );
};

export default Dropdown;
