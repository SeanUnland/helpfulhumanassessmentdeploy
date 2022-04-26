import React, { useState } from "react";

const RandomColorButton = ({ currentColor, onSetColor }) => {
  const [randomColor, setRandomColor] = useState("");

  const handleAdd = (event) => {
    console.log("its working");
    console.log(event);
    event.preventDefault();

    setRandomColor(currentColor);
  };
  return (
    <div>
      <button onClick={handleAdd}>Random Color</button>
      <div>{randomColor}</div>
    </div>
  );
};

export default RandomColorButton;
