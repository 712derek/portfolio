import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components/macro";
import { navbarData } from "../data/NavbarData";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { animateScroll as scroll } from "react-scroll";

const appear = keyframes`
  from{
    transform: translateY(-100%);
  }
  to{
    transform: translateY(0%);
  }
`;

const Nav = styled.nav`
  height: ${({ navbar }) => (navbar ? "30px" : "60px")};
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  animation: ${appear} 0.5s ease-out;
  transition: all 0.5s ease-in-out;
  background: ${({ navbar }) => (navbar ? "rgba(211, 211, 211, 0.9)" : "")};

  @media screen and (max-width: 768px) {
    background: none;
  }
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.3s cubic-bezier(0.175, 0.85, 0.3, 1.275);

  &:hover {
    transform: scale(1.2);
    text-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
  }
`;

const Logo = styled(Link)`
  ${NavLink};
  font-weight: 600;

  @media screen and (max-width: 786px) {
    display: none;
  }
`;

const MenuBars = styled(AiOutlineMenu)`
  display: none;
  color: #fff;
  text-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);

  transition: transform 0.3s cubic-bezier(0.175, 0.85, 0.3, 1.275);

  @media screen and (max-width: 768px) {
    color: rgba(0, 0, 0, 0.9);
    text-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  }

  &:hover {
    transform: scale(1.2);
    text-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
  }

  @media screen and (max-width: 768px) {
    display: block;
    height: 30px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 1;
    right: 0;
    margin-right: 1rem;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -2rem;

  @media screen and (max-width: 786px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
  margin-right: 1rem;
`;

const Navbar = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 500) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <Nav navbar={navbar}>
      <Logo onClick={() => scroll.scrollToTop()}>Derek te Rijdt</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {navbarData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index} smooth={true} duration={750}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
