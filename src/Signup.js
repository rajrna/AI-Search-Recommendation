import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";

const Signup = () => {
  return (
    <Wrapper>
      <form>
        <NavLink to="/" className="logo-link">
          <div className="logo">
            <img src="./images/logo-black-transparent.png" alt="Logo" />
          </div>
        </NavLink>

        <h2>SIGN UP</h2>

        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your full name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          required
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm your password"
          required
        />

        <Button type="submit">Sign Up</Button>

        <p className="extra-text">
          Already have an account?{" "}
          <NavLink to="/login" className="link">
            Login here
          </NavLink>
        </p>
      </form>
    </Wrapper>
  );
};

export default Signup;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  form {
    background: #fff;
    padding: 40px 50px;
    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    width: 450px;
    max-width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    .logo-link {
      width: 150px;
      margin-bottom: 30px;
      display: block;

      .logo img {
        width: 100%;
        height: auto;
        cursor: pointer;
        display: block;
      }
    }

    h2 {
      margin-bottom: 30px;
      font-weight: 700;
      font-size: 2.7rem;
      color: #222;
    }

    label {
      align-self: flex-start;
      margin-bottom: 8px;
      font-weight: 600;
      color: #444;
      font-size: 1rem;
    }

    input {
      width: 100%;
      padding: 12px 15px;
      margin-bottom: 25px;
      border: 1.8px solid #ccc;
      border-radius: 10px;
      font-size: 1rem;
      transition: border-color 0.3s ease;

      &:focus {
        border-color: #007bff;
        outline: none;
      }
    }

    button {
      width: 100%;
      padding: 15px;
      background-color: #007bff;
      border: none;
      border-radius: 12px;
      color: white;
      font-weight: 700;
      font-size: 1.1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #0056b3;
      }
    }

    .extra-text {
      margin-top: 10px;
      font-size: 1rem;
      color: #555;
      text-align: center;

      .link {
        color: #007bff;
        text-decoration: none;
        font-weight: 600;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
