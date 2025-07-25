import React, { useState } from "react";
import styled from "styled-components";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
  });
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("description", formData.description);
    payload.append("category", formData.category);
    payload.append("image", image);

    try {
      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        body: payload,
      });

      if (res.ok) {
        setMessage("Product added successfully!");
        setFormData({ name: "", description: "", category: "" });
        setImage(null);
        setPreviewUrl(null);
      } else {
        setMessage("Failed to add product.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error submitting form.");
    }
  };

  return (
    <Wrapper>
      <div className="product-form">
        <h2>Add New Product</h2>

        <div className="section">
          <h3>Product Details</h3>
          <div className="section-grid">
            <div className="form-group">
              <label>Product Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
              />
            </div>
            <div className="form-group full-width">
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="form-group full-width">
              <label>Product Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
              {previewUrl && (
                <div className="image-preview">
                  <img src={previewUrl} alt="Preview" />
                </div>
              )}
            </div>
          </div>
        </div>

        <button className="submit-btn" onClick={handleSubmit}>
          Add Product
        </button>

        {message && <p className="message">{message}</p>}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .product-form {
    padding: 30px;
    width: 100%;
    font-family: "Segoe UI", sans-serif;
  }

  .product-form h2 {
    margin-bottom: 20px;
    font-size: 28px;
    color: #333;
  }

  .section {
    margin-bottom: 40px;
  }

  .section h3 {
    margin-bottom: 15px;
    color: #444;
    font-size: 18px;
  }

  .form-group {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }

  .form-group label {
    font-weight: 500;
    margin-bottom: 6px;
    color: #555;
  }

  .form-group input[type="text"],
  .form-group textarea,
  .form-group input[type="file"] {
    padding: 12px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 8px;
    transition: border-color 0.3s ease;
  }

  .form-group textarea {
    resize: vertical;
    height: 100px;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    border-color: #007bff;
    outline: none;
  }

  .section-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }

  .form-group.full-width {
    grid-column: span 2;
  }

  .submit-btn {
    background-color: #007bff;
    color: white;
    padding: 12px 24px;
    font-size: 15px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .submit-btn:hover {
    background-color: #0056b3;
  }

  .image-preview {
    margin: 10px 0;
  }

  .image-preview img {
    max-width: 30%;
    height: auto;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`;

export default AddProduct;
