// src/components/ImageDisplay.js
import React from 'react';

const ImageDisplay = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="Uploaded" />
    </div>
  );
};

export default ImageDisplay;
