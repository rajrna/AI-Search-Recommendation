import React from "react";
import styled from "styled-components";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>VisuoFind</h3>
            <p>
              Your visual product search companion — fast, modern, and
              intuitive.
            </p>
          </div>

          <div className="footer-subscribe">
            <h3>Subscribe for Updates</h3>
            <form action="#">
              <input type="email" name="email" placeholder="Enter your email" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <a href="#" aria-label="Discord">
                <FaDiscord className="icons" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="icons" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube className="icons" />
              </a>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Call Us</h3>
            <p>+91 12345678978</p>
          </div>
        </div>

        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>© {new Date().getFullYear()} VisuoFind. All Rights Reserved</p>
            <div className="footer-legal">
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  footer {
    background-color: #0f1b2e;
    color: #fff;
    padding: 8rem 2rem 2rem;

    h3 {
      color: #ffffff;
      font-size: 1.6rem;
      margin-bottom: 1.5rem;
    }

    p {
      color: #ccc;
      font-size: 1rem;
      line-height: 1.6;
    }

    .footer-subscribe form {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      input[type="email"] {
        padding: 0.8rem 1rem;
        border-radius: 6px;
        border: none;
        font-size: 1rem;
      }

      input[type="submit"] {
        padding: 0.8rem;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 6px;
        font-size: 1rem;
        cursor: pointer;
        transition: background 0.3s ease;

        &:hover {
          background-color: #0056b3;
        }
      }
    }

    .footer-social--icons {
      display: flex;
      gap: 1rem;
      a {
        display: inline-block;
        padding: 0.8rem;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.1);
        transition: background 0.3s ease;

        &:hover {
          background-color: #007bff;
        }

        .icons {
          font-size: 1.8rem;
          color: #fff;
        }
      }
    }

    .footer-bottom--section {
      margin-top: 4rem;

      hr {
        border: 0.5px solid #444;
        margin-bottom: 1.5rem;
      }

      .footer-legal {
        display: flex;
        gap: 1.5rem;
        justify-content: flex-end;

        p {
          font-size: 0.9rem;
          color: #aaa;
          cursor: pointer;
          transition: color 0.3s ease;

          &:hover {
            color: #fff;
          }
        }
      }

      .grid-two-column {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
      }
    }

    .grid-four-column {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }
  }

  @media (max-width: 768px) {
    footer {
      padding: 5rem 1.5rem;

      .footer-bottom--section .grid-two-column {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
      }
    }
  }
`;

export default Footer;
