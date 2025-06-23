import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Recommendations = () => {
  const recommendedItems = [
    {
      id: 1,
      name: "Red Hoodie",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      name: "Leather Jacket",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      name: "Blue Denim",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 4,
      name: "White Sneakers",
      image: "https://via.placeholder.com/200",
    },
  ];

  const [recommendedProduct, setRecommendedProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setRecommendedProduct(data);
      } catch (error) {
        console.error("Fetching Log Error", error);
      }
    };
    fetchProducts();
  }, []);

  const [sortOption, setSortOption] = useState("relevance");

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    // Optional: apply sorting logic on recommendedItems
  };

  // useEffect(() => {
  //   // Example logic for sorting (simple version)
  //   const sorted = [...recommendedItems].sort((a, b) => {
  //     if (sortOption === "name") return a.name.localeCompare(b.name);
  //     return 0; // Add other cases as needed
  //   });

  //   setRecommendedProduct(sorted);
  // }, [sortOption]);

  return (
    <Wrapper>
      <div className="recommendation-panel">
        <h2>Recommended For You</h2>
        {recommendedItems.length === 0 ? (
          <p>No recommendations available.</p>
        ) : (
          <div>
            {" "}
            <div className="filter-bar">
              <label htmlFor="sort">Sort by:</label>
              <select id="sort" value={sortOption} onChange={handleSortChange}>
                <option value="relevance">Relevance</option>
                <option value="newest">Newest</option>
                <option value="popular">Most Popular</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
            <div className="recommendation-grid">
              {recommendedItems.map((item) => (
                <div className="card" key={item.id}>
                  <div className="image-box">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="info">
                    <h4>{item.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="recommendation-panel">
        <h2>Recommended For You</h2>
        {recommendedProduct.length === 0 ? (
          <p>No recommendations available.</p>
        ) : (
          <div>
            {" "}
            <div className="filter-bar">
              <label htmlFor="sort">Sort by:</label>
              <select id="sort" value={sortOption} onChange={handleSortChange}>
                <option value="relevance">Relevance</option>
                <option value="newest">Newest</option>
                <option value="popular">Most Popular</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
            <div className="recommendation-grid">
              {recommendedProduct.map((product) => (
                <div className="card" key={product.id}>
                  <div className="image-box">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="info">
                    <h4>{product.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .recommendation-panel {
    padding: 30px;
    width: 100%;

    font-family: "Segoe UI", sans-serif;
  }

  .recommendation-panel h2 {
    margin-bottom: 20px;
    font-size: 28px;
    color: #333;
  }

  .recommendation-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 20px;
  }

  .card {
    background-color: #f9f9f9;
    border-radius: 16px;
    overflow: hidden;
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
    height: 200px;
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
    padding: 1rem;

    h4 {
      font-size: 1.2rem;
      color: #333;
    }
  }

  .filter-bar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }

  .filter-bar label {
    font-size: 14px;
    color: #333;
  }

  .filter-bar select {
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 14px;
  }
`;

export default Recommendations;
