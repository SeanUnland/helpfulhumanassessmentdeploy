import React from "react";
import "./color-swatch.css";

const ColorSwatch = ({ currentColor, onSetColor }) => {
  const colorChange = (event) => {
    console.log("Color Change", event.target.value);
    onSetColor(event.target.value);
  };

  return (
    <div className="color-selector-box">
      <h4 className="select-a-color">Select A Color</h4>
      <input
        type="color"
        value={currentColor}
        className="color-swatch"
        onChange={colorChange}
      ></input>
    </div>
  );
};

export default ColorSwatch;
