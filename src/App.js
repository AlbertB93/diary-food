import "./App.css";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Day from "./components/Day";

function App() {

  return (
    <div className="App">
      <div className="app--title">      
      <h1>Skomponuj swój dzień jedzenia !</h1>
      </div>
      <Menu />
      <Content />
      <Day />
    </div>
  );
}

export default App;
