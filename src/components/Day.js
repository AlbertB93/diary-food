import React, { useState } from "react";
import "../scss/Day.css";
/* import { mealsDay } from "../data/mealsDay"; */

const Day = (props) => {
  return (
    <div id="day">
      <div className="single--dish__image">
        <img
          src={require("../images/felek.png")}
          alt="dish1"
          className="image--file"
        />
      </div>
      <h3>Aktualny jadłospis: </h3>
      {/*       {meals.map((meal, index) => {
        return (
          <div className="meal" key={index}>
            {index + 1}. {meal.title}: kcal: {meal.kcal}, tłuszcze: {meal.fats},
            węgle: {meal.carbons}, białko: {meal.proteins},
          </div>
        );
      })} */}

      <div className="meal">
        <div className="meal--title"> 
          <div className="meal--title__image--day">
            <img
              src={require("../images/dish1.PNG")}
              alt="dish1"
              className="image--file"
            />
          </div>
          {props.selectedMeal.title}
        </div>

        <div className="meal--values">
          kcal: {props.selectedMeal.kcal}, tłuszcze:{props.selectedMeal.fats},
          węgle: {props.selectedMeal.carbons}, białko:{" "}
          {props.selectedMeal.proteins};
        </div>
      </div>

      <div id="test"> test w Dayjs</div>

      <h3>Podsumowanie: </h3>
      {
        <ul>
          <li>Wartość energetyczna: 0 kcal. </li>
          <li>Tłuszcze: 0 kcal. </li>
          <li>Węglowodany: 0kcal. </li>
          <li>Białka: 0 kcal. </li>
        </ul>
      }
      <button className="simple_btn">Oblicz</button>
    </div>
  );
};

export default Day;
