import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  FaUser,
  FaUserCog,
  FaHistory,
  FaLightbulb,
  FaHeart,
  FaBell,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import ProfileSettings from "./profile_content/ProfileSettings";
import SearchHistory from "./profile_content/SearchHistory";
import Recommendations from "./profile_content/Recommendations";
import Notifications from "./profile_content/Notifications";
import HelpSupport from "./profile_content/HelpSupport";
import Favourites from "./profile_content/Favourites";
const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");

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
          <h3>John Doe</h3>
          <p>john.doe@example.com</p>
        </div>
        <nav>
          <ul>
            <li
              className={activeTab === "profile" ? "active" : ""}
              onClick={() => handleTabChange("profile")}
            >
              <FaUserCog /> Profile Settings
            </li>
            <li
              className={activeTab === "history" ? "active" : ""}
              onClick={() => handleTabChange("history")}
            >
              <FaHistory /> Search History
            </li>
            <li
              className={activeTab === "recommendation" ? "active" : ""}
              onClick={() => handleTabChange("recommendation")}
            >
              <FaLightbulb /> Recommendations
            </li>
            <li
              className={activeTab === "favourite" ? "active" : ""}
              onClick={() => handleTabChange("favourite")}
            >
              <FaHeart /> Favourites
            </li>
            <li
              className={activeTab === "notification" ? "active" : ""}
              onClick={() => handleTabChange("notification")}
            >
              <FaBell /> Notifications
            </li>
            <li
              className={activeTab === "help" ? "active" : ""}
              onClick={() => handleTabChange("help")}
            >
              <FaQuestionCircle /> Help and Support
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
        {activeTab === "profile" && <ProfileSettings />}
        {activeTab === "history" && <SearchHistory />}
        {activeTab === "recommendation" && <Recommendations />}
        {activeTab === "favourite" && <Favourites />}
        {activeTab === "notification" && <Notifications />}
        {activeTab === "help" && <HelpSupport />}
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
