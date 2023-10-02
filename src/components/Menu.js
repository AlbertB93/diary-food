import React from "react";
import "../scss/Menu.css";

const Menu = (props) => {
  return (
    <div id="menu">
      <div className="single--dish__image">
        <img
          src={require("../images/felek.png")}
          alt="dish1"
          className="image--file"
        />
      </div>
      <h2>Menu</h2>
      <ul>
        <li>Śniadania</li>
        <li>Obiady</li>
        <li>Kolacje</li>
        <li>Przekąski</li>
        <li>Domowe fastfoody</li>
        <li>Kalorie - niestotne :) </li>
      </ul>
    </div>
  );
};

export default Menu;
