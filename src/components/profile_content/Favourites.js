import React, { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";

const Favourites = () => {
  const [favouriteProduct, setFavouriteProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setFavouriteProduct(data);
      } catch (error) {
        console.error("Fetching Log Error", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <Wrapper>
      <div className="favorites-panel">
        <h2>Your Favorites</h2>
        {favouriteProduct.length === 0 ? (
          <p className="no-favorites">You haven't added any favorites yet.</p>
        ) : (
          <div className="favorites-grid">
            {favouriteProduct.map((product) => (
              <div className="card" key={product.id}>
                <div className="image-box">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="card-info">
                  <h4>{product.title}</h4>
                </div>
                <button className="remove-btn" title="Remove from favorites">
                  <FaTrashAlt />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .favorites-panel {
    padding: 30px;
    width: 100%;

    font-family: "Segoe UI", sans-serif;
  }

  .favorites-panel h2 {
    margin-bottom: 20px;
    font-size: 28px;
    color: #333;
  }

  .no-favorites {
    font-size: 16px;
    color: #777;
    padding: 20px 0;
  }

  .favorites-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 50px;
  }

  .card {
    display: flex;
    flex-direction: column;
    height: 280px; /* fixed height */
    overflow: hidden;
    background-color: #f9f9f9;
    border-radius: 16px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.07);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
    }
  }

  .image-box {
    width: 100%;
    height: 160px;
    flex-shrink: 0;
  }

  .image-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  .card-info {
    padding: 16px;
    flex: 1;
    overflow-y: auto;
    text-align: center;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari */
    }
  }

  .card-info h4 {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin: 0;
    text-align: center;
  }
  .remove-btn {
    width: 100%;
    padding: 2px 0;
    background-color: #ff4d4f;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-top: 1px solid #eee;
    margin-top: auto; /* 👈 pushes it to the bottom */
  }

  .remove-btn:hover {
    background-color: #d9363e;
  }
`;

export default Favourites;
