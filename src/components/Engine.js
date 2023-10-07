import React from "react";
import Content from "./Content";
import Menu from "./Menu";
import "./../scss/App.css";

class Engine extends React.Component {

  


  showBreakfasts = () => {
    let element = document.getElementById('breakfasts--container')
    let element2 = document.getElementById('dishes')
    console.log(element);
    element.style.display = "flex";
    element2.style.display = "none";
  }



  render() {
    return (
      <div className="App">
        <Menu showBreakfasts={this.showBreakfasts}/>
        <Content />
      </div>
    );
  }
}

export default Engine;
