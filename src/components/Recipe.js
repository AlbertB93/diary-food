import "./Recipe.scss";

const Recipe = (props) => {
  return (
    <div id="recipe--container">
      <div className="recipe--container__title">
        <h2>{props.posilek.title}</h2>
        <button className="btn__close">Zamknij </button>
      </div>
      <div className="recipe--container__imageAndIgredients">
        <div className="image">
          <img
            src={require("../images/dish1.PNG")}
            alt="dish1"
            className="image--file"
          />
        </div>
        <div className="ingredients">
          <h3>Składniki:</h3>
          <ul>
            <li>Składnik 1 z innego pliku</li>
            <li>Składnik 1 z innego pliku</li>
            <li>Składnik 1 z innego pliku</li>
            <li>Składnik 1 z innego pliku</li>
            <li>Składnik 1 z innego pliku</li>
            <li>Składnik 1 z innego pliku</li>
            <li>Składnik 1 z innego pliku</li>
            <li>Składnik 1 z innego pliku</li>
          </ul>
        </div>
      </div>
      <div className="recipe--container__description">
        <p>Tekst pobrany</p>
        <p>
          {" "}
          Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
          przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez
          nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć
          wieków później zaczął być używany przemyśle elektronicznym, pozostając
          praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz
          z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a
          ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem
          przeznaczonym do realizacji druków na komputerach osobistych, jak
          Aldus PageMakerLorem Ipsum jest tekstem stosowanym jako przykładowy
          wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w
          XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej
          książki. Pięć wieków później zaczął być używany przemyśle
          elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował
          się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu,
          zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne
          wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków
          na komputerach osobistych, jak Aldus PageMaker{" "}
        </p>
      </div>
    </div>
  );
};

export default Recipe;
