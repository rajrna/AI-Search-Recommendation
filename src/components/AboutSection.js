import React from "react";
import styled from "styled-components";
import { FaSearch, FaMagic, FaCropAlt, FaCommentAlt } from "react-icons/fa";

const AboutSection = () => {
  return (
    <Wrapper>
      <h1>About VisionFind</h1>
      <div className="underline"></div>
      <p className="intro">
        VisionFind is an AI-powered image search and recommendation platform
        designed to help you discover products visually and intuitively.
      </p>

      <div className="features">
        <div className="feature">
          <FaSearch className="icon" />
          <h3>Search by Image</h3>
          <p>
            Upload or drag-and-drop an image to find similar items instantly.
          </p>
        </div>

        <div className="feature">
          <FaCropAlt className="icon" />
          <h3>Image Cropping</h3>
          <p>Crop your image before searching to focus on what matters.</p>
        </div>

        <div className="feature">
          <FaMagic className="icon" />
          <h3>AI Recommendations</h3>
          <p>
            Get suggestions powered by advanced computer vision and NLP models.
          </p>
        </div>

        <div className="feature">
          <FaCommentAlt className="icon" />
          <h3>Smart Descriptions</h3>
          <p>
            Boost accuracy with optional text descriptions alongside your image.
          </p>
        </div>
      </div>

      <footer>
        <p>Let your images do the talking. Start exploring with VisionFind.</p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(180deg, #fff, rgb(247, 249, 252));
  text-align: center;
  font-family: "Segoe UI", sans-serif;

  h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    color: #222;
  }

  .intro {
    max-width: 700px;
    margin: 0 auto 3rem auto;
    font-size: 1.2rem;
    color: #555;
  }

  .underline {
    width: 80px;
    height: 4px;
    background: #007bff;
    margin: 0 auto 2rem;
    border-radius: 5px;
    margin-bottom: 4rem;
  }

  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  .feature {
    background: #fff;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
    transition: 0.3s ease;
  }

  .feature:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.08);
  }

  .icon {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 1rem;
  }

  .feature h3 {
    font-size: 1.4rem;
    color: #222;
    margin-bottom: 0.5rem;
  }

  .feature p {
    color: #555;
    font-size: 1rem;
  }

  footer {
    margin-top: 4rem;
    font-size: 1.2rem;
    color: #333;
  }
`;

export default AboutSection;
