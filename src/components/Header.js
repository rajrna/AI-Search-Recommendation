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
          className="logo animated-logo"
        />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding-top: 11rem;
  padding: 0 4.8rem;
  height: 10rem;
  background: rgb(247, 249, 252);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed; /* Make it fixed */
  top: 0; /* Stick to the top */
  left: 0;
  right: 0;
  z-index: 1000; /* Ensure it stays above other elements */

  .logo {
    width: 20rem;
    height: 5rem;
  }

  .animated-logo {
    animation: floatLogo 3s ease-in-out infinite;
    transition: transform 0.3s ease;
  }

  @keyframes floatLogo {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-6px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export default Header;
