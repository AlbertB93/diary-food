import React from "react";
import "../scss/Content.css";
import { dishes } from "../data/dishes.js";
import Day from "./Day";
import Recipe from "./Recipe";
import Form from "./Form";
import Breakfasts from "./groups/Breakfasts"
import Dinners from "./groups/Dinners";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Szakszuka - ręcznie",
      imageState: " ",
      kcal: 0,
      fats: 0,
      carbons: 0,
      proteins: 0,
    };
  }

  addToDayMenu = (index) => {
  
/*     let testowy = document.getElementById('testowy');
    console.log("Aktualny tytuł addTOday: " + this.state.title);
    let nowyDiv = document.createElement("div");
    nowyDiv.classList.add("meal");
    let nowyDiv2 = document.createElement("div");
    nowyDiv2.classList.add("meal--title");
    nowyDiv2.innerHTML = dishes[index].title;
    let nowyDiv3 = document.createElement("div");
    nowyDiv3.classList.add("meal--values");
    nowyDiv3.innerHTML = dishes[index].kcal;
    nowyDiv3.innerHTML = dishes[index].fats;
    nowyDiv3.innerHTML = dishes[index].carbons;
    nowyDiv3.innerHTML = dishes[index].proteins;

    nowyDiv.appendChild(nowyDiv2);
    nowyDiv.appendChild(nowyDiv3);
    testowy.appendChild(nowyDiv);
 */
    const MEAL_CONTAINER = document.getElementById('meal--container');
    const MEAL = document.createElement ("div");
    MEAL.classList.add("meal");
    const MEAL_TITLE = document.createElement("div");
    MEAL_TITLE.classList.add("meal--title")
    const MEAL_VALUES = document.createElement("div");
    MEAL_VALUES.classList.add("meal--values")
    MEAL_TITLE.innerHTML = dishes[index].title;
    const MEAL_KCAL = document.createElement("p");
    const MEAL_FATS = document.createElement("p");
    const MEAL_CARBONS = document.createElement("p");
    const MEAL_PROTEINS = document.createElement("p");
    MEAL_KCAL.classList.add("meal--kcal")
    MEAL_FATS.classList.add("meal--fats")
    MEAL_CARBONS.classList.add("meal--carbons")
    MEAL_PROTEINS.classList.add("meal--proteins")
    MEAL_KCAL.innerHTML = "kcal: " + dishes[index].kcal;
    MEAL_FATS.innerHTML = "tłuszcze: " + dishes[index].fats;
    MEAL_CARBONS.innerHTML = "węglowodany: " + dishes[index].carbons;
    MEAL_PROTEINS.innerHTML = "białko: " + dishes[index].proteins;


    MEAL_VALUES.appendChild(MEAL_KCAL)
    MEAL_VALUES.appendChild(MEAL_FATS)
    MEAL_VALUES.appendChild(MEAL_CARBONS)
    MEAL_VALUES.appendChild(MEAL_PROTEINS)
    MEAL.appendChild(MEAL_TITLE);
    MEAL.appendChild(MEAL_VALUES);
    MEAL_CONTAINER.appendChild(MEAL)

    
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
 {/*         <Form /> */}
        <div id="dishes">         
          {dishes?.map((dish, index) => {
            return (
              <div className="single--dish" key={index}>
                <div className="single--dish__image">
                  <img
                    src={dish.imageState}
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
          {/*    <button onClick={this.showBreakfasts} > Pokaż Śniadania</button> */}
          <Recipe selectedMeal={this.state} />

        </div>
        <Breakfasts />
        <Dinners />
        <div id="day--container">
          <Day 
          selectedMeal={this.state} 
          funkcjaTestowa = {this.addToDayMenu}/>
        </div>

      </div>
    );
  }
}

export default Content;
