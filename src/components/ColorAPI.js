import React, { useState, useEffect } from "react";
import axios from "axios";
import "./color-api.css";

const ColorAPI = ({}) => {
  const [findColor, setFindColor] = useState([]);

  const colorData = async () => {
    let response = await axios.get("https://www.colr.org/json/color/random");
    console.log(response.data.colors);
    setFindColor(response.data.colors);
  };

  useEffect(() => {
    colorData();
  }, []);

  return (
    <div className="fetched-data">
      <h4>Fetching Random Color Data From API ⤵️</h4>
      <div>
        {findColor.map((value) => {
          return <p key={value.id}>Hex: #{value.hex}</p>;
        })}
      </div>
    </div>
  );
};

export default ColorAPI;
