import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">📖</header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Yasmin and is{" "}
            <a
              href="https://github.com/yasminlawre/react-dictionary"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on Github
            </a>{" "}
            and{" "}
            <a
              href="https://luminous-croquembouche-0c4982.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
