import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        Dictionary 
    </header>
        <div className="structure">
        <main>
      <p className="subHeader">look me up!</p>
      <Dictionary />
    </main>
    </div>
    <footer className="App-footer">
          <small> 
             <a href="https://github.com/a-Mafalda/dictionary-project" target="_blank rel="noreferrer>
               Open-sourced code
             </a>
             , by Mafalda Fonseca da Costa
             </small>
        </footer>
     </div>
      </div>
  );
}


