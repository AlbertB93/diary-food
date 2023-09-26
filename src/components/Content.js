import React from "react";
import "./Content.css";
import { dishes } from "../data/dishes.js";
import Day from "./Day";

class Content extends React.Component {
  /*  const dishHandler = (i) => props.calculateDay(props.dishes[i].id); */

  state = {
    title: "Szakszuka - ręcznie",
    kcal: 0,
    fats: 0,
    carbons: 0,
    proteins: 0,
  };

  addMeal = (index) => {
    console.log("Posiłek: " + dishes[index].title);
    this.setState({ title: dishes[index].title });
  };

  render() {
    return (
      <div id="dishes">
        {dishes?.map((dish, index) => {
          return (
            <div className="single--dish" key={index}>
              <div className="single--dish__image">
                <img
                  src={require("../images/dish1.PNG")}
                  alt="dish1"
                  className="image--file"
                />
              </div>
              <h3>{dish.title}</h3>
              <div className="single--dish__values">
                <ul>
                  <li>Wartość energetyczna: {dish.kcal} kcal.</li>
                  <li>Tłuszcze: {dish.fats} g. </li>
                  <li>Węglowodany: {dish.carbons} g.</li>
                  <li>Białko: {dish.proteins} g.</li>
                </ul>
              </div>
              <div className="single--dish__buttons">
                <button className="showRecipe_btn">Pokaż przepis</button>
                <button
                  className="showRecipe_btn"
                  onClick={() => this.addMeal(index)}
                >
                  Dodaj do jadłospisu
                </button>
              </div>
            </div>
          );
        })}
        <Day title={this.state.title} />
        <h2>Aktualnie wybrany posiłek: </h2>
        <div>
          <p className="test"> Nazwa: {this.state.title}</p>
          <p className="test"> Kcal: {this.state.kcal}</p>
          <p className="test">F: {this.state.fats}</p>
          <p className="test">W: {this.state.carbons}</p>
          <p className="test">B: {this.state.proteins}</p>
        </div>
      </div>
    );
  }
}

export default Content;
