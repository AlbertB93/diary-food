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
   
    const MEAL_IMG_DAY= document.createElement("div");
    MEAL_IMG_DAY.classList.add("meal--title__image--day");
    const MEAL_IMG = document.createElement("img");
    MEAL_IMG.classList.add("image--file");
    MEAL_IMG.src = dishes[index].imageState;
    
    MEAL_IMG_DAY.appendChild(MEAL_IMG)
    MEAL_TITLE.appendChild(MEAL_IMG_DAY)

    MEAL_VALUES.appendChild(MEAL_KCAL)
    MEAL_VALUES.appendChild(MEAL_FATS)
    MEAL_VALUES.appendChild(MEAL_CARBONS)
    MEAL_VALUES.appendChild(MEAL_PROTEINS)
    MEAL.appendChild(MEAL_TITLE);
    MEAL.appendChild(MEAL_VALUES);
    MEAL_CONTAINER.appendChild(MEAL)


    this.addMeal(index);


    
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
   this.addMeal(index); 
    recipeContainer.style.display = "flex";
    for (let i = 0; i < recipeValues.length; i++) {
      recipeValues[i].style.display = "none";
      singleDish[i].style.opacity = 0.5;
      dishes.style.height = "220px";
    }
    singleDish[index].style.opacity = 1;
  };


  prevMeal = ()  => {
    let przepis1 = document.getElementsByClassName('single--dish')[0];
    let przepis2 = document.getElementsByClassName('single--dish')[1];
    let przepis3 = document.getElementsByClassName('single--dish')[2];
    przepis1.classList.add('active');
    przepis2.classList.add('active');
    przepis3.classList.add('active');
  };

  nextMeal = ()  => {
    let dlugoscActivow = document.getElementsByClassName('active').length;
/*     let przepis2 = przepis1.title; */
    console.log("długość ? " + dlugoscActivow)

    let theNew = document.getElementsByClassName('single--dish')[dlugoscActivow+1];
    let theFirst = document.getElementsByClassName('single--dish')[dlugoscActivow-2];
    theNew.classList.add('active');
    theFirst.classList.remove('active');
    
/*     przepis1.classList.add('active');
    przepis2.classList.add('active');
    przepis3.classList.add('active'); */
  };


  render() {
    return (
      <div id="content--container">
   {/*        <Form />  */}

        <div id="dishes">      
          <button className="arrow--btn__left" onClick={() => this.prevMeal()}> </button>
          {dishes?.map((dish, index) => {
            return (
              <div className="single--dish hidden" key={index}>
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
    
          <button className="arrow--btn__right" onClick={() => this.nextMeal()}> </button>

          <Recipe selectedMeal={this.state} />
          {() => this.prevMeal().bind(this)}
        </div>
        <Breakfasts />
        <Dinners />
        <div id="day--container">
          <Day 
          selectedMeal={this.state} 
        />
        </div>

      </div>
    );
  }
}

export default Content;
