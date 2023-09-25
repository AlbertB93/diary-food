import React from "react";
import Content from "./Content";
import Day from "./Day";
import Menu from "./Menu";
import "../App.css";

class Engine extends React.Component {
  state = {};

  calculateDay = (id) => {
    const index = this.state.dishes.findIndex((x) => x.id === id);
    const newSummaryDay = this.state.summaryDay;
    newSummaryDay.kcal = newSummaryDay.kcal + this.state.dishes[index].kcal;

    /*        this.setState( {summaryDay: newSummaryDay})  */
  };

  render() {
    /*         const dishes = this.state.dishes.map(e => {
            return <div key={e.id}> {e.title}</div>
        }) */

    return (
      <div className="App">
        <Menu />
        <Content dishes={this.state.dishes} calculateDay={this.calculateDay} />
        <Day summaryDay={this.state.summaryDay} />
      </div>
    );
  }
}

export default Engine;
