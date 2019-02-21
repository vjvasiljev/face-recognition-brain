import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img alt="face detection" src={imageUrl} width="500px" heigth="auto" />
      </div>
    </div>
  );
};

export default FaceRecognition;
