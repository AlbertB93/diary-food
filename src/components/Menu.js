import React from "react";
import "../scss/Menu.css";

const Menu = (props) => {
  return (
    <div id="menu">
      <h2>Menu</h2>
      <ul>
        <li>
          <button className="menu--btn" onClick={props.showHomePage}>
            Strona główna
          </button>
        </li>
        <li>
          <button className="menu--btn" onClick={props.showBreakfasts}>
            Śniadania
          </button>
        </li>
        <li>
          <button className="menu--btn" onClick={props.showDinners}>
            Obiady
          </button>
        </li>
        <li>Kolacje</li>
        <li>Przekąski</li>
        <li>Domowe fastfoody</li>
        <li>Kalorie - niestotne :) </li>
      </ul>
    </div>
  );
};

export default Menu;
