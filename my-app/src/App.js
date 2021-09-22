import logo from "./logo.svg";
import "./App.css";

function App() {
  // Pot money
  // bet 글자 선택 UI
  // Bet button
  return (
    <div className="App">
      <div className="container">
        <div className="jumbotron">Lottery</div>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
