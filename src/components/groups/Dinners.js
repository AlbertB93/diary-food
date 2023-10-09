import React from "react";
import "../../scss/GroupsOfMeals.css";
import { dishes } from "../../data/dishes.js";

const Dinners = () => {
  return (
    <div id="dinners--container">
      <div className="title--group">Obiady</div>;
      <div id="dishes">
        {dishes
          ?.filter((dish) => dish.group == "dinner")
          .map((dish, index) => {
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
      </div>
    </div>
  );
};

export default Dinners;
