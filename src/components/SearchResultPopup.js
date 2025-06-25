import React, { useState } from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { FaAngleDown, FaAngleUp, FaSearch } from "react-icons/fa";

const SearchResultPopup = ({ imageSrc, onReCrop, results = [], onClose }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Overlay>
      <Popup collapsed={collapsed}>
        <div className="popup-header">
          <h2>
            <FaSearch
              style={{
                marginRight: "0.9rem",
                fontSize: "2.3rem",
                verticalAlign: "middle",
              }}
            />
            Search Results
          </h2>
          <div className="button-group">
            <button
              className="toggle-btn"
              onClick={() => setCollapsed(!collapsed)}
            >
              {collapsed ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            <button className="close-btn" onClick={onClose}>
              <IoMdClose />
            </button>
          </div>
        </div>

        <InnerContent collapsed={collapsed}>
          <ProductGrid>
            {results.map((item, i) => (
              <ProductCard key={i}>
                <div className="image-box">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="info">
                  <h4>{item.name}</h4>
                  <p className="description">{item.description}</p>
                </div>
                <div className="bottom-info">
                  <span className="category">{item.category}</span>
                  <span className="score">⭐ {item.score}</span>
                </div>
              </ProductCard>
            ))}
          </ProductGrid>
        </InnerContent>
      </Popup>
    </Overlay>
  );
};

export default SearchResultPopup;

const Overlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  backdrop-filter: blur(8px);
`;

const Popup = styled.div`
  width: 100%;
  padding: 1.5rem 5rem;
  background-color: #ffffff;
  animation: slideUp 0.5s ease;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  .popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      margin: 0;
      font-size: 2.5rem;
    }

    .button-group {
      display: flex;
      gap: 1rem;

      .toggle-btn,
      .close-btn {
        background: transparent;
        border: none;
        font-size: 1.8rem;
        cursor: pointer;
        color: #333;
        transition: color 0.3s ease, transform 0.2s ease;

        &:hover {
          color: #007bff;
          transform: scale(1.1);
        }
      }
    }
  }

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
    }
  }
`;

const InnerContent = styled.div`
  max-height: ${({ collapsed }) => (collapsed ? "0px" : "400px")};
  overflow-y: ${({ collapsed }) => (collapsed ? "hidden" : "auto")};
  transition: max-height 0.4s ease;
  margin-top: ${({ collapsed }) => (collapsed ? "0" : "2rem")};

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 3.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
  }

  .image-box {
    width: 100%;
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  .info {
    padding: 1rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;

    h4 {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
      color: #222;
    }

    .description {
      font-size: 1rem;
      max-height: 60px;
      overflow-y: auto;
      margin-bottom: 1rem;
      color: #444;
    }
  }

  .bottom-info {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
    display: flex;
    justify-content: space-between;
    font-size: 1.1rem;

    .category {
      background: #f0f0f0;
      padding: 0.4rem 0.8rem;
      border-radius: 5px;
      color: #333;
    }

    .score {
      color: #007bff;
      font-weight: bold;
    }
  }
`;
