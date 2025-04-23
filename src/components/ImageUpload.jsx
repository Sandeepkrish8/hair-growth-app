import React, { useState } from 'react';
import './ImageUpload.css';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleClearImage = () => {
    setImage(null);
    setPreview(null);
    setPrediction("");
  };

  const handlePredict = async () => {
    setLoading(true);
    setPrediction(""); // Reset previous prediction

    // Simulate a loading state (real model prediction logic can go here)
    setTimeout(() => {
      // Fake prediction logic for demo
      const outcomes = ["Healthy Hair", "Hair Thinning", "Dry Scalp", "Dandruff Detected"];
      const result = outcomes[Math.floor(Math.random() * outcomes.length)];
      setPrediction(result);
      setLoading(false);
    }, 2000); // Simulate a 2-second prediction time
  };

  return (
    <div className="image-upload-container">
      <h2>📷 Upload Your Hair Photo</h2>

      <input type="file" accept="image/*" onChange={handleImageChange} />

      {preview && (
        <div className="preview-container">
          <img src={preview} alt="Hair preview" className="preview-img" />
          <button onClick={handleClearImage} className="clear-btn">Clear Image</button>
        </div>
      )}

      {image && !loading && (
        <button onClick={handlePredict} className="predict-btn">Predict Condition</button>
      )}

      {loading && <p className="loading">🔄 Predicting...</p>}

      {prediction && !loading && (
        <p className="prediction-result">🧠 Result: <strong>{prediction}</strong></p>
      )}
    </div>
  );
};

export default ImageUpload;
