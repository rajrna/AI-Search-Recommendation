import React, { useState } from "react";
import styled from "styled-components";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New product launch!",
      description: "Check out the latest collection in our store.",
      date: "2025-06-20",
      read: false,
    },
    {
      id: 2,
      title: "Order Shipped",
      description: "Your order #12345 has been shipped.",
      date: "2025-06-18",
      read: true,
    },
    {
      id: 3,
      title: "Password Changed",
      description: "Your password was successfully changed.",
      date: "2025-06-15",
      read: true,
    },
  ]);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  return (
    <Wrapper>
      <div className="notifications-panel">
        <h2>Notifications</h2>
        {notifications.length === 0 ? (
          <p>No notifications available.</p>
        ) : (
          <ul className="notifications-list">
            {notifications.map((notif) => (
              <li
                key={notif.id}
                className={`notification-item ${
                  notif.read ? "read" : "unread"
                }`}
                onClick={() => markAsRead(notif.id)}
              >
                <div className="notif-content">
                  <h4>{notif.title}</h4>
                  <p>{notif.description}</p>
                </div>
                <span className="notif-date">{notif.date}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .notifications-panel {
    padding: 30px;
    width: 100%;
    font-family: "Segoe UI", sans-serif;
  }

  .notifications-panel h2 {
    margin-bottom: 20px;
    font-size: 28px;
    color: #333;
  }

  .notifications-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .notification-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    margin-bottom: 12px;
    border-radius: 10px;
    cursor: pointer;
    background-color: #f9f9f9;
    transition: background-color 0.3s ease;
  }

  .notification-item.unread {
    background-color: #e6f0ff;
    font-weight: 600;
  }

  .notification-item:hover {
    background-color: #d1e3ff;
  }

  .notif-content h4 {
    margin: 0 0 6px 0;
    color: #222;
  }

  .notif-content p {
    margin: 0;
    color: #555;
    font-size: 14px;
  }

  .notif-date {
    font-size: 12px;
    color: #999;
    white-space: nowrap;
  }
`;

export default Notifications;
