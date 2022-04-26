import React, { useState } from "react";
import "./top-nav.css";
import Button from "@mui/material/Button";

const TopNav = ({}) => {
  const [searchColor, setSearchColor] = useState("");
  const [newColor, setNewColor] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setSearchColor(event.target.value);
  };

  const handleAdd = (event) => {
    console.log(event);
    setSearchColor(newColor);
    setNewColor("");
  };
  return (
    <div className="top-nav">
      <input
        className="search-bar"
        type="text"
        placeholder="Search..."
        value={searchColor}
        onChange={handleChange}
      ></input>
      <div className="search-button">
        <Button onClick={handleAdd} variant="outlined">
          Search
        </Button>
      </div>
    </div>
  );
};

export default TopNav;
