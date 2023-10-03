import "./scss/App.css";
import Engine from "./components/Engine";

function App() {
  return (
    <div className="App">
      <div className="app--title">
        <h1>Skomponuj swój dzień jedzenia !</h1>
      </div>
      <Engine />
    </div>
  );
}

export default App;
