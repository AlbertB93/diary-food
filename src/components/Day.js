import React, { useState } from "react";
import "../scss/Day.css";
/* import { mealsDay } from "../data/mealsDay"; */

const Day = (props) => {
  return (
    <div id="day">
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
        <p>2.</p> {props.selectedMeal.title}: kcal: {props.selectedMeal.kcal},
        tłuszcze:{props.selectedMeal.fats}, węgle: {props.selectedMeal.carbons},
        białko: {props.selectedMeal.proteins},
      </div>

      <h3>Podsumowanie: </h3>
      {
        <ul>
          <li>Wartość energetyczna: 0 kcal. </li>
          <li>Tłuszcze: 0 kcal. </li>
          <li>Węglowodany: 0kcal. </li>
          <li>Białka: 0 kcal. </li>
        </ul>
      }
      <button>Oblicz</button>
    </div>
  );
};

export default Day;
