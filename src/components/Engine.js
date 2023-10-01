import React from "react";
import Content from "./Content";
import Menu from "./Menu";
import "./../scss/App.css";

class Engine extends React.Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Content />
      </div>
    );
  }
}

export default Engine;
