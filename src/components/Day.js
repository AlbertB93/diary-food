import React, { useState } from "react";
import "../scss/Day.css";
import { mealsDay } from "../data/mealsDay";

const Day = (props) => {

  const [kcalDay, setKcalDay] = useState(0);
  const [fatsDay, setFatsDay] = useState(0);
  const [carbonsDay, setCarbonsDay] = useState(0);
  const [proteinsDay, setProteinsDay] = useState(0);

  const [meals, setMeals] = useState(mealsDay);
  
  const calculateDay = () => {
    setKcalDay(kcalDay + 100);
    setFatsDay(fatsDay + 100);
    setCarbonsDay(carbonsDay + 100);
    setProteinsDay(proteinsDay + 100);
  }; 

  const addToDay = () => {
      const newMeals = [...meals];
      newMeals.push({
        id: 10,
        title: props.posilek.title,
        kcal: props.posilek.kcal,
        fats: props.posilek.fats,
        carbons: props.posilek.carbons,
        proteins: props.posilek.proteins,

      })
      setMeals(newMeals);
  }

 
  return (
    <div id="day">
      <h3>Aktualny jadłospis: </h3>
      {meals.map((meal, index) => {
        return (
        <div className="meal" key={index}>
          {index+1}. {meal.title}: kcal: {meal.kcal}, tłuszcze:{" "}
          {meal.fats}, węgle: {meal.carbons}, białko:{" "}
          {meal.proteins},
        </div>
        )
      })}

      <div className="meal">
        <p>2.</p> {props.posilek.title}: 
        kcal: {props.posilek.kcal}, 
        tłuszcze:{props.posilek.fats}, 
        węgle: {props.posilek.carbons}, 
        białko: {props.posilek.proteins},
      </div>

      <h3>Podsumowanie: </h3>
      {
        <ul>
          <li>Wartość energetyczna: {kcalDay} kcal. </li>
          <li>Tłuszcze: {fatsDay} kcal. </li>
          <li>Węglowodany: {carbonsDay} kcal. </li>
          <li>Białka: {proteinsDay} kcal. </li>
        </ul>
      }
      <button onClick={addToDay}>Oblicz</button>
    </div>
  );
};

export default Day;
