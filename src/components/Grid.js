import React from "react";
import "./grid.css";

const offCell = {
  on: false,
  color: "#00000",
};

const Grid = ({ currentColor, cells, setCells }) => {
  const updateCell = (i, defaultState) => (e) => {
    e.preventDefault();

    setCells(
      cells.map((cell, cellIndex) => {
        if (cellIndex === i) {
          if (defaultState) return defaultState;
          return {
            on: true,
            color: currentColor,
          };
        }
        return cell;
      })
    );
  };

  return (
    <div>
      <div className="grid">
        {cells.map((cell, i) => (
          <div
            key={i}
            style={{ background: cell.on ? cell.color : "#fffff" }}
            onClick={updateCell(i)}
            onContextMenu={updateCell(i, offCell)}
            className="cell"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
