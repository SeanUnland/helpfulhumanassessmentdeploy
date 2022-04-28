import React, { useState } from "react";
import "./top-nav.css";
import Button from "@mui/material/Button";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

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
      <div className="account-box-icon">
        <AccountBoxIcon sx={{ fontSize: 50 }} />
      </div>
      <div className="search-input-and-button">
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
    </div>
  );
};

export default TopNav;
