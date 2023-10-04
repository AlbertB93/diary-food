import React from "react";
import "../scss/Content.css";
import { dishes } from "../data/dishes.js";
import Day from "./Day";
import Recipe from "./Recipe";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Szakszuka - ręcznie",
      kcal: 0,
      fats: 0,
      carbons: 0,
      proteins: 0,
    };
  }

  addMeal = (index) => {
    /*
    this.setState((state) =>{ 
       {state: dishes[index].title }
    ); */

    /*     this.setState((state) => {
      {
        state.title = dishes[index].title;
      }
    }); */

    this.setState((state) => (state.title = dishes[index].title));

    console.log("Aktualny tytuł: " + this.state.title);

    this.setState({ kcal: dishes[index].kcal });
    this.setState({ fats: dishes[index].fats });
    this.setState({ carbons: dishes[index].carbons });
    this.setState({ proteins: dishes[index].proteins });
    /* 
    const node = document.createElement("li");
    const textnode = document.createTextNode("Water");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
 */
  };

  addToDayMenu = (index) => {
    this.addMeal(index);
    console.log("Aktualny tytuł: " + this.state.title.value);
    let nowyDiv = document.createElement("div");
    nowyDiv.classList.add("meal");
    let nowyDiv2 = document.createElement("div");
    nowyDiv2.classList.add("meal--title");
    nowyDiv2.innerHTML = this.state.title;

    nowyDiv.appendChild(nowyDiv2);

    document.getElementById("test").appendChild(nowyDiv);
  };

  showRecipe = (index) => {
    let recipeContainer = document.getElementById("recipe--container");
    let recipeValues = document.getElementsByClassName("single--dish__values");
    let singleDish = document.getElementsByClassName("single--dish");
    let dishes = document.getElementById("dishes");
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
                    className="simple_btn"
                    onClick={() => this.showRecipe(index)}
                  >
                    Pokaż przepis
                  </button>
                  <button
                    className="simple_btn"
                    onClick={() => this.addToDayMenu(index)}
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
