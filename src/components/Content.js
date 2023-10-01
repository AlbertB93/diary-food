import React from "react";
import "../scss/Content.css";
import { dishes } from "../data/dishes.js";
import Day from "./Day";
import Recipe from "./Recipe";

class Content extends React.Component {
  /*  const dishHandler = (i) => props.calculateDay(props.dishes[i].id); */

  state = {
    title: "Szakszuka - ręcznie",
    kcal: 0,
    fats: 0,
    carbons: 0,
    proteins: 0,
    isDisplay: false,
  };

  addMeal = (index) => {
    console.log("Posiłek: " + dishes[index].title);
    this.setState({ title: dishes[index].title });
    this.setState({ kcal: dishes[index].kcal });
    this.setState({ fats: dishes[index].fats });
    this.setState({ carbons: dishes[index].carbons });
    this.setState({ proteins: dishes[index].proteins });
  };

  showRecipe = (index) =>{
    let recipeContainer = document.getElementById('recipe--container');
    let recipeValues = document.getElementsByClassName('single--dish__values');
    let singleDish = document.getElementsByClassName('single--dish');
    this.addMeal(index);
    recipeContainer.style.display = "flex";
    for (let i = 0; i < recipeValues.length; i++){
      recipeValues[i].style.display = "none"
      singleDish[i].style.opacity = 0.5;
    }
    singleDish[index].style.opacity=1;
  }

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
                  <button className="showRecipe_btn" onClick={() => this.showRecipe(index)}>
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
        </div>
        <Day posilek={this.state} funkcja={() => this.addMeal()} />
        <Recipe posilek={this.state} />
      </div>
    );
  }
}

export default Content;
