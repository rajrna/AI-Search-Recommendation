import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch, FaCamera, FaLink, FaUpload } from "react-icons/fa";

const FloatingSearchButton = ({ onImageLink, onCamera, onSearchClick }) => {
  const [open, setOpen] = useState(false);

  const handleMainClick = () => {
    setOpen(!open);
    if (!open && onSearchClick) {
      onSearchClick();
    }
  };

  // New function to trigger file input click
  const handleUploadClick = () => {
    // Find the upload input by id and trigger click
    const uploadInput = document.getElementById("upload-input");
    if (uploadInput) {
      uploadInput.click();
    }
  };

  return (
    <Wrapper>
      {open && (
        <DropUp>
          <IconButton onClick={onImageLink} title="Image Link">
            <FaLink />
          </IconButton>
          <IconButton onClick={onCamera} title="Camera">
            <FaCamera />
          </IconButton>
          <IconButton onClick={handleUploadClick} title="Upload">
            <FaUpload />
          </IconButton>
        </DropUp>
      )}
      <MainButton onClick={handleMainClick} open={open}>
        <FaSearch />
      </MainButton>
    </Wrapper>
  );
};

export default FloatingSearchButton;

const Wrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 1000;
`;

const MainButton = styled.button`
  width: 60px;
  height: 60px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 1.8rem;
  cursor: pointer;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, transform 0.3s ease;

  transform: rotate(${({ open }) => (open ? "45deg" : "0deg")});

  &:hover {
    background-color: #0056b3;
    transform: scale(1.1) rotate(${({ open }) => (open ? "45deg" : "0deg")});
  }
`;

const DropUp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: center;
`;

const IconButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #2c3741;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 1.4rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;
