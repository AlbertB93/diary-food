import "../scss/Day.css";
import { dishes } from "../data/dishes.js";

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
      <div className="meal">
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
