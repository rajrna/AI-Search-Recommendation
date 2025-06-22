import React from "react";
import styled from "styled-components";

const Dashboard = () => {
  // Sample stats (replace with real data)
  const stats = [
    { id: 1, title: "Total Users", value: 1245, icon: "👥" },
    { id: 2, title: "Total Searches", value: 8950, icon: "🔍" },
    { id: 3, title: "Active Sessions", value: 312, icon: "⚡" },
    { id: 4, title: "Images Uploaded", value: 1850, icon: "🖼️" },
  ];

  return (
    <Wrapper>
      <h2>Admin Dashboard</h2>
      <div className="stats-grid">
        {stats.map(({ id, title, value, icon }) => (
          <div className="stat-card" key={id}>
            <div className="icon">{icon}</div>
            <div className="info">
              <h3>{value}</h3>
              <p>{title}</p>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 30px;
  font-family: "Segoe UI", sans-serif;
  width: 100%;

  h2 {
    margin-bottom: 25px;
    font-size: 28px;
    color: #222;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 24px;
  }

  .stat-card {
    display: flex;
    align-items: center;
    background: #f8f9fa;
    padding: 20px;
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
    transition: box-shadow 0.3s ease;
    cursor: default;
  }

  .stat-card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
  }

  .icon {
    font-size: 36px;
    margin-right: 16px;
  }

  .info h3 {
    margin: 0;
    font-size: 22px;
    color: #007bff;
  }

  .info p {
    margin: 2px 0 0 0;
    font-size: 14px;
    color: #555;
  }
`;

export default Dashboard;
