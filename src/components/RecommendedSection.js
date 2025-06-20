import React, { useEffect, useState } from "react";
import styled from "styled-components";

const RecommendedSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <Wrapper>
      <div className="main-container">
        <h1>Recommended For You</h1>
        <div className="underline"></div>

        <FilterContainer>
          <label htmlFor="filter">Sort by:</label>
          <select id="filter">
            <option value="alphabet">Alphabetical</option>
            <option value="recent">Most Recent</option>
            <option value="date">Date Added</option>
            <option value="popular">Most Popular</option>
          </select>
        </FilterContainer>
        {/* 
        <ProductGrid>
          {[1, 2, 3, 4].map((item, index) => (
            <ProductCard key={index}>
              <div className="image-box">
                <img
                  src={`/images/placeholder${item}.jpg`}
                  alt={`Product ${item}`}
                />
              </div>
              <div className="info">
                <h4>Product Name</h4>
              </div>
            </ProductCard>
          ))}
        </ProductGrid> */}

        <ProductGrid>
          {products.map((product, index) => (
            <ProductCard key={index}>
              <div className="image-box">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="info">
                <h4>{product.title}</h4>
              </div>
            </ProductCard>
          ))}
        </ProductGrid>
      </div>
    </Wrapper>
  );
};

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
    transition: border 0.2s ease;

    &:hover {
      border-color: #007bff;
    }
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 5rem;
`;

const ProductCard = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.07);
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
`;

export default RecommendedSection;
export { ProductCard };
