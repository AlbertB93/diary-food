import React from "react";
import "./Day.css";

const Day = (props) => {
  return (
    <div id="day">
      <h3>Aktualny jadłospis: </h3>
      <div className="meal" id="meal-1">
        Posiłek pierwszy:{" "}
      </div>
      <div className="meal" id="meal-2">
        Posiłek drugi:{" "}
      </div>
      <div className="meal" id="meal-3">
        Posiłek trzeci:{" "}
      </div>
      <div className="meal" id="meal-4">
        Posiłek czwarty:{" "}
      </div>
      <div className="meal" id="meal-5">
        Posiłek piąty:{" "}
      </div>
      <h3>Podsumowanie: </h3>
      <ul>
        <li>Wartość energetyczna: {props.summaryDay.kcal} kcal. </li>
        <li>Węglowodany: {props.summaryDay.carbons} g.</li>
        <li>Białko: {props.summaryDay.proteins} g.</li>
        <li>Tłuszcze: {props.summaryDay.fats} g. </li>
      </ul>
    </div>
  );
};

export default Day;
