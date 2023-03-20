import React, { useState } from "react";
import { galleryIcon } from "../../../images/images";
import styles from "./styles.module.css";

function ImageUpload() {
  const [dragging, setDragging] = useState(false);
  const [image, setImage] = useState(null);

  function handleDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  }

  function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  }

  function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  }

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5 MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  }

  function handleInputChange(e) {
    const file = e.target.files[0];
    if (file.size >= 4 * 1024 * 1024) {
      alert("File size must be less than 5 MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className={`${styles.wrapper} ${dragging ? styles.dragging : ""}`}>
      <div
        className={`${styles.dropzone} `}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {!image && (
          <img src={galleryIcon} alt="Droppedimage" className={styles.icon} />
        )}
        {image ? (
          <img
            src={image}
            alt="Droppedimage"
            className={styles.upLoadedImage}
          />
        ) : (
          <div className={styles.textContainer}>
            <p className={styles.text}>Drop Your Files Here</p>
            <span className={styles.warning}>Maximum size of image 4 MB</span>
          </div>
        )}
      </div>
      <label htmlFor="upload" className={styles.button}>
        <span className={styles.buttonText}>Browse Images</span>

        <input
          type="file"
          id="upload"
          onChange={handleInputChange}
          accept="image/*"
          className={styles.uploadInput}
        />
      </label>
    </div>
  );
}

export default ImageUpload;
