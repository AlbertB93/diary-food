import React from "react";
import "./Content.css";



const Content = (props) => {

 const dishHandler = (i) => props.calculateDay(props.dishes[i].id) ;

  return <div id="content--container">
    <div id="dishes">
      <div className="single--dish">
        <div className="single--dish__image">
          <img src={require('../images/dish1.PNG')} alt="dish1" className="image--file" />
        </div>
        <h3>{props.dishes[0].title}</h3>
        <div className="single--dish__values">
          <ul>
            <li>Wartość energetyczna: {props.dishes[0].kcal} kcal.</li>
            <li>Tłuszcze: {props.dishes[0].fats} g. </li>
            <li>Węglowodany: {props.dishes[0].carbons} g.</li>
            <li>Białko: {props.dishes[0].proteins} g.</li>
          </ul>
        </div>
        <div className="single--dish__buttons">
          <button className="showRecipe_btn">Pokaż przepis</button>
          <button className="showRecipe_btn" onClick={dishHandler(0)}>Dodaj do jadłospisu</button>
        </div>
      </div>
      <div className="single--dish">
        <div className="single--dish__image">
          <img src={require('../images/dish2.PNG')} alt="dish1" className="image--file" />
        </div>
        <h3>{props.dishes[1].title}</h3>
        <div className="single--dish__values">
          <ul>
            <li>Wartość energetyczna: {props.dishes[1].kcal} kcal.</li>
            <li>Tłuszcze: {props.dishes[1].fats} g. </li>
            <li>Węglowodany: {props.dishes[1].carbons} g.</li>
            <li>Białko: {props.dishes[1].proteins} g.</li>
          </ul>
        </div>
        <div className="single--dish__buttons">
          <button className="showRecipe_btn">Pokaż przepis</button>
          <button className="showRecipe_btn">Dodaj do jadłospisu</button>
        </div>
      </div>
      <div className="single--dish">
        <div className="single--dish__image">
          <img src={require('../images/dish3.PNG')} alt="dish1" className="image--file" />
        </div>
        <h3>{props.dishes[2].title}</h3>
        <div className="single--dish__values">
          <ul>
            <li>Wartość energetyczna: {props.dishes[2].kcal} kcal.</li>
            <li>Tłuszcze: {props.dishes[2].fats} g. </li>
            <li>Węglowodany: {props.dishes[2].carbons} g.</li>
            <li>Białko: {props.dishes[2].proteins} g.</li>
          </ul>
        </div>
        <div className="single--dish__buttons">
          <button className="showRecipe_btn">Pokaż przepis</button>
          <button className="showRecipe_btn">Dodaj do jadłospisu</button>
        </div>
      </div>
    </div>
  </div>;
};

export default Content;
