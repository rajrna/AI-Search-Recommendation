import styled from "styled-components";

export const Button = styled.button`
  background: linear-gradient(135deg, #3a4a58, #2c3741);
  color: #ffffff;
  padding: 1.2rem 2.4rem;
  border: none;
  border-radius: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);

  &:hover {
    background: linear-gradient(135deg, #2c3741, #1d262d);
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
  }

  &:active {
    transform: scale(0.97);
  }

  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 1.6rem;
  }
`;
