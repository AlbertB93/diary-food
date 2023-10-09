import "../scss/Day.css";
import { dishes } from "../data/dishes.js";

const Day = (props) => {

  let kcalDay = 0;
  let kcalDay2 = 0;

  function testowa(){
    kcalDay = props.selectedMeal.kcal
    kcalDay2 += kcalDay;
    return kcalDay2;
  }


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
      <div id="meal--container">
        {/*       <div className="meal">
        <div className="meal--title">
          <div className="meal--title__image--day">
            <img
              src={dishes[2].imageState}
              alt="dish1"
              className="image--file"
            />
          </div>
          {props.selectedMeal.title}
        </div>
        <div className="meal--values">
            <p id="meal--kcal">kcal: {props.selectedMeal.kcal}</p>, 
            <p id="meal--fats">tłuszcze: {props.selectedMeal.fats}</p>, 
            <p id="meal--carbons">węgle: {props.selectedMeal.carbons},</p>, 
            <p id="meal--proteins">białko: {props.selectedMeal.proteins}</p>, 
        </div>
      </div> */}
      </div>
      <h3>Podsumowanie: </h3>
      {
        <ul>
          <li >Wartość energetyczna: {testowa()} kcal. </li>
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
