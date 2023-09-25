import React, { useState } from "react";
import "./Day.css";

const Day = (props) => {
  const sumDay = {
    kcal: 0,
    fats: 0,
    carbons: 0,
    proteins: 10,
  };

  const [summaryDay, setSummaryDay] = useState(sumDay);

  const handleCalculate = () => {
    summaryDay.kcal = summaryDay.kcal + 100;
    setSummaryDay(summaryDay);
    console.log("dziala");
  };

  let valuesDishes = [
    { kcal: 480, fats: 20, carbons: 70, proteins: 30 },
    { kcal: 125, fats: 10, carbons: 35, proteins: 10 },
  ];

  return (
    <div id="day">
      <h3>Aktualny jadłospis: </h3>
      <div className="meal" id="meal-1">
        Posiłek pierwszy: kcal: {valuesDishes[0].kcal}, tłuszcze:{" "}
        {valuesDishes[0].fats}, węgle: {valuesDishes[0].carbons}, białko:{" "}
        {valuesDishes[0].proteins},
      </div>
      <div className="meal" id="meal-2">
        Posiłek drugi: kcal: {valuesDishes[1].kcal}, tłuszcze:{" "}
        {valuesDishes[1].fats}, węgle: {valuesDishes[1].carbons}, białko:{" "}
        {valuesDishes[1].proteins},
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
      {
        <ul>
          <li>Wartość energetyczna: {sumDay.kcal} kcal. </li>
          <li>Węglowodany: {summaryDay.carbons} g.</li>
          <li>Białko: {summaryDay.proteins} g.</li>
          <li>Tłuszcze: {summaryDay.fats} g. </li>
        </ul>
      }
      <button onClick={() => handleCalculate()}> Oblicz </button>
    </div>
  );
};

export default Day;
