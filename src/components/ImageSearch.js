import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FaSearch, FaCrop, FaCropAlt } from "react-icons/fa";
import { MdImageSearch, MdOutlineFileUpload } from "react-icons/md";
import { Button } from "../styles/Button";
import Cropper from "react-easy-crop";
import Slider from "@mui/material/Slider"; // for zoom
import { getCroppedImg } from "./CropImage"; // you'll write this util
import SearchResultPopup from "./SearchResultPopup";

const ImageSearch = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [description, setDescription] = useState("");
  const [fileName, setFileName] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [showCropper, setShowCropper] = useState(false);
  const [originalPreview, setOriginalPreview] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleImageChange = (file) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(file);
      setOriginalPreview(imageUrl); // store original
      setPreview(imageUrl);
      setFileName(file.name);
      setShowCropper(true); // auto show cropper
    }
  };

  const handleFileInputChange = (e) => {
    handleImageChange(e.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleImageChange(e.dataTransfer.files[0]);
    }
  };

  const handleCrop = async () => {
    const croppedImage = await getCroppedImg(preview, croppedAreaPixels);
    setPreview(croppedImage);
    setShowCropper(false);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Searching with:", { image, description });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Fetch or compute results
    setSearchResults([
      {
        name: "Alien Cat Meme",
        img: "https://i.kym-cdn.com/entries/icons/mobile/000/041/399/cover1.jpg",
        url: "https://knowyourmeme.com/memes/alien-cat",
      },
      {
        name: "Pop Cat Meme",
        img: "https://i.kym-cdn.com/entries/icons/mobile/000/035/692/cover1.jpg",
        url: "https://knowyourmeme.com/memes/pop-meme",
      },
      {
        name: "Doge",
        img: "https://i.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg",
        url: "https://knowyourmeme.com/memes/doge",
      },
      {
        name: "Cheesed to Meet you",
        img: "https://i.kym-cdn.com/entries/icons/mobile/000/035/175/cheesed-.jpg",
        url: "https://knowyourmeme.com/memes/cheesed-to-meet-you",
      },
      {
        name: "An Idiot Sandwich",
        img: "https://i.kym-cdn.com/entries/icons/mobile/000/020/115/idiot_sandwich.jpg",
        url: "https://knowyourmeme.com/memes/an-idiot-sandwich",
      },
    ]);
    setShowPopup(true);
  };

  return (
    <Wrapper>
      <div className="main-container">
        <div className="search-section">
          <div className="icon-align">
            <h2>
              <MdImageSearch className="icon-md" />
            </h2>
            <h2>Search with Image</h2>
          </div>
          <div className="underline"></div>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div
                className={`upload-area ${isDragging ? "dragging" : ""}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <label
                  htmlFor="upload-input"
                  className="upload-label icon-align"
                >
                  <MdOutlineFileUpload className="icon-md" />
                  Click or drop image here
                </label>
                <input
                  id="upload-input"
                  type="file"
                  accept="image/*"
                  onChange={handleFileInputChange}
                  hidden
                />
                {fileName && <p className="file-name">{fileName}</p>}

                {preview && !showCropper && (
                  <>
                    <div className="preview-img">
                      <img src={preview} alt="Preview" />
                    </div>
                    <Button
                      type="button"
                      onClick={() => {
                        setPreview(originalPreview);
                        setShowCropper(true);
                      }}
                      style={{ marginTop: "1rem" }}
                    >
                      <div className="icon-align">
                        {" "}
                        <FaCrop className="icon" />
                        Re-Crop
                      </div>
                    </Button>
                  </>
                )}

                {preview && showCropper && (
                  <>
                    <div className="crop-container">
                      <Cropper
                        image={preview}
                        crop={crop}
                        zoom={zoom}
                        aspect={1}
                        onCropChange={setCrop}
                        onZoomChange={setZoom}
                        onCropComplete={(_, croppedAreaPixels) =>
                          setCroppedAreaPixels(croppedAreaPixels)
                        }
                      />
                    </div>
                    <Slider
                      className="zoom-slider"
                      min={1}
                      max={3}
                      step={0.1}
                      value={zoom}
                      onChange={(_, value) => setZoom(value)}
                    />
                    <div className="crop-button-wrap">
                      <Button onClick={handleCrop}>
                        <div className="icon-align">
                          <FaCropAlt className="icon" />
                          Crop & Continue
                        </div>
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="right-side">
              <input
                type="text"
                placeholder="Add image description (optional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="description-text"
              />
              <Button className="search-btn icon-align" type="submit">
                <FaSearch className="icon" />
                Search
              </Button>
            </div>

            {showPopup && (
              <SearchResultPopup
                imageSrc={preview}
                onReCrop={() => {
                  setShowCropper(true);
                  setShowPopup(false);
                }}
                results={searchResults}
                onClose={() => setShowPopup(false)}
              />
            )}
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main-container {
    background: linear-gradient(180deg, #fff, rgb(247, 249, 252));
    padding: 3rem;
  }

  .search-section {
    max-width: 600px;
    margin: 4rem auto;
    padding: 2rem;

    border-radius: 12px;
    // box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-family: "Segoe UI", sans-serif;
  }

  h2 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    color: #333;
    font-weight: bold;
  }
  h3 {
    font-weight: bold;
  }

  .underline {
    width: 80px;
    height: 4px;
    background: #007bff;
    margin: 0 auto 2rem;
    border-radius: 5px;
    margin-bottom: 5rem;
  }

  .upload-area {
    /* Remove cursor: pointer; */
    padding: 2rem;
    border: 2px dashed #ccc;
    border-radius: 10px;
    background: #f9f9f9;
    transition: background 0.3s;
  }

  .upload-area.dragging {
    background: #e9e9e9;
    border-color: #999;
  }

  .upload-label {
    display: block;
    font-size: 1.6rem;
    color: #444;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 1rem;
    border-radius: 8px;

    &:hover {
      color: #007bff;
      transform: scale(1.03);
    }
  }

  .file-name {
    margin-top: 10px;
    font-size: 0.9rem;
    color: #444;
  }

  .preview-img {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }

  .preview-img img {
    max-width: 100%;
    max-height: 300px;
    border-radius: 8px;
    object-fit: contain;
    border: 1px solid #ccc;
    background: #f4f4f4;
  }

  .description-text {
    width: 100%;
    margin: 1.5rem 0;
    padding: 1.4rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1.2rem;
  }

  .search-btn {
    width: 100%;
    padding: 1rem;
    color: #fff;
    font-size: 1.4rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  // .search-btn:hover {
  //   background: #000;
  // }

  .icon-align {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
  .icon {
    font-size: 2rem;
  }
  .icon-md {
    font-size: 3rem;
  }

  .crop-container {
    position: relative;
    width: 100%;
    height: 400px;
    background: #333;
    margin-top: 2rem;
    border-radius: 8px;
    overflow: hidden;
  }

  .crop-container .MuiSlider-root {
    position: absolute;
    bottom: 10px;
    left: 10%;
    width: 80%;
    z-index: 10;
    color: white;
  }

  .crop-container button {
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }

  .zoom-slider {
    margin-top: 1rem;
    width: 100%;
  }

  .crop-button-wrap {
    margin-top: 1rem;
    text-align: center;
  }
`;

export default ImageSearch;
