import React, { useState } from "react";
import "./random-color-button.css";

const RandomColorButton = ({ currentColor }) => {
  const [randomColor, setRandomColor] = useState("");

  const handleAdd = (event) => {
    console.log("its working");
    console.log(event);
    event.preventDefault();

    setRandomColor(currentColor);
  };
  return (
    <div>
      <button className="random-color-button" onClick={handleAdd}>
        Random Color
      </button>
      <div>{randomColor}</div>
    </div>
  );
};

export default RandomColorButton;
