import "./App.css";
import React, { useState, useMemo } from "react";
import ColorSwatch from "./components/ColorSwatch";
import Grid from "./components/Grid";
import Paging from "./components/Paging";
import TopNav from "./components/TopNav";
import ColorAPI from "./components/ColorAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const offCell = {
  on: false,
  color: "#000000",
};

const initialCells = Array.from({ length: 40 }, () => offCell);

function App() {
  const [currentColor, setCurrentColor] = useState("#7CFFCB");
  const [cells, setCells] = useState(initialCells);

  const colorSwatch = useMemo(
    () => [
      ...new Set(cells.filter((cell) => cell.on).map((cell) => cell.color)),
    ],
    [cells]
  );

  const colorString = useMemo(
    () => cells.map((cell) => cell.color.slice(1)).join(","),
    [cells]
  );

  return (
    <div className="App">
      <TopNav />
      <div className="color-container">
        <ColorSwatch currentColor={currentColor} onSetColor={setCurrentColor} />
        <FontAwesomeIcon icon="coffee" />
        <div className="color-swatch-container">
          {colorSwatch.map((color) => (
            <div
              key={color}
              onClick={() => setCurrentColor(color)}
              style={{ background: color }}
              className="color-swatch"
            ></div>
          ))}
        </div>
        <Grid currentColor={currentColor} cells={cells} setCells={setCells} />
      </div>
      <h4 className="hex-code">Hex Code of Color ⤵️</h4>
      <p className="color-string"> {colorString}</p>
      <div>
        <ColorAPI />
      </div>
      <div>
        <Paging />
      </div>
    </div>
  );
}

export default App;