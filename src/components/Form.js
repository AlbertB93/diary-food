import React from "react";
import "../scss/Form.css";

const Form = () => {
  return (
    <div id="searchBar">
      <p>Znajdź wybrany przepis</p>
      <form>
        <input
          type="text"
          value={""}
          placeholder="Wpisz składnik lub potrawę"
        ></input>
      </form>
    </div>
  );
};

export default Form;
