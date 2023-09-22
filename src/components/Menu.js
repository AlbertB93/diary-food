import React from "react";
import "./Menu.css";

const Menu = (props) => {
  return (
    <div id="menu">
      <span>Menu</span>
      <ul>
        <li>Śniadania</li>
        <li>Obiady</li>
        <li>Kolacje</li>
        <li>Przekąski</li>
        <li>Domowe fastfoody</li>
      </ul>
    </div>
  );
};

export default Menu;
