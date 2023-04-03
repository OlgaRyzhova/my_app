import "./App.css";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App" id="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <Home />
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
