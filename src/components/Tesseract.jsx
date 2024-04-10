import React, { useState } from "react";
import Tesseract from "tesseract.js";
import "./Global.css";

const ImageToTextConverter = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [convertedText, setConvertedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (upload) => {
      setImageSrc(upload.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleConvertText = async () => {
    setIsLoading(true);

    try {
      const {
        data: { text },
      } = await Tesseract.recognize(
        imageSrc,
        "eng", // language: English
        { logger: (info) => console.log(info) }
      );

      setConvertedText(text);
    } catch (error) {
      console.error("Error during text conversion:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="tesseract-container " style={{ textAlign: "center" }}>
      <h1 className="bg-tansparent">
        Image to Text Converter using TesseractJs
      </h1>

      <div class="file-input-container">
        <input
          type="file"
          class="file-input"
          id="myFile"
          onChange={handleImageChange}
          accept="image/*"
        />
        <label for="myFile" class="file-input-label bg-tansparent">
          Choose File
        </label>
      </div>

      {imageSrc && (
        <div style={{ margin: "20px" }}>
          <img
            src={imageSrc}
            alt="Selected"
            style={{ maxWidth: "100%", maxHeight: "300px" }}
          />
        </div>
      )}

      {/* <button onClick={handleConvertText} disabled={!imageSrc || isLoading}>
        Convert Text
      </button>

      {isLoading && <p>Converting...</p>}

      {convertedText && (
        <div style={{ marginTop: "20px" }}>
          <h2>Converted Text:</h2>
          <p>{convertedText}</p>
        </div>
      )} */}
      <button
        className="file-input-label"
        onClick={handleConvertText}
        disabled={!imageSrc || isLoading}
      >
        Convert Text
      </button>

      {isLoading && <p className="loading-text">Converting...</p>}

      {convertedText && (
        <div className="converted-text-container">
          <h2>Converted Text:</h2>
          <div className="converted-text">
            <p>{convertedText}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageToTextConverter;
