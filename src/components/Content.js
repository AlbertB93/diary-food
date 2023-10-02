import React from "react";
import "../scss/Content.css";
import { dishes } from "../data/dishes.js";
import Day from "./Day";
import Recipe from "./Recipe";

class Content extends React.Component {
  state = {
    title: "Szakszuka - ręcznie",
    kcal: 0,
    fats: 0,
    carbons: 0,
    proteins: 0,
  };

  addMeal = (index) => {
    this.setState({ title: dishes[index].title });
    this.setState({ kcal: dishes[index].kcal });
    this.setState({ fats: dishes[index].fats });
    this.setState({ carbons: dishes[index].carbons });
    this.setState({ proteins: dishes[index].proteins });
  };

  showRecipe = (index) => {
    let recipeContainer = document.getElementById("recipe--container");
    let recipeValues = document.getElementsByClassName("single--dish__values");
    let singleDish = document.getElementsByClassName("single--dish");
    let dishes = document.getElementById("dishes");
    let element = document.getElementById("recipe--container");
    this.addMeal(index);
    recipeContainer.style.display = "flex";
    for (let i = 0; i < recipeValues.length; i++) {
      recipeValues[i].style.display = "none";
      singleDish[i].style.opacity = 0.5;
      dishes.style.height = "220px";
    }
    singleDish[index].style.opacity = 1;
  };

  render() {
    return (
      <div id="content--container">
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
                  <ul className="list--values">
                    <li>Wartość energetyczna: {dish.kcal} kcal.</li>
                    <li>Tłuszcze: {dish.fats} g. </li>
                    <li>Węglowodany: {dish.carbons} g.</li>
                    <li>Białko: {dish.proteins} g.</li>
                  </ul>
                </div>
                <div className="single--dish__buttons">
                  <button
                    className="showRecipe_btn"
                    onClick={() => this.showRecipe(index)}
                  >
                    Pokaż przepis
                  </button>
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
          <Recipe selectedMeal={this.state} />
        </div>
        <Day selectedMeal={this.state} />
      </div>
    );
  }
}

export default Content;
