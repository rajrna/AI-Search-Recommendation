import React, { useState } from "react";
import styled from "styled-components";

const sampleMessages = [
  {
    id: 1,
    name: "Alice Smith",
    email: "alice@example.com",
    message: "How do I reset my password?",
    date: "2025-06-20",
    read: false,
  },
  {
    id: 2,
    name: "Bob Johnson",
    email: "bob@example.com",
    message: "I can’t upload my image. Please help!",
    date: "2025-06-19",
    read: true,
  },
  // Add more sample messages...
];

const Message = () => {
  const [messages, setMessages] = useState(sampleMessages);

  const toggleReadStatus = (id) => {
    setMessages((msgs) =>
      msgs.map((msg) => (msg.id === id ? { ...msg, read: !msg.read } : msg))
    );
  };

  return (
    <Wrapper>
      <h2>Messages</h2>

      {messages.length === 0 ? (
        <p className="no-messages">No messages found.</p>
      ) : (
        <ul className="message-list">
          {messages.map(({ id, name, email, message, date, read }) => (
            <li
              key={id}
              className={`message-item ${read ? "read" : "unread"}`}
              onClick={() => toggleReadStatus(id)}
              title="Click to toggle read/unread"
            >
              <div className="message-header">
                <span className="sender-name">{name}</span>
                <span className="date">
                  {new Date(date).toLocaleDateString()}
                </span>
              </div>
              <p className="message-preview">{message}</p>
              <span className="status">{read ? "Read" : "Unread"}</span>
            </li>
          ))}
        </ul>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 30px;
  width: 100%;
  font-family: "Segoe UI", sans-serif;

  h2 {
    margin-bottom: 20px;
    font-size: 28px;
    color: #222;
  }

  .no-messages {
    font-style: italic;
    color: #777;
    padding: 20px 0;
    text-align: center;
  }

  .message-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .message-item {
    padding: 16px 20px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    transition: background-color 0.2s ease;
    position: relative;
  }

  .message-item.unread {
    background-color: #eaf3ff;
  }

  .message-item:hover {
    background-color: #f5f7fa;
  }

  .message-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
  }

  .sender-name {
    font-weight: 600;
    color: #333;
  }

  .date {
    font-size: 13px;
    color: #999;
  }

  .message-preview {
    font-size: 15px;
    color: #555;
    margin: 0 0 8px 0;
  }

  .status {
    display: block;
    text-align: right;
    font-size: 12px;
    font-weight: 700;
    color: #007bff;
    text-transform: uppercase;
    margin-top: 6px;
  }
`;

export default Message;
