import React from "react";
import Content from "./Content";
import Day from "./Day";
import Menu from "./Menu";
import "../App.css";


class Engine extends React.Component {

  render() {

    return (
      <div className="App">
        <Menu />
        <Content />
        <Day  />
      </div>
    );
  }
}

export default Engine;
