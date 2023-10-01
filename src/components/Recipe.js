import "../scss/Recipe.scss";

const Recipe = (props) => {

  const closeRecipe = () => {
    let element = document.getElementById('recipe--container');
    let recipeValues = document.getElementsByClassName('single--dish__values');
    let singleDish = document.getElementsByClassName('single--dish');

    element.style.display = "none";
    for (let i = 0; i < recipeValues.length; i++) {
      recipeValues[i].style.display = "flex"
      singleDish[i].style.opacity = 1;
    }

  }


  return (
    <div id="recipe--container">
      <div className="recipe--container__title">
        <div className="image">
          <img
            src={require("../images/dish1.PNG")}
            alt="dish1"
            className="image--file"
          />
        </div>
        <div className="first--row">
          <h1>{props.posilek.title}</h1>
          <div className="second--row">
            <p className="values">
              wartość energetyczna:  {props.posilek.kcal} kcal.
            </p>
            <p className="values">
              tłuszcze:  {props.posilek.fats} g.
            </p>
            <p className="values">
              węglowodany:  {props.posilek.carbons} g.
            </p>
            <p className="values">
              białka:  {props.posilek.proteins} g.
            </p>
          </div>
        </div>

      </div>
      <button className="btn__close" onClick={() => closeRecipe()}>Zamknij </button>
      <div className="recipe--container__imageAndIgredients">

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
