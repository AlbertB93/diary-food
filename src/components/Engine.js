import React from "react";
import Content from "./Content";
import Menu from "./Menu";
import "./../scss/App.css";

class Engine extends React.Component {
  showHomePage = () => {
    const BREAKFAST_CONTAINER = document.getElementById(
      "breakfasts--container"
    );
    const HOME_VIEW = document.getElementById("dishes");
    const DINNERS_CONTAINER = document.getElementById("dinners--container");
    HOME_VIEW.style.display = "flex";
    BREAKFAST_CONTAINER.style.display = "none";
    DINNERS_CONTAINER.style.display = "none";
  };

  showBreakfasts = () => {
    let element = document.getElementById("breakfasts--container");
    let element2 = document.getElementById("dishes");
    console.log(element);
    element.style.display = "flex";
    element2.style.display = "none";
  };

  showDinners = () => {
    let element = document.getElementById("dinners--container");
    let element2 = document.getElementById("dishes");
    console.log(element);
    element.style.display = "flex";
    element2.style.display = "none";
  };

  render() {
    return (
      <div className="App">
        <Menu
          showBreakfasts={this.showBreakfasts}
          showHomePage={this.showHomePage}
          showDinners={this.showDinners}
        />
        <Content />
      </div>
    );
  }
}

export default Engine;
