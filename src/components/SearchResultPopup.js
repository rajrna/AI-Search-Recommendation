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
                  <div className="left-section">
                    <h4>{item.name}</h4>
                    <a
                      href={item.url}
                      className="product-url"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.url}
                    </a>
                  </div>
                  <a
                    href={item.url}
                    className="visit-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </a>
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

  backdrop-filter: blur(8px); /* Blur effect */
  -webkit-backdrop-filter: blur(8px); /* For Safari */
`;

const Popup = styled.div`
  width: 100%;
  padding: 1.5rem 5rem;
  animation: slideUp 0.5s ease;
  overflow: hidden;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.1);

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
        font-size: 1.6rem;
        cursor: pointer;
        color: #333;
        transition: color 0.3s ease, transform 0.2s ease;

        &:hover {
          color: #007bff; /* or any accent color that fits your theme */
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
const ProductGrid = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(
    3,
    1fr
  ); // You can change to 4 if you want 4 per row
  gap: 6rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;
const ProductCard = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.07);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
  }

  .image-box {
    width: 100%;
    height: 220px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    .left-section {
      display: flex;
      flex-direction: column;
      align-items: flex-start; /* Add this */
    }

    h4 {
      font-size: 1.7rem;
      color: #333;
      margin: 0 0 0.4rem 0;
    }

    .product-url {
      color: #007bff;
      text-decoration: underline;
      font-size: 1.2rem;
      transition: color 0.3s ease;

      &:hover {
        color: #0056b3;
      }
    }

    .visit-btn {
      text-decoration: none;
      background-color: #2c3741;
      color: white;
      padding: 0.9rem 1.4rem;
      border-radius: 10px;
      font-size: 1.4rem;
      font-weight: bold;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;

const InnerContent = styled.div`
  max-height: ${({ collapsed }) => (collapsed ? "0px" : "380px")};
  overflow-y: ${({ collapsed }) => (collapsed ? "hidden" : "auto")};
  transition: max-height 0.4s ease;
  margin-top: ${({ collapsed }) => (collapsed ? "0" : "1.5rem")};

  /* Hide scrollbar for Webkit browsers */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none;

  /* Hide scrollbar for IE and Edge */
  -ms-overflow-style: none;
`;
