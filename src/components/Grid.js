import React from "react";
import "./grid.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

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
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            {cells.map((cell, i) => (
              <CardMedia
                key={i}
                height="140"
                style={{ background: cell.on ? cell.color : "#fffff" }}
                onClick={updateCell(i)}
                onContextMenu={updateCell(i, offCell)}
                className="cell"
              />
            ))}
            {/* <CardMedia
              component="img"
              height="140"
              image=""
              alt="green iguana"
            /> */}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default Grid;
