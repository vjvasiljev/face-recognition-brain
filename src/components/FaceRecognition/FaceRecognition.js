import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  const { leftCol, topRow, bottomRow, rightCol } = box;

  const renderImage = url => {
    return url ? (
      <div className="center ma">
        <div className="absolute mt2">
          <img
            id="inputImage"
            alt="face detection"
            src={imageUrl}
            width="500px"
            heigth="auto"
          />
          <div
            className="bounding-box"
            style={{
              top: topRow,
              left: leftCol,
              bottom: bottomRow,
              right: rightCol
            }}
          />
        </div>
      </div>
    ) : (
      <div />
    );
  };
  return renderImage(imageUrl);
};

export default FaceRecognition;
