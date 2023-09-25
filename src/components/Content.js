import React from "react";
import "./Content.css";
import { dishes } from "../data/dishes.js"


const Content = (props) => {

 /*  const dishHandler = (i) => props.calculateDay(props.dishes[i].id); */

  return (
    <div id="dishes">
      {dishes?.map((dish, index) => {
        return (
          <div className="single--dish" key={index}> 
            <div className="single--dish__image">
              <img src={require('../images/dish1.PNG')} alt="dish1" className="image--file" />
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
              <button className="showRecipe_btn" >Dodaj do jadłospisu</button>
            </div>
          </div>
        )
      })}
      
    </div>
  )
};

export default Content;
