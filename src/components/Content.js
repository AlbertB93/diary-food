import React from "react";
import "./Content.css";


const Content = (props) => {
  return <div id="content--container">
    <div id="dishes">
      <div className="single--dish">
        <div className="single--dish__image">
          <img src={require('../images/dish1.PNG')} alt="dish1" className="image--file" />
        </div>
        <h3>szakszuka</h3>
        <div className="single--dish__values">
          <ul>
            <li> Wartość energetyczna: 510 kcal.</li>
            <li>Tłuszcze: 12 g. </li>
            <li>Węglowodany: 50 g.</li>
            <li>Białko: 34 g.</li>
          </ul>
        </div>
        <div className="single--dish__buttons">
          <button className="showRecipe_btn">Pokaż przepis</button>
          <button className="showRecipe_btn">Dodaj do jadłospisu</button>
        </div>
      </div>
      <div className="single--dish">
        <div className="single--dish__image">
          <img src={require('../images/dish2.PNG')} alt="dish1" className="image--file" />
        </div>
        <h3>Spaghetti</h3>
        <div className="single--dish__values">
          <ul>
            <li> Wartość energetyczna: 630 kcal.</li>
            <li>Tłuszcze: 34 g. </li>
            <li>Węglowodany: 80 g.</li>
            <li>Białko: 28 g.</li>
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
        <h3>Tortilla z kurczakiem</h3>
        <div className="single--dish__values">
          <ul>
            <li> Wartość energetyczna: 310 kcal.</li>
            <li>Tłuszcze: 8 g. </li>
            <li>Węglowodany: 45 g.</li>
            <li>Białko: 19 g.</li>
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
