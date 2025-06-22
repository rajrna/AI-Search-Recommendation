import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SearchHistory = () => {
  const historyData = [
    {
      id: 1,
      image: "https://via.placeholder.com/80",
      date: "2025-06-20",
      keyword: "Red Hoodie",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/80",
      date: "2025-06-18",
      keyword: "Leather Jacket",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/80",
      date: "2025-06-15",
      keyword: "Blue Denim",
    },
  ];

  const [searchProduct, setSearchProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setSearchProduct(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <Wrapper>
      <div className="history-panel">
        <h2>Search History</h2>
        {historyData.length === 0 ? (
          <p>No search history available.</p>
        ) : (
          <div className="history-list">
            {historyData.map((item) => (
              <div className="history-item" key={item.id}>
                <img src={item.image} alt={item.keyword} />
                <div className="details">
                  <p className="keyword">{item.keyword}</p>
                  <p className="date">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* <div className="history-panel">
        <h2>Search History</h2>
        {searchProduct.length === 0 ? (
          <p>No search history available.</p>
        ) : (
          <div className="history-list">
            {searchProduct.map((product) => (
              <div className="history-item" key={product.id}>
                <img src={product.image} alt={product.title} />
                <div className="details">
                  <p className="keyword">{product.title}</p>
                  <p className="date">{product.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .history-panel {
    padding: 30px;
    width: 100%;

    font-family: "Segoe UI", sans-serif;
  }

  .history-panel h2 {
    margin-bottom: 20px;
    font-size: 28px;
    color: #333;
  }

  .history-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .history-item {
    display: flex;
    align-items: center;
    padding: 16px;
    border: 1px solid #eee;
    border-radius: 10px;
    background-color: #fafafa;
    transition: background-color 0.3s ease;
  }

  .history-item:hover {
    background-color: #f0f8ff;
  }

  .history-item img {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    object-fit: cover;
    margin-right: 20px;
  }

  .details .keyword {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 4px;
    color: #222;
  }

  .details .date {
    font-size: 14px;
    color: #666;
  }
`;

export default SearchHistory;
