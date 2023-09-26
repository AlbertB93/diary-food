import React, { useState } from "react";
import "./Day.css";

const Day = (props) => {
  /*   const [summaryDay, setSummaryDay] = useState({
    kcal: 0,
    fats: 0,
    carbons: 0,
    proteins: 1,
  });
 */
  /*   const handleCalculate = () => {
    summaryDay.kcal += valuesDishes[0].kcal;
    summaryDay.fats += valuesDishes[0].fats;
    summaryDay.carbons += valuesDishes[0].carbons;
    summaryDay.proteins += valuesDishes[0].proteins;
    console.log(summaryDay);
    setSummaryDay(summaryDay);
  }; */

  const [kcalDay, setKcalDay] = useState(0);
  const [fatsDay, setFatsDay] = useState(0);
  const [carbonsDay, setCarbonsDay] = useState(0);
  const [proteinsDay, setProteinsDay] = useState(0);

  const calculateDay = () => {
    setKcalDay(kcalDay + valuesDishes[0].kcal);
    setFatsDay(fatsDay + valuesDishes[0].fats);
    setCarbonsDay(carbonsDay + valuesDishes[0].carbons);
    setProteinsDay(proteinsDay + valuesDishes[0].proteins);
  };
  const calculateDay2 = () => {
    setKcalDay(kcalDay + valuesDishes[1].kcal);
    setFatsDay(fatsDay + valuesDishes[1].fats);
    setCarbonsDay(carbonsDay + valuesDishes[1].carbons);
    setProteinsDay(proteinsDay + valuesDishes[1].proteins);
  };

  let valuesDishes = [
    { kcal: 480, fats: 20, carbons: 70, proteins: 30 },
    { kcal: 200, fats: 10, carbons: 35, proteins: 10 },
  ];

  return (
    <div id="day">
      <h3>Aktualny jadłospis: </h3>
      <div className="meal" id="meal-1">
        I. {props.title}: kcal: {valuesDishes[0].kcal}, tłuszcze:{" "}
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
          <li>Wartość energetyczna: {kcalDay} kcal. </li>
          <li>Tłuszcze: {fatsDay} kcal. </li>
          <li>Węglowodany: {carbonsDay} kcal. </li>
          <li>Białka: {proteinsDay} kcal. </li>
        </ul>
      }
      <button onClick={calculateDay}>Oblicz</button>
      <button onClick={calculateDay2}>Oblicz</button>
    </div>
  );
};

export default Day;
