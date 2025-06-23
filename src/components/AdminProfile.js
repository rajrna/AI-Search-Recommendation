import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  FaUser,
  FaSignOutAlt,
  FaTachometerAlt,
  FaUsers,
  FaEnvelope,
  FaCogs,
} from "react-icons/fa";
import Dashboard from "./admins_profile/Dashboard";
import ManageUser from "./admins_profile/ManageUser";
import Message from "./admins_profile/Message";
import AdminSettings from "./admins_profile/AdminSettings";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    const savedTab = localStorage.getItem("activeProfileTab");
    if (savedTab) {
      setActiveTab(savedTab);
    }
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    localStorage.setItem("activeProfileTab", tab);
  };
  return (
    <Wrapper style={{ marginTop: "11rem" }}>
      <Sidebar setActiveTab={setActiveTab} activeTab={activeTab}>
        <div className="user-info">
          <FaUser className="avatar" />
        </div>
        <nav>
          <ul>
            <li
              className={activeTab === "dashboard" ? "active" : ""}
              onClick={() => handleTabChange("dashboard")}
            >
              <FaTachometerAlt /> Dashboard
            </li>
            <li
              className={activeTab === "mg-user" ? "active" : ""}
              onClick={() => handleTabChange("mg-user")}
            >
              <FaUsers /> Manage Users
            </li>
            <li
              className={activeTab === "message" ? "active" : ""}
              onClick={() => handleTabChange("message")}
            >
              <FaEnvelope />
              Messages
            </li>
            <li
              className={activeTab === "ad-settings" ? "active" : ""}
              onClick={() => handleTabChange("ad-settings")}
            >
              <FaCogs /> Admin Settings
            </li>

            <li className="logout">
              <FaSignOutAlt /> Logout
            </li>
          </ul>
        </nav>
      </Sidebar>

      <MainPanel>
        {/* <h2>Welcome, John</h2>
        <p>This is your profile panel where you can update your details.</p> */}
        {activeTab === "dashboard" && <Dashboard />}
        {activeTab === "mg-user" && <ManageUser />}
        {activeTab === "message" && <Message />}
        {activeTab === "ad-settings" && <AdminSettings />}
      </MainPanel>
    </Wrapper>
  );
};

export default ProfilePage;

// Styled Components
const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: "Segoe UI", sans-serif;
`;

const Sidebar = styled.aside`
  width: 23%;
  min-width: 250px;
  background-color: rgb(247, 249, 252);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ddd;
  box-sizing: border-box;

  .user-info {
    text-align: center;

    .avatar {
      font-size: 4rem;
      color: #007bff;
      margin-bottom: 1rem;
    }

    h3 {
      margin: 0;
      font-size: 1.4rem;
    }

    p {
      font-size: 0.9rem;
      color: #666;
    }
  }

  nav ul {
    list-style: none;
    padding: 0;
    margin-top: 2rem;

    li {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.8rem 1rem;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 500;
      font-size: 1.3rem;
      transition: background 0.2s;

      &:hover {
        background-color: #e3eaf5;
      }

      &.active {
        background-color: #d0e2ff;
        color: #0056b3;
      }

      svg {
        font-size: 1.2rem;
      }
    }
  }
  .logout {
    transition: background-color 0.3s ease, color 0.3s ease;
    &:hover {
      background-color: #ff4c4c; /* softer bright red */
      color: #fff; /* white text for contrast */
    }
  }
`;

const MainPanel = styled.main`
  flex: 1;
  padding: 3rem;
  background: #ffffff;
  overflow-y: auto;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    color: #555;
  }
`;
