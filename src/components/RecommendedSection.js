import React, { useEffect, useState } from "react";
import styled from "styled-components";

const RecommendedSection = () => {
  const [products, setProducts] = useState([]);
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
        setProducts(mapped);
        setSortedProducts(mapped); // Initialize sorted list
      } catch (error) {
        console.error("Fetching Log Error", error);
      }
    };
    fetchProducts();
  }, []);

  // Sort products whenever recommendedProduct or sortOption changes
  useEffect(() => {
    if (!products.length) return;

    let sorted = [...products];

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
  }, [products, sortOption]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <Wrapper>
      <div className="main-container">
        <h1>Recommended For You</h1>
        <div className="underline"></div>

        <FilterContainer>
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" value={sortOption} onChange={handleSortChange}>
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
            <option value="popular">Most Popular</option>
            <option value="name">Name A-Z</option>
          </select>
        </FilterContainer>

        <ProductGrid>
          {sortedProducts.map((product, index) => (
            <ProductCard key={index}>
              <div className="image-box">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="info">
                <h4>{product.title}</h4>
                <p className="description">{product.description}</p>
              </div>
              <div className="bottom-info">
                <span className="category">{product.category}</span>
                <span className="score">⭐ {product.rating?.rate ?? 0}</span>
              </div>
            </ProductCard>
          ))}
        </ProductGrid>

        {/* <ProductGrid>
          {products.map((product, index) => (
            <ProductCard key={index}>
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
            </ProductCard>
          ))}
        </ProductGrid> */}
      </div>
    </Wrapper>
  );
};

export default RecommendedSection;

// ===== STYLES =====

const Wrapper = styled.section`
  background: linear-gradient(180deg, rgb(247, 249, 252), #ffffff);
  padding: 10rem 2rem;

  .main-container {
    max-width: 1700px;
    margin: auto;
    text-align: center;
  }

  h1 {
    font-size: 3rem;
    color: #222;
    margin-bottom: 0.5rem;
  }

  .underline {
    width: 80px;
    height: 4px;
    background: #007bff;
    margin: 0 auto 2rem;
    border-radius: 5px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 3rem;

  label {
    font-size: 1rem;
    color: #333;
  }

  select {
    padding: 0.6rem 1rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1rem;
    background-color: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    cursor: pointer;

    &:hover {
      border-color: #007bff;
    }
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 5rem;

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
    background-color: #fff; /* ensures visibility */

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
