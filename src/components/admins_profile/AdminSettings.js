import React, { useState } from "react";
import styled from "styled-components";

const ProfileSettings = () => {
  const [formData, setFormData] = useState({
    fullName: "Admin",
    email: "admin@example.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Handle form submission or API call
    console.log("Saving...", formData);
  };

  return (
    <Wrapper>
      <div className="profile-settings">
        <h2>Profile Settings</h2>

        <div className="section">
          <h3>Basic Information</h3>
          <div className="section-grid">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Change Password</h3>
          <div className="section-grid">
            <div className="form-group">
              <label>Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* <div className="section">
          <h3>Profile Picture</h3>
          <input type="file" />
        </div> */}

        <button className="save-btn" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .profile-settings {
    padding: 30px;
    width: 100%;
    font-family: "Segoe UI", sans-serif;
  }

  .profile-settings h2 {
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
  .form-group input[type="email"],
  .form-group input[type="password"] {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 14px;
    transition: border-color 0.3s ease;
  }

  .form-group input:focus {
    border-color: #007bff;
    outline: none;
  }

  .section-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }

  input[type="file"] {
    margin-top: 10px;
  }

  .save-btn {
    background-color: #007bff;
    color: white;
    padding: 12px 24px;
    font-size: 15px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .save-btn:hover {
    background-color: #0056b3;
  }
`;

export default ProfileSettings;
