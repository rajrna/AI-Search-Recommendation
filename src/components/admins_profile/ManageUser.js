import React, { useState } from "react";
import styled from "styled-components";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const sampleUsers = [
  {
    id: 1,
    name: "Alice Smith",
    email: "alice@example.com",
    lastSearch: "Red sneakers",
    status: "Active",
  },
  {
    id: 2,
    name: "Bob Johnson",
    email: "bob@example.com",
    lastSearch: "Blue backpack",
    status: "Active",
  },
  {
    id: 3,
    name: "Charlie Davis",
    email: "charlie@example.com",
    lastSearch: "Graphic hoodie",
    status: "Suspended",
  },
  // Add more sample users...
];

const ManageUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState(sampleUsers);

  // Filter users by search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (id) => {
    console.log("Edit user with id:", id);
    // Open edit modal or navigate
  };

  const handleDelete = (id) => {
    console.log("Delete user with id:", id);
    // Confirm and delete logic
  };

  return (
    <Wrapper>
      <h2>Manage Users</h2>

      <input
        type="text"
        placeholder="Search users by name or email..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Last Search</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length === 0 ? (
            <tr>
              <td colSpan="5" className="no-data">
                No users found.
              </td>
            </tr>
          ) : (
            filteredUsers.map(({ id, name, email, lastSearch, status }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{lastSearch}</td>
                <td>
                  <span className={`status ${status.toLowerCase()}`}>
                    {status}
                  </span>
                </td>
                <td>
                  <button
                    className="icon-btn edit"
                    title="Edit User"
                    onClick={() => handleEdit(id)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="icon-btn delete"
                    title="Delete User"
                    onClick={() => handleDelete(id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
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

  .search-input {
    width: 100%;
    max-width: 400px;
    padding: 12px 16px;
    margin-bottom: 24px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 15px;
    transition: border-color 0.3s ease;
  }

  .search-input:focus {
    border-color: #007bff;
    outline: none;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead {
    background-color: #f1f3f5;
  }

  th,
  td {
    padding: 14px 18px;
    text-align: left;
    border-bottom: 1px solid #e9ecef;
  }

  tbody tr:hover {
    background-color: #f8f9fa;
  }

  .status {
    padding: 6px 12px;
    border-radius: 12px;
    font-weight: 600;
    font-size: 13px;
    color: white;
    display: inline-block;
  }

  .status.active {
    background-color: #28a745;
  }

  .status.suspended {
    background-color: #dc3545;
  }

  .action-btn {
    margin-right: 8px;
    padding: 6px 14px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 13px;
    font-weight: 600;
    transition: background-color 0.3s ease;
  }

  .action-btn.edit {
    background-color: #007bff;
    color: white;
  }

  .action-btn.edit:hover {
    background-color: #0056b3;
  }

  .action-btn.delete {
    background-color: #ff4d4f;
    color: white;
  }

  .action-btn.delete:hover {
    background-color: #d9363e;
  }

  .no-data {
    text-align: center;
    padding: 20px 0;
    color: #777;
    font-style: italic;
  }

  .icon-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    margin-right: 10px;
    padding: 6px;
    color: #555;
    transition: color 0.3s ease;
  }

  .icon-btn.edit:hover {
    color: #007bff;
  }

  .icon-btn.delete:hover {
    color: #ff4d4f;
  }
`;

export default ManageUsers;
