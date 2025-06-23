import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData, onFindClick }) => {
  const { name } = myData;

  const [find, setFindClick] = useState();

  const handleFindClick = () => {
    setFindClick(!find);
    if (!find && onFindClick) {
      onFindClick();
    }
  };

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="hero-section-data">
          <p className="intro-data">Welcome to</p>
          <h1>{name}</h1>
          <p className="description">
            Discover amazing products that match your style and personality.
            Quality and innovation at your fingertips.
          </p>

          <Button className="find-btn" onClick={handleFindClick}>
            Find Now
          </Button>
        </div>

        <div className="hero-section-image">
          <figure>
            <img
              src="images/hero.png"
              alt="hero-section-photo"
              className="img-style"
            />
          </figure>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;
  background: linear-gradient(180deg, rgb(247, 249, 252), #fff);

  .hero-section-data {
    display: flex;
    flex-direction: column;
    justify-content: center;

    p.intro-data {
      font-size: 1.6rem;
      font-weight: 600;
      letter-spacing: 2px;
      color: #555;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
    }

    h1 {
      font-size: 4.2rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #222;
      line-height: 1.2;
      text-transform: capitalize;
    }

    p.description {
      font-size: 1.3rem;
      color: #444;
      line-height: 1.6;
      max-width: 500px;
      margin-bottom: 2rem;
    }

    .btn {
      padding: 0.9rem 2.2rem;
      font-size: 1.1rem;
      background-color: #4f46e5;
      border-radius: 12px;
      color: white;
      font-weight: 600;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #3b35b3;
      }
    }
  }

  .hero-section-image {
    display: flex;
    justify-content: center;
    align-items: center;

    figure {
      margin: 0;
      position: relative;
      overflow: hidden;
      border-radius: 20px;
      box-shadow: 0 12px 40px rgba(79, 70, 229, 0.25);
    }

    .img-style {
      width: 100%;
      height: auto;
      display: block;
      transition: transform 0.4s ease;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .find-btn {
    width: 25%;
    padding: 1rem;
    color: #fff;
    font-size: 1.4rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column {
      display: flex;
      flex-direction: column;
      gap: 4rem;
    }

    .hero-section-data {
      align-items: center;
      text-align: center;

      h1 {
        font-size: 2.5rem;
      }

      p.description {
        max-width: 100%;
      }
    }

    .hero-section-image figure {
      border-radius: 16px;
      box-shadow: 0 8px 30px rgba(79, 70, 229, 0.2);
    }
  }
`;

export default HeroSection;
