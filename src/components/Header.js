import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img
          src="./images/logo-black-transparent.png"
          alt="logo"
          className="logo"
        />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background: rgb(247, 249, 252);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    width: 20rem;
    height: 5rem;
  }
`;

export default Header;
