import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Recommendations = () => {
  const [recommendedProduct, setRecommendedProduct] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOption, setSortOption] = useState("relevance");

  // Fetch products once on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        const mapped = data.map((product) => ({
          ...product,
          category: product.category || "General",
          score: (Math.random() * 5).toFixed(1), // Dummy score for demo
        }));
        setRecommendedProduct(mapped);
        setSortedProducts(mapped); // Initialize sorted list
      } catch (error) {
        console.error("Fetching Log Error", error);
      }
    };
    fetchProducts();
  }, []);

  // Sort products whenever recommendedProduct or sortOption changes
  useEffect(() => {
    if (!recommendedProduct.length) return;

    let sorted = [...recommendedProduct];

    switch (sortOption) {
      case "newest":
        // Sort by descending id (newest first)
        sorted.sort((a, b) => b.id - a.id);
        break;
      case "popular":
        // Sort by descending score (highest score first)
        sorted.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
        break;
      case "name":
        // Sort by product title alphabetically
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "relevance":
      default:
        // No sorting, keep original order
        break;
    }

    setSortedProducts(sorted);
  }, [recommendedProduct, sortOption]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <Wrapper>
      <div className="recommendation-panel">
        <h2>Recommended Products</h2>
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
          {sortedProducts.map((product) => (
            <div className="card" key={product.id}>
              <div className="image-box">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="info">
                <h4>{product.title}</h4>
                <p className="description">{product.description}</p>
              </div>
              <div className="bottom-info">
                <span className="category">{product.category}</span>
                <span className="score">⭐ {product.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="recommendation-panel">
        <h2>Recommended Products</h2>
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
                <img src={product.imageUrl} alt={product.title} />
              </div>
              <div className="info">
                <h4>{product.title}</h4>
                <p className="description">{product.description}</p>
              </div>
              <div className="bottom-info">
                <span className="category">{product.category}</span>
                <span className="score">⭐ {product.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </Wrapper>
  );
};

export default Recommendations;

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
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }

  .card {
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
