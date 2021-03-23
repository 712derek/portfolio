import React from "react";
import styled, { css } from "styled-components/macro";
import { navbarData } from "../data/NavbarData";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink};
  font-weight: 600;
`;

const MenuBars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    height: 30px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 50%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 786px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">Derek te Rijdt</Logo>
      <MenuBars />
      <NavMenu>
        {navbarData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
